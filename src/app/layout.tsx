import React from 'react';
import classNames from 'classnames';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Sound Wavvve',
  description: '음성 파일을 업로드하시면 오실로스코프를 만들어드립니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={classNames(pretendard.className, 'bg-zinc-800 text-white')}>{children}</body>
    </html>
  );
}
