import { useDispatch } from "react-redux";
import { login } from "./store/appSlice";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";

function Login() {
  // const register = () => {
  //   if (!name) {
  //     alert("please enter a full name");
  //   }
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       updateProfile(userCredential.user, {
  //         displayName: name,
  //         photoURL: !profilePic ? null : profilePic,
  //       })
  //         .then(() => {
  //           props.login({
  //             email: userCredential.user.email,
  //             uid: userCredential.user.uid,
  //             displayName: userCredential.user.displayName,
  //             photoUrl: userCredential.user.photoURL,
  //           });
  //         })
  //         .catch((err) => console.log(err.message));
  //     })
  //     .catch((err) => alert(err.message));
  // };

  const dispatch = useDispatch();

  const loginToApp = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(
          login({
            email: res.user.email,
            uid: res.user.uid,
            displayName: res.user.displayName,
            photoUrl: res.user.photoURL,
          })
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login__container">
      <div className="login">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt=""
        />
        <h2>Welcome</h2>
        <span>Stay updated on your professional world</span>

        <Button onClick={loginToApp} variant="contained">
          <Google /> <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}

export default Login;
