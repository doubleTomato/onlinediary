import Header from "../components/header";
import Nav from "../components/nav";
import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body>
          <div className="flex ">
              <Header></Header>
              <div className="size-[85%] m-auto h-lvh px-10">
                <Nav></Nav>
                <main>{children}</main>
                <footer className="bg-gray-100 p-4 text-center text-sm">
                  © {new Date().getFullYear()} DiaryApp
                </footer>
              </div>
            </div>
        </body>
    </html>
  );
}
