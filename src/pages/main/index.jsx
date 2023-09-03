import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const pages = 8

  return <div>
    {Array.from({ length: pages }, (v, i) => i + 1).map((v, i) => {
      return <div key={i}>
        <div onClick={() => navigate(`/demo${v}`)}>demo{v}</div>
      </div>
    })}
  </div>
}


export default Main;
