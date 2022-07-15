import PropTypes from "prop-types";
import './style.scss';
import './style.scss';

function Message({ content, author }) {

  return (
    <article className="message">
      <h2 className="message-author">{author}</h2>
      <p className="message-content">{content}</p>
    </article>
  );
}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Message;
