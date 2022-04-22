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
import { getUser, logout } from "./store/appSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          alt=""
        />
        {user && (
          <div className="header__search">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
        )}
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
      </div>
      {user && <HeaderOption onClick={logoutOfApp} avatar={true} />}
    </div>
  );
}

export default Header;
