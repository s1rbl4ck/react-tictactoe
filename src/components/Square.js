const Square = (props) => {
  return (
    <button onClick={props.onClickEvent} className="square">
      {props.value}
    </button>
  );
};

export default Square;
