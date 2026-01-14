import './globals.css';

export const metadata = {
  title: 'Capoeira Senzala 78',
  description: 'Capoeira Senzala 78 website',
  icons: {
    icon: '/images/logo-capoeirasenzala1.png',
    apple: '/images/logo-capoeirasenzala1.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
