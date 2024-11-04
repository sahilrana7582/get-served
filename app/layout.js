'use client'; // Add this directive to make the component a client component

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './component/Nav';
import Footer from './component/Footer';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { Provider } from 'react-redux';
import store from '@/store';

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

  return (
    <ClerkProvider afterSignOutUrl="/login">
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Provider store={store}>
            {/* Conditionally render Navbar based on the current route */}
            {pathname !== '/login' && <Navbar />}

            {children}
            {pathname !== '/login' && <Footer />}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
