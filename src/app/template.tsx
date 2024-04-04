import React from 'react';
import { Layout } from '@/components';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
      <Layout.Footer />
    </div>
  );
}
