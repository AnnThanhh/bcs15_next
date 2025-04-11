import { NextResponse } from "next/server";

export function middleWare(req) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const url = req.nextUrl.clone();

  //kiểm tra đăng nhập
  //nếu chưa đăng nhập -> redirect về login
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  //nếu đã đăng nhập rồi
  if (role !== "admin" && req.nextUrl.pathname.startWith("/admin")) {
    // url.pathname = "/403";
    url.pathname = "/"
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
