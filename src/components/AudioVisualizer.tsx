'use client';

import { useEffect, useRef } from 'react';

interface TProps {
  arrayBuffer: ArrayBuffer;
}

export default function AudioVisualizer({ arrayBuffer }: TProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    initialize();
  }, [arrayBuffer]);

  const initialize = async () => {
    if (!canvasRef.current) return;

    audioContextRef.current = new AudioContext();
    const audioContext = audioContextRef.current;
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    draw({ audioBuffer });
  };

  const draw = ({ audioBuffer }: { audioBuffer: AudioBuffer }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) return;

    const width = canvas.width;
    const height = canvas.height;

    canvasContext.clearRect(0, 0, width, height);

    const dataArray = audioBuffer.getChannelData(0);

    canvasContext.fillStyle = '#ffffff';
    canvasContext.fillRect(0, 0, width, height);

    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = 'red';
    canvasContext.beginPath();

    const step = Math.ceil(dataArray.length / width);
    const amp = height / 2;

    for (let i = 0; i < width; i++) {
      let min = 1;
      let max = -1;
      for (let j = 0; j < step; j++) {
        const datum = dataArray[i * step + j];
        if (datum < min) min = datum;
        if (datum > max) max = datum;
      }
      canvasContext.lineTo(i, (1 + min) * amp);
      canvasContext.lineTo(i, (1 + max) * amp);
      canvasContext.moveTo(i + 1, amp);
    }
    canvasContext.stroke();
  };

  return <canvas ref={canvasRef} width={(window.innerWidth * 2) / 3} height={400} />;
}
