import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { getUser } from "./store/appSlice";

function Sidebar() {
  const user = useSelector(getUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"># </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1521449256184-170b4a4c437c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar__avatar ">
          {user?.displayName[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,454</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,356</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("/reactjs")}
        {recentItem("/programming")}
        {recentItem("/softwareEngineering")}
        {recentItem("/design")}
        {recentItem("/developer")}
      </div>
    </div>
  );
}

export default Sidebar;
