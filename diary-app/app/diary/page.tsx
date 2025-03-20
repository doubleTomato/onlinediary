
export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
          <>
            <div className="w-100">
                <div className="w-100">
                    <input className="block p-2.5    w-full focus:outline-none " type="text" placeholder="제목"/>
                </div>
                <div className="w-100">            
                    <textarea className="block p-2.5 w-full focus:outline-none " rows="10" placeholder="내용"/>
                </div>
            </div>
          </>
    );
  }
  