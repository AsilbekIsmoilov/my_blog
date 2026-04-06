import "./globals.css";
import Background from "./Background";

export const metadata = {
  title: "Main Blog",
  description: "Backend developer blog with real-world cases",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Background />

        <main>{children}</main>

      </body>
    </html>
  );
}