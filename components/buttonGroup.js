
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
const ButtonGroup = ({ next, previous }) => {

    return (
      <div className="carousel-button-group carous space-x-6">
        <button onClick={previous} > <FaArrowLeft className='text-3xl text-gray-400'/></button>
        <button onClick={next}><FaArrowRight 
        className='text-3xl text-gray-400'/></button>
      </div>
    );
  };
  export default ButtonGroup;