import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: '--font-dmSans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata = {
  title: "Restro Booking | Prathmesh Gaidhane",
  description: "Crafted with Love by Prathmesh !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-dmSans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
