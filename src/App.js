import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Login from "./Login";
import { login, logout } from "./actions/actions";
import { useEffect } from "react";
import Widgets from "./Widgets";

function App(props) {
  const user = props.user;
  const loginAction = props.login;

  useEffect(() => {
    //   setPersistence(auth, browserSessionPersistence)
    //     .then(() => {
    //       const userCred = {
    //         email: auth.currentUser.email,
    //         uid: auth.currentUser.uid,
    //         photoUrl: auth.currentUser.photoURL,
    //         displayName: auth.currentUser.displayName,
    //       };
    //       console.log(userCred);
    //       // props.login(userCred);
    //     })
    //     .catch((err) => console.log(err.message));
  });

  return (
    // BEM naming convention
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { login, logout })(App);
