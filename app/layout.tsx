import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
   title: "Ammar Khattak | Frontend Developer",
  description:
    "Frontend Developer and Computer Science Student from Pakistan specializing in responsive web development and modern UI.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Pakistan",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}