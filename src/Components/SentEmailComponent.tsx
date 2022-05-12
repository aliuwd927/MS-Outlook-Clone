import { rightSectionDispatch, sentStore } from "./zustand";
import { EMail } from "./InboxComponent";

export default function SentEmailComponent() {
  const sentEmails = sentStore((state) => state.sentStateArray);
  const dispatchSentEmails = rightSectionDispatch(
    (state) => state.emailDispatch
  );

  function dispatchHandler(emailSent: EMail) {
    dispatchSentEmails(emailSent);
  }
  return (
    <div>
      {sentEmails.map((emailSent) => {
        console.log(emailSent);
        return (
          <div
            onClick={() => {
              dispatchHandler(emailSent);
            }}
          >
            <div>{emailSent.nameOfSender}</div>
            <div>{emailSent.titleOfEmail}</div>
            <div>{emailSent.bodyMessage}</div>
          </div>
        );
      })}
    </div>
  );
}
