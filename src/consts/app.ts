import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Silk Warp UI ';
export const APP_DESCRIPTION = 'A DApp for Silk Warp Route transfers';
export const APP_URL = 'Silk-warp-template.vercel.app';
export const BRAND_COLOR = Color.primary['200'];
export const BACKGROUND_COLOR = Color.customGreen;
// export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
