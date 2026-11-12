import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
export const metadata: Metadata = { title: 'SIJ Cloud | Experimental', description: 'Demonstração independente para cidades RP.' };
export default function RootLayout({ children }: { children: ReactNode }) {
 return <html lang="pt-BR"><body>{children}</body></html>;
}
