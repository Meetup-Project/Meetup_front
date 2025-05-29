import localFont from 'next/font/local';

export const jalan2 = localFont({
  src: [
    {
      path: '../public/fonts/jalan2/Jalnan2.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/jalan2/Jalnan2.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jalan2',
  display: 'swap',
});
