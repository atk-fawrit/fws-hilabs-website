import { NextRequest, NextResponse } from 'next/server';

/**
 * Dynamic QR Code Redirect Handler (Catch-all)
 * 
 * Handles redirects like /qr/lucknow, /qr/lucknow/office-sign, etc.
 * Nested paths are joined with '/' for matching in REDIRECT_MAP.
 */

const REDIRECT_MAP: Record<string, string> = {
  'lucknow': '/',
  'lucknow/testing': '/testing',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  // In Next.js 15+, params is a Promise
  const resolvedParams = await params;

  // slug is an array of path segments
  const path = resolvedParams.slug.join('/');

  const destination = REDIRECT_MAP[path];

  if (!destination) {
    // If no redirect exists for this path, redirect to homepage
    return NextResponse.redirect(new URL('/', request.url), 307);
  }

  // Perform the redirect
  return NextResponse.redirect(new URL(destination, request.url).toString(), 307);
}
