import Header from "../../components/header";

export default function Profile({ children }: { children: React.ReactNode }) {
    return (
      <html>
          <body>
            <Header></Header>
              <div className="min-h-screen flex flex-col">
                <main className="flex-1 mt-16 p-4">{children}</main>
                <footer className="bg-gray-100 p-4 text-center text-sm">
                </footer>
              </div>
          </body>
      </html>
    );
  }
  