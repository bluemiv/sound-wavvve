import { ChangeEvent } from 'react';

interface TProps {
  onLoad: () => void;
  onError: (error: ProgressEvent<FileReader>) => void;
}

export default function AudioUpload({ onLoad, onError }: TProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    const reader = new FileReader();
    if (!!onLoad) {
      reader.onload = onLoad;
    }
    if (!!onError) {
      reader.onerror = onError;
    }
  };

  return <input type="file" accept="audio/*" onChange={onChange} />;
}
