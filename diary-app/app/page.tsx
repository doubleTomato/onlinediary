import Header from "../components/header";
export default function Home() {
    return (
      <>
      <Header></Header>
      <div>
        <h1 className="text-3xl font-bold mb-4">📖 온라인 일기장</h1>
        <p className="text-gray-600 mb-6">당신만의 일기를 기록하고 공유하세요!</p>
        <a href="/dashboard" className="px-6 py-2 bg-blue-500 text-white rounded-lg">
          시작하기
        </a>
      </div>
      </>
    );
  }
  