import { manrope } from '@/assets/font';
import LayoutProvider from '@/lib/providers/LayoutProvider';
import '@/styles/globals.css';

export const metadata = {
  title: 'Nivelle',
  description: 'Built Payment for Digital Freelancers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
