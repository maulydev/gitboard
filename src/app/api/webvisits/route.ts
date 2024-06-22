// app/api/get-location/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const geo = request.geo;

  if (!geo) {
    return NextResponse.json({ error: 'Geo data is not available' }, { status: 500 });
  }

  return NextResponse.json({
    city: geo.city,
    region: geo.region,
    country: geo.country,
  });
}
