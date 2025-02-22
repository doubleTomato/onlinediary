

export default function Profile({ children }: { children: React.ReactNode }) {
    return (
      <html>
          <body>
              <div className="min-h-screen flex flex-col">
                <header className="bg-white shadow-md p-4 fixed w-full top-0">
                  <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold">DiaryApp</a>
                    <nav>
                      <a href="/dashboard" className="px-4">Dashboard</a>
                      <a href="/profile" className="px-4">Profile</a>
                    </nav>
                  </div>
                </header>
                <main className="flex-1 mt-16 p-4">{children}</main>
                <footer className="bg-gray-100 p-4 text-center text-sm">
                  © {new Date().getFullYear()} DiaryApp
                </footer>
              </div>
          </body>
      </html>
    );
  }
  