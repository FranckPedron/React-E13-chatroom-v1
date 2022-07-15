import Message from "../Message"
import {useSelector} from "react-redux";
import './style.scss';

function Messages() {
const listMessages = useSelector(state => state.messages);

  return (
    <section className="messages">
      {listMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.author} />
        )}
    </section>
  )
}

export default Messages;
