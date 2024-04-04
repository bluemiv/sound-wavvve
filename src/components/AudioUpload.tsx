'use client';

import { ChangeEvent, useRef } from 'react';

interface TProps {
  onLoad: (reader: FileReader) => void;
  onError: (error: ProgressEvent<FileReader>) => void;
}

export default function AudioUpload({ onLoad, onError }: TProps) {
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
    <div>
      <input ref={inputRef} type="file" accept="audio/*" onChange={onChange} className="hidden" />
      <button onClick={() => inputRef.current?.click()}>업로드</button>
    </div>
  );
}
