import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('synexis_labs');
    await db.collection('contacts').insertOne({ name, email, message, createdAt: new Date() });

    return NextResponse.json({ success: true, message: 'Message received. We will contact you soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Unable to process the request' }, { status: 500 });
  }
}
