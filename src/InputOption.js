import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color, fontSize: "small" }} />
      <h5>{title}</h5>
    </div>
  );
}

export default InputOption;
