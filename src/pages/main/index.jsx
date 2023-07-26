import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const navDemo1 = () => {
    navigate("/demo1")
  }

  const navDemo2 = () => {
    navigate("/demo2")
  }

  return <div>
    <button onClick={navDemo1}>demo1</button>
    <button onClick={navDemo2}>demo2</button>
  </div>
}


export default Main;
