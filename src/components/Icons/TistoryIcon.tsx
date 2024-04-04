import { TPropsWithClassName } from '@/types';

export default function TistoryIcon({ className }: TPropsWithClassName) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 408.4 408.4"
      className={className}
    >
      <g>
        <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
        <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
      </g>
    </svg>
  );
}
