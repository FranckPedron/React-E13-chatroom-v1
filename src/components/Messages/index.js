import Message from "../Message"
import {useSelector} from "react-redux";
import './style.scss';
import {useEffect} from "react";

function Messages() {
const listMessages = useSelector(state => state.messages);
  useEffect(() => {
    const element = document.querySelector('.messages');
    element.scroll(0, element.scrollHeight);
  }, [listMessages]);

  return (
    <section className="messages">
      {listMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.author} />
        )}
    </section>
  )
}

export default Messages;
