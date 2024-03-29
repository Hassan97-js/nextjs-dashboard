import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
