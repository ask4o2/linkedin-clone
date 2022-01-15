import { useState } from "react";
import { connect } from "react-redux";
import { login } from "./actions/actions";
import "./Login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const register = () => {
    if (!name) {
      alert("please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: !profilePic ? null : profilePic,
        })
          .then(() => {
            props.login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: userCredential.user.displayName,
              photoUrl: userCredential.user.photoURL,
            });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => alert(err.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth);
        props.login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: profilePic,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt=""
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name (required if registering) "
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="profile pic url"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default connect(null, { login })(Login);
