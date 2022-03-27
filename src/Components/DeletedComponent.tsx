import { deleteStore } from "./zustand";
export default function DeletedComponent() {
  const mapDelete = deleteStore((state) => state.deletedState);

  return (
    <div>
      <div>{mapDelete.map((element) => element.id)}</div>
    </div>
  );
}

//https://react-icons.github.io/react-icons/
