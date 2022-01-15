import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
// import Spinner from "./Spinner";
import { connect } from "react-redux";
// import FlipMove from "react-flip-move";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );

    onSnapshot(postsQuery, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || user.displayName[0],
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  // let postContent;

  // if (Object.keys(posts).length < 1) {
  //   postContent = <Spinner />;
  // } else {
  //   postContent =
  // }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#7005f9" />
          <InputOption title="Video" Icon={Subscriptions} color="#7fc15e" />
          <InputOption title="Event" Icon={EventNote} color="#e7a33e" />
          <InputOption
            title="Wite Article"
            Icon={CalendarViewDay}
            color="#fc9295"
          />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Feed);
