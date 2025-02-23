import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body>
            <div className="min-h-screen flex flex-col">
              <main>{children}</main>
              <footer className="bg-gray-100 p-4 text-center text-sm">
                © {new Date().getFullYear()} DiaryApp
              </footer>
            </div>
        </body>
    </html>
  );
}
