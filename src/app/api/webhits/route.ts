import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import UAParser from "ua-parser-js";

// Define path to the JSON file where device information will be stored
const filePath = path.join(process.cwd(), "deviceInfo.json");

// Define interface for the request body
interface RequestBody {
  path: string;
}


export async function POST(request: NextRequest) {
  try {
    // Parse request body as RequestBody type
    const requestBody: RequestBody = await request.json();

    // Extract user agent from request headers
    const userAgent = request.headers.get("user-agent") || "";

    // Parse user agent string to get OS and browser details
    const parser = new UAParser(userAgent);
    const os = parser.getOS().name || "";
    const browser = parser.getBrowser().name || "";

    // Prepare device information object
    const newDeviceInfo = {
      os,
      browser,
      timestamp: new Date().toString(),
      path: requestBody.path,
    };

    return NextResponse.json(newDeviceInfo);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "deviceInfo.json");

    const fileContent = fs.readFileSync(filePath, "utf-8");

    const data = JSON.parse(fileContent);
    const homepageHits = data?.filter((hit: any) => hit.path === "/");
    const profileHits = data?.filter((hit: any) =>
      hit.path.startsWith("/profile")
    );

    const summary = {
      count: data?.length,
      homepage: homepageHits?.length,
      profile: profileHits?.length,
    };

    return Response.json({ summary, data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
