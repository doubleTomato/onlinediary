"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
  const pathname = usePathname(); // 현재 경로 가져오기

  const isActive = (path: string) => pathname === path;


    return(
            <header className="size-[15%] bg-red-500 h-lvh pt-10 pl-5">
                 <div className="max-w-4xl mx-auto h-10">
                       <nav className="flex flex-col">
                         <div>이미지</div>
                         <Link href="/profile" className={`px-3 py-2 rounded ${isActive("/profile") ? "bg-blue-500 text-white font-bold" : "text-gray-300"}`}>
                            Profile
                         </Link>
                         <Link href="/" className={`px-3 py-2 rounded ${isActive("/") ? "bg-blue-500 text-white font-bold" : "text-gray-300"}`}>
                          DiaryApp
                         </Link>
                         <Link href="/dashboard"  className={`px-3 py-2 rounded ${isActive("/dashboard") ? "bg-blue-500 text-white font-bold" : "text-gray-300"}`}>
                          Dashboard
                         </Link>
                       </nav>
                     </div>
              </header>
    );
}