import { NextResponse } from "next/server";

export const POST = async (request)=>{
  const {name, email, password} = await request.json();
  console.log(name,email, password)
  // Create a db connection
  


  return new NextResponse

}