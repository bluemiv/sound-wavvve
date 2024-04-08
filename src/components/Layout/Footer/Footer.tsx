import Copyright from '@/components/Layout/Footer/Copyright';
import { Icons } from '@/components';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <footer className="h-footer px-lg py-md text-center flex flex-col gap-md">
      <Copyright />
      <div className="flex items-center justify-center gap-lg">
        {(
          [
            {
              label: 'Github',
              href: process.env.NEXT_PUBLIC_GITHUB_LINK,
              icon: <Icons.Github />,
            },
            {
              label: 'Blog',
              href: process.env.NEXT_PUBLIC_BLOG_LINK,
              icon: <Icons.Tistory />,
            },
          ] as { label: string; href: string; icon: ReactNode }[]
        )
          .filter((v) => !!v.href)
          .map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-sm hover:text-primary-hover active:text-primary-active"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
      </div>
    </footer>
  );
}
