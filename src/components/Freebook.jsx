import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-4">
      <h1 className="font-extrabold text-2xl pb-2">Avilable Books</h1>

      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} /> //react props
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
