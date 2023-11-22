import './global.css';
import HeaderSection from "@meetqa/marketing/components/HeaderSection";
import {Inter} from "next/font/google";

export const metadata = {
  title: 'Welcome to marketing',
  description: 'Generated by create-nx-workspace',
};

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {stargazers_count} = await (await fetch('https://api.github.com/repos/github-20k/meetqa')).json();

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection stars={stargazers_count} />
        <main className="mb-40">
          {children}
        </main>
      </body>
    </html>
  );
}
