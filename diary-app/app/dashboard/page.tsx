import Header from "../../components/header";

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
      <html>
          <body>
            <Header></Header>
              <div className="min-h-screen flex flex-col">
                <main className="flex-1 mt-16 p-4">{children}</main>
                <div>이것은 다이어리여!</div>
              </div>
          </body>
      </html>
    );
  }
  