export default function Header(){
    return(
            <header className="bg-white shadow-md  fixed w-[80%] top-0 flex py-2">
                 <div className="max-w-4xl mx-auto flex justify-around items-center h-10">
                       <a href="/">DiaryApp</a>
                       <nav className="flex">
                         <a href="/dashboard" className="px-4">Dashboard</a>
                         <a href="/profile" className="px-4">Profile</a>
                       </nav>
                     </div>
              </header>
    );
}