import "./globals.css";

export const metadata = {
  title: "Smart Contract Lottery",
  description: "Next App for the frontend of Smart Contract Lottery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
