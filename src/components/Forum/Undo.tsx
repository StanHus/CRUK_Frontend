import "../../css/forum.css";
import { Fragment } from "react";

const DeletePost = () => {
  let id: number;

  const executeDelete = async () => {
    const getLastId = async () => {
      try {
        const response = await fetch(
          "https://dry-gorge-37048.herokuapp.com/lastid"
        );
        const jsonData = await response.json();
        id = jsonData[0].id;
      } catch (err) {
        console.error(err);
      }
    };

    const deleteById = async (id: number) => {
      try {
        await fetch(`https://dry-gorge-37048.herokuapp.com/${id}`, {
          method: "DELETE",
        });
        window.location.href = "/forum";
      } catch (err) {
        console.error(err);
      }
    };

    await getLastId().then(() => deleteById(id));
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn-delete"
        data-dismiss="modal"
        onClick={() => executeDelete()}
      >
        Undo
      </button>
    </Fragment>
  );
};

export { DeletePost };
