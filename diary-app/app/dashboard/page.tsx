import Header from "../../components/header";

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
          <>
            <Header></Header>
            <div>이것은 다이어리여!</div>
          </>
    );
  }
  