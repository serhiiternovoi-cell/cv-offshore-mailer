
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CV_OFFSHORE_MAILER — Offshore CV mailing",
  description: "We send your CV to offshore companies worldwide. Fast. Verified. Effective.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
