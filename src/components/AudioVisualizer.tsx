'use client';

import { useEffect, useRef } from 'react';

interface TProps {
  audioBuffer: AudioBuffer;
}

export default function AudioVisualizer({ audioBuffer }: TProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !audioBuffer) return;
    draw({ audioBuffer });
  }, [audioBuffer]);

  const draw = ({ audioBuffer }: { audioBuffer: AudioBuffer }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) return;

    const width = canvas.width;
    const height = canvas.height;

    canvasContext.clearRect(0, 0, width, height);

    const dataArray = audioBuffer.getChannelData(0);

    canvasContext.fillStyle = 'rgba(0,0,0,0)';
    canvasContext.fillRect(0, 0, width, height);

    canvasContext.lineWidth = 1;

    const step = Math.ceil(dataArray.length / width);
    const amp = height / 2;

    const colors = [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d',
    ];
    const colorWidth = Math.ceil(width / colors.length);

    for (let i = 0; i < width; i++) {
      const colorIdx = Math.floor(i / colorWidth);
      canvasContext.strokeStyle = colors[colorIdx];
      canvasContext.beginPath();

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

      canvasContext.stroke();
    }
  };

  return <canvas ref={canvasRef} width={(window.innerWidth * 2) / 3} height={300} />;
}
