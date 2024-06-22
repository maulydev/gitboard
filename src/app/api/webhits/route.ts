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
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ data: "Hello" });
}
