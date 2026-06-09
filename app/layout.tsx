import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Local Jonny's — Coffee Bar & General Store · Dallas, TX",
  description: "Local Jonny's — Specialty coffee by Monomyth, breakfast tacos, craft beer, wine and Texas-made gifts. 5471 Belt Line Rd, Dallas TX.",
  openGraph: {
    title: "Local Jonny's — Coffee Bar & General Store",
    description: "Specialty coffee, breakfast tacos and Texas-made gifts in North Dallas.",
    images: ['/fotos/DSC06478.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
