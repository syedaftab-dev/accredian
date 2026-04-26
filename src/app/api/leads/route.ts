import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Here you would typically store the lead in a database (Prisma, MongoDB, etc.)
    // For this assignment, we'll log it and mock a successful database insertion
    console.log('New Lead Captured:', { name, email, company, phone });

    return NextResponse.json(
      { message: 'Lead captured successfully', lead: { name, email, company } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
