import {useDispatch, useSelector} from "react-redux";
import {addMessage, writeMessage} from "../../actions";
import { Send } from 'react-feather'
import './style.scss';

function Form() {
  const currentMessage = useSelector(state => state.currentMessage);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(writeMessage(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage());
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form-input" type="text" placeholder="Saisissez votre message" aria-label="Message" value={currentMessage} onChange={handleChange} />
      <button className="form-button" onClick={handleSubmit} type="submit" aria-label="Envoyer" ><Send size="30" /></button>
    </form>
  )
}

export default Form;
