import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../assets/IMG/s6.jpg';
import slider2 from '../../../assets/IMG/s6.jpg';

import slider3 from '../../../assets/IMG/s6.jpg';

function Slider() {
  return (
    <Carousel className='cover-silde'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

export default Slider;