import { NextResponse } from 'next/server';

export async function GET() {
    // Return default WhatsApp configuration
    return NextResponse.json({
        phoneNumber: '+33620352428',
        message: 'Bonjour, je souhaite vous contacter.',
        position: 'bottom-right',
        theme: 'light'
    });
}