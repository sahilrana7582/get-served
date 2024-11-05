'use client'; // Add this directive to make the component a client component

import { ClerkProvider } from '@clerk/nextjs';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './component/Nav';
import Footer from './component/Footer';
import { usePathname, useRouter } from 'next/navigation'; // Import hooks
import { Provider } from 'react-redux';
import store from '@/store';
import { useEffect, useState } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Initialize the router
  const [hasRedirected, setHasRedirected] = useState(false); // State to track redirection

  return (
    <ClerkProvider afterSignOutUrl="/login">
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Provider store={store}>
            {/* Conditionally render Navbar and Footer */}
            {pathname !== '/login' && <Navbar />}
            {children}
            {pathname !== '/login' && <Footer />}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
