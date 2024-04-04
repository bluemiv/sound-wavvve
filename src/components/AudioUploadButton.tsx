'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '@/components';

interface TProps {
  onLoad: (reader: FileReader) => void;
  onError: (error: ProgressEvent<FileReader>) => void;
}

export default function AudioUploadButton({ onLoad, onError }: TProps) {
  const [filename, setFilename] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    const file = files[0];
    setFilename(file.name);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    if (!!onLoad) {
      reader.onload = () => onLoad(reader);
    }
    if (!!onError) {
      reader.onerror = onError;
    }
  };

  return (
    <div className="flex flex-col gap-sm items-center">
      <input className="hidden" ref={inputRef} type="file" accept="audio/*" onChange={onChange} />
      <Button onClick={() => inputRef.current?.click()}>파일 업로드</Button>
      {!!filename && <span className="text-sm">{filename}</span>}
    </div>
  );
}
