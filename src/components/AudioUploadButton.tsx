'use client';

import { ChangeEvent, useRef } from 'react';
import Button from '@/components/Button';

interface TProps {
  onLoad: (reader: FileReader) => void;
  onError: (error: ProgressEvent<FileReader>) => void;
}

export default function AudioUploadButton({ onLoad, onError }: TProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    const file = files[0];
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
    <div className="relative">
      <input
        className="-z-10 absolute top-[5px] left-[29px]"
        ref={inputRef}
        type="file"
        accept="audio/*"
        onChange={onChange}
      />
      <Button onClick={() => inputRef.current?.click()}>파일 업로드</Button>
    </div>
  );
}
