import { ChangeEvent } from 'react';

interface TProps {
  onLoad: (reader: FileReader) => void;
  onError: (error: ProgressEvent<FileReader>) => void;
}

export default function AudioUpload({ onLoad, onError }: TProps) {
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

  return <input type="file" accept="audio/*" onChange={onChange} />;
}
