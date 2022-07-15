import PropTypes from "prop-types";
import './style.scss';

function Message({ content, author }) {

  return (
    <article className="message">
      <h2>{author}</h2>
      <p>{content}</p>
    </article>
  );
}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Message;
