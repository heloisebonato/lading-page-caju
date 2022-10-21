import Carousel from 'react-bootstrap/Carousel';
import BannerCaju from "../../assets/images/banner-1.png";

function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerCaju}
                    alt="Banner da Caju"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerCaju}
                    alt="Banner da Caju"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerCaju}
                    alt="Banner da Caju"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;