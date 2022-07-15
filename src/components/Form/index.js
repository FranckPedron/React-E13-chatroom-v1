import {useDispatch, useSelector} from "react-redux";
import {addMessage, writeMessage} from "../../actions";

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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Saisissez votre message" aria-label="Message" value={currentMessage} onChange={handleChange} />
      <button type="submit" aria-label="Envoyer" >&gt;</button>
    </form>
  )
}

export default Form;
