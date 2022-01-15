import { Avatar } from "@mui/material";
import { connect } from "react-redux";
import "./HeaderOption.css";

function HeaderOption({ title, Icon, avatar, onClick, user }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h6 className="headerOption__title">{title}</h6>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HeaderOption);
