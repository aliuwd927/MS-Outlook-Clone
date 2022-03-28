import { deleteStore } from "./zustand";
export default function DeletedComponent() {
  const mapDelete = deleteStore((state) => state.deletedState);

  return (
    <div>
      <div>
        {mapDelete.map((element) => {
          return (
            <div key={element.id} className="table_row_data">
              <div className="table_row_email">
                <div>{element.nameOfSender}</div>
                <div>{element.titleOfEmail}</div>
                <div>{element.bodyMessage}</div>
              </div>
              <div className="email_buttons_Container">
                <div className="email_buttons">
                  <button onClick={() => alert("Reply Email")}>Undo</button>
                  <button
                    onClick={() => {
                      alert();
                    }}
                  >
                    Remove from system
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//https://react-icons.github.io/react-icons/
