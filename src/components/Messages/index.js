import Message from "../Message"
import {useSelector} from "react-redux";

function Messages() {
const listMessages = useSelector(state => state.messages);

  return (
    <section>
      {listMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.author} />
        )}
    </section>
  )
}

export default Messages;
