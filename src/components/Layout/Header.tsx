import Link from 'next/link';
import { ROUTE_PATH } from '@/constants';

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-zinc-800 h-header text-white sticky top-0">
      <Link
        href={ROUTE_PATH.HOME}
        className="flex items-center justify-center gap-sm font-semibold text-lg"
      >
        <span>SOUND</span>
        <span className="text-primary">WAVVVE</span>
      </Link>
    </header>
  );
}
