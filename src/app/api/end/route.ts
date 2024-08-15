import { NextResponse } from "next/server";



export const GET = async () => {
 try {
 const posts = {end: '*'};
 return NextResponse.json({ message: "ok", posts }, { status: 200 })
 } catch (err) {
 return NextResponse.json({ message: "error", err }.err, { status: 500 });
 }
 } 