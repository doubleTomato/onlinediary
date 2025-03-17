
export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
          <>
            <div className="w-100">
                <div className="w-100">
                    <input type="text" placeholder="제목"/>
                </div>
                <div className="w-100">            
                    <textarea rows="10" placeholder="내용"/>
                </div>
            </div>
          </>
    );
  }
  