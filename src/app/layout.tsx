import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bottoli Young Star Club",
  description: "Official website of Bottoli Young Star Club",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
