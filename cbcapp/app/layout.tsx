import type { Metadata } from "next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopNarBar from "@/components/topnavbar";



export const metadata: Metadata = {
  title: "CBC Event Viewer",
  description: "Whatever you want...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNarBar />
        {children}
      </body>
    </html>
  );
}
