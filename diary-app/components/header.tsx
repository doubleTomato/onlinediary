export default function Header(){
    return(
            <header className="size-[15%] bg-red-500 h-lvh pt-10 pl-5">
                 <div className="max-w-4xl mx-auto h-10">
                       <nav className="flex flex-col">
                         <div>이미지</div>
                         <a href="/profile">Profile</a>
                         <a href="/" className="text-xl font-bold">DiaryApp</a>
                         <a href="/dashboard">Dashboard</a>
                       </nav>
                     </div>
              </header>
    );
}