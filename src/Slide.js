// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import ''

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
const Slide = () => {

    // var swiper = new Swiper(".home-slider", {
    //     grabCursor:true,
    //     loop:true,
    //     centeredSlides:true,
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //  });

    const refNext = useRef()
    const refPrev = useRef()

  return (
      <div>

    {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
    >
      <SwiperSlide>
        <div class="swiper-slide slide" style={{background: "url(images/home-slide-1.jpg) no-repeat"}}>
            <div class="content">
                <span>outstanding food</span>
                <h3>delicious cooking</h3>
                <a href="#" class="btn">get started</a>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="swiper-slide slide" style={{background: "url(images/home-slide-1.jpg) no-repeat"}}>
            <div class="content">
                <span>outstanding food</span>
                <h3>delicious cooking</h3>
                <a href="#" class="btn">get started</a>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="swiper-slide slide" style={{background: "url(images/home-slide-1.jpg) no-repeat"}}>
            <div class="content">
                <span>outstanding food</span>
                <h3>delicious cooking</h3>
                <a href="#" class="btn">get started</a>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="swiper-slide slide" style={{background: "url(images/home-slide-1.jpg) no-repeat"}}>
            <div class="content">
                <span>outstanding food</span>
                <h3>delicious cooking</h3>
                <a href="#" class="btn">get started</a>
            </div>
      </div>
      </SwiperSlide>
      ...
    </Swiper>
 */}


    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay:100}}
      navigation
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1
        },
        // when window width is >= 768px
        700: {
          slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
          },
      }}
    >
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide slide" data-name="food-1">
         <img src="images/food-img-1.png" alt=""/>
         <h3>delicious food</h3>
         <div className="price">$49.99</div>
      </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>

  );
};




export default Slide