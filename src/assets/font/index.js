import localFont from 'next/font/local';

export const roobert = localFont({
  src: [
    {
      path: './Roobert/Roobert-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Roobert/Roobert-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roobert/Roobert-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Roobert/Roobert-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Roobert/Roobert-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roobert/Roobert-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-roobert',
});
