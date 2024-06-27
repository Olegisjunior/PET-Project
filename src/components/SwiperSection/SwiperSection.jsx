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
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[535px] top-[283px] hover:text-[#fff] hover:pointer">
            <Link
              className=" text-[8rem] font-[800] hover:text-[#fff] hover:pointer"
              to="/Mountainbikes"
            >
              MTB
            </Link>
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[500px] top-[420px] hover:text-[#fff] hover:pointer">
            <Link
              className=" text-[4rem] font-[600] hover:text-[#fff] hover:pointer"
              to="/Mountainbikes"
            >
              description
            </Link>
          </Button>
          <img src={mtb} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[535px] top-[283px] hover:text-[#fff] hover:pointer">
            ROAD
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[535px] top-[420px] hover:text-[#fff] hover:pointer">
            description
          </Button>
          <img src={road} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[480px] top-[283px] hover:text-[#fff] hover:pointer">
            URBAN
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[535px] top-[420px] hover:text-[#fff] hover:pointer">
            description
          </Button>
          <img src={urban} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[500px] top-[283px] hover:text-[#fff] hover:pointer">
            E-BIKE
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[535px] top-[420px] hover:text-[#fff] hover:pointer">
            description
          </Button>
          <img src={ebike} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[535px] top-[283px] hover:text-[#fff] hover:pointer">
            KIDS
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[500px] top-[420px] hover:text-[#fff] hover:pointer">
            description
          </Button>
          <img src={kids} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Button tailwind="absolute text-[#ffffffcc] text-[8rem] font-[800] left-[325px] top-[283px] hover:text-[#fff] hover:pointer">
            EQUIPMENT
          </Button>
          <Button tailwind="absolute text-[#ffffffcc] text-[4rem] font-[600] left-[500px] top-[420px] hover:text-[#fff] hover:pointer">
            description
          </Button>
          <img src={accessories} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
