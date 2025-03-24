import { JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "rochdi hiba",
  description: "portfolio rochdi hiba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jetBrains_Mono.variable}>
       <Header />
       <StairTransition></StairTransition>
       <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
