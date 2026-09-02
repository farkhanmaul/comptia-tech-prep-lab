import "./globals.css";

export const metadata = {
  title: "CompTIA Tech+ Prep Lab Indonesia",
  description: "Materi lengkap berbahasa Indonesia untuk persiapan CompTIA Tech+ FC0-U71."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
