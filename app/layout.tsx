import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Synexis Labs | #1 AI Automation & Web Development Agency Global',
  description: 'Premium AI automation, web development, and digital transformation services for businesses worldwide. Rank #1 on Google, automate sales, scale revenue. USA, UK, Canada, Dubai.',
  keywords: [
    'best AI automation agency worldwide',
    'web development company USA UK Canada',
    'AI automation services global',
    'lead generation automation platform',
    'WhatsApp business automation',
    'chatbot development company',
    'digital transformation services',
    'CRM automation software',
    'conversion optimization agency',
    'business automation solutions',
    'custom web development services',
    'AI-powered chatbot builder',
    'multi-channel marketing automation',
    'booking system development',
    'lead capture funnel builder',
    'affordable web design services',
    'enterprise automation platform',
    'digital agency for startups',
    'SaaS development company',
    'growth marketing automation'
  ],
  metadataBase: new URL('https://synexislabs.com'),
  openGraph: {
    title: 'Synexis Labs | #1 AI Automation & Web Development Agency',
    description: 'Premium AI automation, web development, and digital solutions. Rank on Google, automate sales, scale revenue globally.',
    type: 'website',
    siteName: 'Synexis Labs',
    url: 'https://synexislabs.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synexis Labs | AI Automation & Web Development #1 Global Agency',
    description: 'AI automation, web development, and digital solutions for businesses worldwide.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  alternates: {
    canonical: 'https://synexislabs.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="author" content="Synexis Labs" />
        <link rel="canonical" href="https://synexislabs.com" />
      </head>
      <body className="bg-[#020207] text-white antialiased">{children}</body>
    </html>
  );
}
