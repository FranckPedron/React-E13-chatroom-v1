// == Import
import Messages from '../Messages';
import Form from '../Form';
import './style.scss';
import Error from "../Error";
import {useSelector} from "react-redux";

// == Composant
function Chat() {
  const displayError = useSelector(state => state.displayError);

  return (
    <div className="app">
      <Messages />
      {displayError && <Error />}
      <Form />
    </div>
  )
}

// == Export
export default Chat;
