export default function Header(){
    return(
            <header className="bg-white shadow-md p-4 fixed w-full top-0 flex py-10">
                 <div className="max-w-4xl mx-auto flex justify-between items-center h-10">
                       <a href="/" className="text-xl font-bold">DiaryApp</a>
                       <nav className="flex">
                         <a href="/dashboard" className="px-4">Dashboard</a>
                         <a href="/profile" className="px-4">Profile</a>
                       </nav>
                     </div>
              </header>
    );
}