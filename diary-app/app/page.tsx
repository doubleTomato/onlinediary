import Link from "next/link";

export default function Home() {
    return (
      <>
      <div>
        <h1 className="text-3xl font-bold mb-4">📖 온라인 일기장</h1>
        <p className="text-gray-600 mb-6">당신만의 일기를 기록하고 공유하세요!</p>
        <Link href="/diary" className="px-6 py-2 bg-blue-500 text-white rounded-lg">
           새 일기 쓰기
        </Link>
        <button className="rounded-full bg-red-500 w-10 h-10 text-white fixed bottom-20 right-10 align-middle">+</button>
      </div>
      </>
    );
  }
  