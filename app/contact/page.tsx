import { Suspense } from 'react';
import ContactPageClient from '@/components/ContactPageClient';

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageClient />
    </Suspense>
  );
}
