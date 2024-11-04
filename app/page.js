// app/page.js

import { redirect } from 'next/navigation';
import Home from './component/Home';

export default async function Page() {
  const maxRetries = 3;
  let retries = 0;
  let data = null;

  while (retries < maxRetries) {
    try {
      const apiRes = await fetch('https://dummyjson.com/recipes');
      if (!apiRes.ok) throw new Error('Failed to fetch');

      data = await apiRes.json();
      break; // Break if fetch is successful
    } catch (error) {
      console.warn(`Fetch attempt ${retries + 1} failed. Retrying...`, error);
      retries += 1;
    }
  }

  if (!data) {
    console.warn('All fetch attempts failed. Redirecting...');
    redirect('/');
    return <div>Failed to load data after multiple attempts.</div>;
  }

  return (
    <main className="min-h-screen">
      <Home data={data} />
    </main>
  );
}
