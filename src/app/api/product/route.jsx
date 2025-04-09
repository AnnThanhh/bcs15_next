import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(req);
  //Kết nối database = connectionstring.... (select, from, where,...)
  //   const res = [
  //     { id: 1, name: "Nam" },
  //     { id: 2, name: "Thịnh" },
  //     { id: 3, name: "Khang" },
  //   ];

  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const keyword = params.get("keyword");
  console.log(keyword);

  let uri = "https://apistore.cybersoft.edu.vn/api/Product";
  if (keyword) {
    uri = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`;
  }

  const res = await fetch(uri);

  if (!res.ok) {
    return new Error("fail to fetch data");
  }

  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
