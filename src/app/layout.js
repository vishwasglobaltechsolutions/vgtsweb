import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from "./navbar/Navbar";
export const metadata = {
  title: "Vishwa's Global Tech Solution | Innovative IT Solutions",
  description: "Transforming businesses with cutting-edge technology solutions. Website development, mobile apps, cloud solutions, digital marketing, business automation and UI/UX design services.",
  keywords: ["IT solutions", "web development", "mobile apps", "cloud services", "digital marketing", "business automation", "UI/UX design", "Vishwa's Global Tech Solution", "VGTS"],
  authors: [{ name: 'Vishwa' }],
  openGraph: {
    title: "Vishwa's Global Tech Solution",
    description: "Innovative IT solutions for the digital age. Website development, mobile apps, cloud services, digital marketing, business automation and UI/UX design services.",
    url: "https://vishwasglobaltechsolution.in",
    siteName: "Vishwa's Global Tech Solution",
    locale: 'en_IN',
    type: 'website',
  },
  // CSP is handled in middleware.js
  
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
