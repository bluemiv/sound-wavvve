'use client';

import { AudioUpload, AudioVisualizer } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);

  const onLoadFile = (reader: FileReader) => {
    const audioArrayBuffer = reader.result as ArrayBuffer | null;
    return setArrayBuffer(audioArrayBuffer);
  };

  return (
    <main className="flex-1">
      <AudioVisualizer arrayBuffer={arrayBuffer} />
      <AudioUpload onLoad={onLoadFile} onError={console.log} />
    </main>
  );
}
