import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import "./HeaderOption.css";
import { getUser } from "./store/appSlice";

function HeaderOption({ title, Icon, avatar, onClick }) {
  const user = useSelector(getUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      {title && <h6 className="headerOption__title">{title}</h6>}
    </div>
  );
}

export default HeaderOption;
