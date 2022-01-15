import "./Header.css";
import {
  Search,
  Home,
  SupervisorAccount,
  Notifications,
  Chat,
  BusinessCenter,
} from "@mui/icons-material";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import HeaderOption from "./HeaderOption";
import { connect } from "react-redux";
import { logout } from "./actions/actions";

function Header(props) {
  const user = props.user;

  const logoutOfApp = () => {
    props.logout();
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        {user && (
          <HeaderOption onClick={logoutOfApp} avatar={true} title="Me" />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Header);
