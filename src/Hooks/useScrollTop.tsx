import { useNavigate } from 'react-router-dom';

function ScrollTop(direction: string) {
    const navigate = useNavigate()
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(`${direction}`)
    

}

export default ScrollTop;
