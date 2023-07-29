import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  

  const navDemo1 = () => {
    navigate("/demo1")
  }

  const navDemo2 = () => {
    navigate("/demo2")
  }

  const navDemo3 = () => {
    navigate("/demo3")
  }

  const navDemo4 = () => {
    navigate("/demo4")
  }

  const navDemo5 = () => {
    navigate("/demo5")
  }

  return <div>
    <button onClick={navDemo1}>demo1</button>
    <button onClick={navDemo2}>demo2</button>
    <button onClick={navDemo3}>demo3</button>
    <button onClick={navDemo4}>demo4</button>
    <button onClick={navDemo5}>demo5</button>
  </div>
}


export default Main;
