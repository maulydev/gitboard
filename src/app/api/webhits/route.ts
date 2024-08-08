import { NextRequest, NextResponse } from "next/server";
import UAParser from "ua-parser-js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface RequestBody {
  path: string;
}

export async function POST(request: NextRequest) {
  try {
    const requestBody: RequestBody = await request.json();
    const userAgent = request.headers.get("user-agent") || "";

    // Parse user agent string to get OS and browser details
    const parser = new UAParser(userAgent);
    const os = parser.getOS().name || "";
    const browser = parser.getBrowser().name || "";

    if (process.env.NODE_ENV === "production") {
      const newHit = await prisma.webhits.create({
        data: {
          browser,
          os,
          path: requestBody.path,
        },
      });

      return NextResponse.json(newHit);
    }
    return NextResponse.json({ message: "You're in development mode" });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to process request ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  const data = await prisma.webhits.findMany();
  const home = data.filter((hit: any) => hit.path === "/")?.length
  const profile = data.filter((hit: any) => hit.path.startsWith("/profile"))?.length
  const totalHits = data.length;

  return Response.json({ home, profile, totalHits, data });
}
