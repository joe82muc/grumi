import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRUMI Mathe KI API",
  description: "Serverseitige KI-Pruefung fuer GRUMI Mathematik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
