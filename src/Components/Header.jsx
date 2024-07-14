import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image1 from "../Images/carousel/1.jpg";
import Image2 from "../Images/carousel/2.jpg";
import Image3 from "../Images/carousel/3.jpg";
import Image4 from "../Images/carousel/4.jpg";
import Image5 from "../Images/carousel/5.jpg";

const Header = () => {
  return (
    <div className="my-12 mx-1 flex flex-col md:grid md:grid-cols-12 bg-white rounded-xl">
      <div className="md:col-span-6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl"
        >
          <SwiperSlide className="h-full">
            <img
              src={Image1}
              alt="Slide1"
              style={{ width: "100%", height: "41rem" }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src={Image2}
              alt="Slide2"
              style={{ width: "100%", height: "41rem" }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src={Image3}
              alt="Slide3"
              style={{ width: "100%", height: "41rem" }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src={Image4}
              alt="Slide4"
              style={{ width: "100%", height: "41rem" }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              src={Image5}
              alt="Slide5"
              style={{ width: "100%", height: "41rem" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="col-span-6">
        <div className=" p-8 bg-blue-100 h-full rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl">
          <h1 className="text-3xl font-bold mb-4">
            Unforgettable Horse Riding Adventures! 🐎
          </h1>
          <p className="text-gray-700">
            Explore breathtaking landscapes, connect with majestic horses, and
            create memories that will last a lifetime.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-800">
                Curated Selection: Handpicked horses, sun-kissed beaches, rugged
                trails.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-800">
                Tailored Experiences: For all riders—leisurely to
                adrenaline-pumping.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-800">
                Expert Guides: Local equestrians share stories and insider tips.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-800">
                Safety First: Well-trained horses, quality gear, peace of mind.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-800">
                Community of Riders: Connect, share, and swap stories.
              </p>
            </li>
          </ul>
          <a
            href="/"
            className="mt-14 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Book Your Adventure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
