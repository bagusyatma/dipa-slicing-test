import { roobert } from '@/assets/font';
import LayoutProvider from '@/lib/providers/LayoutProvider';
import '@/styles/globals.css';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Nivelle',
  description: 'Built Payment for Digital Freelancers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roobert.className} font-roobert antialiased`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
