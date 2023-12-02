"use client";
import { useGetPostQuery } from "@/app/redux/api/postApi";
import React from "react";

export default function PostService() {
  const { data } = useGetPostQuery({});
  console.log(data);
  return <div className="bg-re">item</div>;
}
