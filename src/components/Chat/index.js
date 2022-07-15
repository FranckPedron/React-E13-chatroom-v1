// == Import
import Messages from '../Messages';
import Form from '../Form';
import './style.scss';

// == Composant
function Chat() {

  return (
    <div className="app">
      <Messages />
      <Form />
    </div>
  )
}

// == Export
export default Chat;
