import { NextRequest } from "next/server";

import { ContactFormSchemaType } from "@/modules/ContactSection/_schemas/contactForm.schema";

export async function POST(request: NextRequest) {
  const res: ContactFormSchemaType = await request.json();
  console.log(res);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json({
    name: res.name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  });
}
