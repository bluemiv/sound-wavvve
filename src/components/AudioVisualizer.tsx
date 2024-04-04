'use client';

import { useEffect, useRef } from 'react';

interface TProps {
  audioUrl: string;
}

export default function AudioVisualizer({ audioUrl }: TProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!audioUrl || !canvas) return;

    const canvasContext = canvas.getContext('2d');

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const audioContext = audioContextRef.current;
  }, [audioUrl]);

  return <canvas ref={canvasRef} width={600} height={300} />;
}
