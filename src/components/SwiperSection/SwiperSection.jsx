import mtb from "../ui/mtb.jpg";
import road from "../ui/road.jpg";
import urban from "../ui/urban.jpg";
import ebike from "../ui/ebike.jpg";
import kids from "../ui/kids.jpg";
import accessories from "../ui/accessories.jpg";

import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";

export const SwiperSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Scrollbar, Autoplay]}
        loop
        autoplay={{
          delay: "3000",
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{ draggable: true }}
        autoHeight={true}
      >
        <SwiperSlide className="relative">
          <Button tailwind="absolute text-[#fff] text-[8rem] font-[800] mx-[43%]  top-[283px]">
            <Link className=" text-[8rem] font-[800] " to="/Mountainbikes">
              MTB
            </Link>
          </Button>
          <Button tailwind="absolute text-[#fff] text-[4rem] font-[600] left-[0px] mx-[300px] top-[420px] leading-[70px]">
            <Link className=" text-[4rem] font-[600] " to="/Mountainbikes">
              Mountain bikes are generally specialized for use on mountain
              trails, single track, fire roads, and other unpaved surfaces.
            </Link>
          </Button>
          <img src={mtb} alt="" className="w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#fff] text-[8rem] font-[800] left-[765px] top-[283px] ">
            <Link className=" text-[8rem] font-[800] " to="/roadbikes">
              ROAD
            </Link>
          </Button>
          <Button tailwind="absolute text-[#fff] text-[4rem] font-[600] mx-[300px] left-[0px] top-[420px] leading-[70px] ">
            <Link className=" text-[4rem] font-[600] " to="/roadbikes">
              bicycle of a similar style but built more for endurance and less
              the fast bursts of speed desired in a racing bicycle
            </Link>
          </Button>
          <img src={road} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#fff] text-[8rem] font-[800] left-[725px] top-[283px] ">
            <Link className=" text-[8rem] font-[800] " to="/urbanbikes">
              URBAN
            </Link>
          </Button>
          <Button tailwind="absolute text-[#fff] text-[4rem] font-[600] mx-[300px] left-[0px] top-[420px] leading-[70px]">
            <Link className=" text-[4rem] font-[600] " to="/urbanbikes">
              Urban or simply city-bike is a bicycle designed for frequent very
              short, relatively slow rides through very flat urban areas.
            </Link>
          </Button>
          <img src={urban} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#fff]  text-[8rem] font-[800] left-[765px] top-[283px] ">
            <Link className=" text-[8rem] font-[800] " to="/ebikes">
              E-BIKE
            </Link>
          </Button>
          <Button tailwind="absolute text-[#fff] text-[4rem] font-[600] mx-[300px] left-[0px] top-[420px] leading-[70px]">
            <Link className=" text-[4rem] font-[600] " to="/ebikes">
              Electric bikes is a motorized bicycle with an integrated electric
              motor used to assist propulsion.Many kinds of e-bikes are
              available worldwide
            </Link>
          </Button>
          <img src={ebike} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#fff] text-[8rem] font-[800] left-[775px] top-[283px] ">
            <Link className=" text-[8rem] font-[800] " to="/Kidsbikes">
              Kids
            </Link>
          </Button>
          <Button tailwind="absolute text-[#fff] text-[4rem] font-[600] mx-[300px] left-[0px] top-[420px]  leading-[70px]">
            <Link className=" text-[4rem] font-[600] " to="/Kidsbikes">
              Kids’ bikes are all about having fun, making memories, and giving
              your child the kind of freedom only found on two wheels.
            </Link>
          </Button>
          <img src={kids} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#fff] text-[8rem] font-[800] left-[555px] top-[283px] ">
            <Link className=" text-[8rem] font-[800]" to="/Accessories">
              Accessories
            </Link>
          </Button>
          <Button
            tailwind="absolute text-[#fff] text-[4rem] font-[600] mx-[300px] left-[0px]
leading-[70px] top-[420px] "
          >
            <Link className=" text-[4rem] font-[600]" to="/Accessories">
              Customize your bicycle for comfort, style, and performance with
              Bontrager bike accessories and components.
            </Link>
          </Button>
          <img src={accessories} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
