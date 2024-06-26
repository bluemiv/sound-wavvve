'use client';

import { useState } from 'react';
import { AudioUploadButton, AudioVisualizer } from '@/components';
import { getAudioBuffer } from '@/utils';

export default function Home() {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  const onLoadFile = async (reader: FileReader) => {
    const audioArrayBuffer = reader.result;
    if (!audioArrayBuffer) return;
    const audioBuffer = await getAudioBuffer(audioArrayBuffer as ArrayBuffer);
    return setAudioBuffer(audioBuffer);
  };

  return (
    <main className="flex-1 p-lg">
      <div className="text-center text-3xl flex flex-col gap-lg h-[300px] justify-center">
        <span>오디오 파일을 업로드하면</span>
        <span>
          <span className="text-primary">오실로스코프 파형</span>을 만들어 드립니다.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-xl">
        <AudioUploadButton onLoad={onLoadFile} onError={console.error} />
        {!!audioBuffer && (
          <AudioVisualizer className="animate-fade-in-wave" audioBuffer={audioBuffer} />
        )}
      </div>
    </main>
  );
}
