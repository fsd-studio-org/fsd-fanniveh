import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import './globals.css';
import Layout from "@/components/layout/Layout";

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const fontPrimary = localFont({
    src: '../fonts/ClashDisplay-Medium.otf',
    variable: '--font-primary',
});

const fontPrimaryRegular = localFont({
    src: '../fonts/ClashDisplay-Regular.otf',
    variable: '--font-primary-regular',
});

const fontSecondary = localFont({
    src: '../fonts/Orbitron Bold.otf',
    variable: '--font-secondary',
    display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
        <html lang="hu" className={`${geistSans.variable} ${fontSecondary.variable} ${geistMono.variable} ${fontPrimary.variable} ${fontPrimaryRegular.variable}`}>
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}