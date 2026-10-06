import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#CE482A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cressco.id'),
  title: "Cressco — Smarter Management for Modern Bimbels",
  description:
    "Platform operasional all-in-one untuk bimbel modern di Indonesia. Kelola kelas, siswa, pembayaran, cabang, dan tentor dalam satu sistem terpadu.",
  keywords: [
    "bimbel",
    "software bimbel",
    "aplikasi bimbel",
    "manajemen bimbel",
    "cressco",
    "tutoring center SaaS",
    "administrasi bimbel",
    "honor tentor",
    "sistem pembayaran bimbel"
  ],
  authors: [{ name: "Cressco" }],
  openGraph: {
    title: "Cressco — Smarter Management for Modern Bimbels",
    description:
      "Kelola kelas, siswa, pembayaran, cabang, dan tentor dalam satu platform yang sederhana.",
    url: "https://cressco.id",
    siteName: "Cressco",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/cressco-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Cressco Bimbel Operating Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cressco — Smarter Management for Modern Bimbels",
    description: "Satu sistem untuk membantu owner, admin, dan tentor bekerja lebih teratur setiap hari.",
    images: ["/images/cressco-dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${dmSans.variable}`}>
      <body className="font-sans antialiased text-charcoal-900 bg-[#FAFAF9] selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
