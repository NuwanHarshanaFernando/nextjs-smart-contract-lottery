import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Smart Contract Lottery",
  description: "Next App for the frontend of Smart Contract Lottery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      > 
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
