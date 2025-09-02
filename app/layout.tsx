import "../styles/index.sass";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EgyBits - Software House",
  description: "EgyBits - Professional Software Development Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>EgyBits - Software House</title>
        <meta
          name="description"
          content="EgyBits delivers custom software solutions that transform businesses. From web applications to mobile apps, we provide cutting-edge technology services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EgyBits - Software House" />
        <meta
          property="og:description"
          content="EgyBits delivers custom software solutions that transform businesses. From web applications to mobile apps, we provide cutting-edge technology services."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EgyBits - Software House" />
        <meta
          name="twitter:description"
          content="EgyBits delivers custom software solutions that transform businesses. From web applications to mobile apps, we provide cutting-edge technology services."
        />
      </head>
      <body className={cn(inter.variable, poppins.variable)}>{children}</body>
    </html>
  );
}
