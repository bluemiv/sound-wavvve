'use client';

import { useState } from 'react';
import { AudioUpload, AudioVisualizer } from '@/components';
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
    <main className="flex-1">
      <div></div>
      <AudioUpload onLoad={onLoadFile} onError={console.log} />
      {!!audioBuffer && <AudioVisualizer audioBuffer={audioBuffer} />}
    </main>
  );
}
