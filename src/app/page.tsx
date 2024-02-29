'use client';

import dynamic from 'next/dynamic';

const Library = dynamic(() => import('../components/Library'));

export default function Home() {
  return (
    <main>
      <Library />
    </main>
  );
}
