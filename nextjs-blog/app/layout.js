import "./globals.css";

export const metadata = {
  title: "Blog - Next.js",
  description: "A modern blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
