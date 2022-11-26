// middleware.ts
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export default async function middleware(req, res) {
  const token = req.cookies.get('token');

  if (!token && !req.nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect('http://localhost:3000/auth/login');
  }
  // # Login
  if (token && req.nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect('http://localhost:3000/');
  }
  // # Register
  if (token && req.nextUrl.pathname === '/auth/register') {
    return NextResponse.redirect('http://localhost:3000/');
  }
    // # Profile
    if (!token && req.nextUrl.pathname === '/profile') {
      return NextResponse.redirect('http://localhost:3000/auth/login');
    }
  // if (token && req.nextUrl.pathname === '/profile') {
  //   return NextResponse.redirect('http://localhost:3000/profile');
  // }
  // # API Folder
  // if (token && req.nextUrl.pathname.startsWith('/api')) {
  //   return NextResponse.redirect('http://localhost:3000/');
  // }
  // if(token && req.nextUrl.pathname.startsWith('/auth')){
  //   return NextResponse.redirect('http://localhost:3000/')
  // }
}
