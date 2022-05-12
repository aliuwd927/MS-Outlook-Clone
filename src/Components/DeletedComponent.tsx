import { deleteStore, rightSectionDispatch } from "./zustand";
import { EMail } from "./InboxComponent";
export default function DeletedComponent() {
  const mapDelete = deleteStore((state) => state.deletedState);
  const deletedEmailToDispatch = rightSectionDispatch(
    (state) => state.emailDispatch
  );

  function dispatchHandler(delEmail: EMail) {
    deletedEmailToDispatch(delEmail);
  }
  return (
    <div>
      <div>
        {mapDelete.map((element) => {
          return (
            <div
              key={element.id}
              className="table_row_data"
              onClick={() => {
                dispatchHandler(element);
              }}
            >
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
