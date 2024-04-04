import { AudioUpload } from '@/components';

export default function Home() {
  return (
    <main className="flex-1">
      <AudioUpload onLoad={console.log} onError={console.log} />
    </main>
  );
}
