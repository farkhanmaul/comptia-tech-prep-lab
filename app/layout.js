import "./globals.css";

export const metadata = {
  title: "CompTIA Tech+ Prep Lab",
  description: "A focused study dashboard for the CompTIA Tech+ FC0-U71 exam."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
