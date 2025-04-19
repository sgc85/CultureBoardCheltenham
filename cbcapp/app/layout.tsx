"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TopNarBar from "@/components/topnavbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <title>CBC APP</title>
      <html lang="en">
        <body>
          <TopNarBar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
