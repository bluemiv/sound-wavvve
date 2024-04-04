'use client';

import { useEffect, useRef } from 'react';

interface TProps {
  arrayBuffer?: ArrayBuffer | null;
}

export default function AudioVisualizer({ arrayBuffer }: TProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    initialize();
  }, [arrayBuffer]);

  const initialize = async () => {
    if (!arrayBuffer || !canvasRef.current) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
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

    canvasContext.fillStyle = 'rgb(255, 255, 255)';
    canvasContext.fillRect(0, 0, width, height);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(0, 0, 0)';
    canvasContext.beginPath();

    const bufferLength = audioBuffer.length;
    const dataArray = audioBuffer.getChannelData(0);

    const sliceWidth = width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] * 0.5 + 0.5;
      const y = v * height;

      if (i === 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();
  };

  return <canvas ref={canvasRef} width={600} height={300} />;
}
