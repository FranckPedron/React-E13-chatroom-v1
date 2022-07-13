import PropTypes from "prop-types";

function Message({title, author}) {

  return (
    <div>
      <h1>{title}</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <h2>{author}</h2>
    </div>
  );
}

Message.propTypes =
  {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Message;
