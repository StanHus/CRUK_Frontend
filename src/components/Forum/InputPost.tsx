import { Fragment, useState } from "react";
import { DeletePost } from "./Undo";

export default function InputPost() {
  const [username, setUsername] = useState("");
  const [post_text, setPost_text] = useState("");
  const [date, setDate] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const onSelection = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("https://dry-gorge-37048.herokuapp.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          post_text: post_text,
          date: date,
        }),
      });
      setShowDelete(true);
    } catch (err) {
      console.error(err);
    }
    setTimeout(() => (window.location.href = "/forum"), 10000);
  };

  return (
    <Fragment>
      <section className="all">
        <form className="inputs">
          <div className="inputs">
            <input
              type="date"
              placeholder="Date"
              className="input"
              value={date}
              min="2021-10-01"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your name"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </form>
        <form>
          <input
            type="text"
            placeholder="Type your inspiring story here!"
            className="inputText"
            value={post_text}
            onChange={(e) => setPost_text(e.target.value)}
          />
          <button onClick={onSelection} className="btn-success">
            Add
          </button>
        </form>
        {showDelete && (
          <div className="message">
            <h4>
              Your post will be live in 10 seconds, unless you would like to
              undo the posting, in which case press below
            </h4>
            <DeletePost />
          </div>
        )}
      </section>
    </Fragment>
  );
}
