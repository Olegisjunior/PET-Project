import React from "react";
import banner1 from "../ui/banner.jpg";
import banner2 from "../ui/banner2.jpg";

export const AboutUs = () => {
  return (
    <>
      <div className="bg-[#1e1e1ecc] min-h-[120vh] pb-2 flex justify-center items-center ">
        <div className=" bg-white w-[80%] h-[174vh] flex flex-col">
          <img src={banner1} className="w-full h-[400px] object-cover" />
          <h1 className="font-[600] text-xl flex items-center justify-center pt-5">
            About Us
          </h1>
          <div className="flex items-center justify-center mx-[200px] flex-col text-center ">
            <p className="pt-2 flex flex-col ">
              We are official dealers of the following bicycle companies:
              <div className="p-2 mx-[175px] text-left">
                <li>TREK</li>
                <li>MERIDA</li>
                <li>SPECIALIZED</li>
                <li>GIANT</li>
              </div>
            </p>
            <p className="">
              Today, almost everyone has a bicycle - it's a great way to keep
              fit and lead a healthy lifestyle. For those who have not yet had
              time to get a bicycle, there is our BikeStaff bicycle shop. We
              sell bicycles of various specifications and accessories for them,
              which will make cycling trips even more comfortable and
              fulfilling. Only the best and high-quality bicycles of many brands
              are selected for our customers.
            </p>
          </div>
          <h1 className="font-[600] text-xl flex items-center justify-center pt-5">
            Our History
          </h1>
          <div className="flex items-center justify-center mx-[200px] flex-col text-center">
            <p className="pt-2">
              Our journey began with a passion for bicycles and a desire to
              share this passion with others. Thanks to our team professionals
              and love for their work, we managed to create a store where
              everyone can find the perfect bike for themselves. Whether you are
              a professional cyclist or just a hobbyist active recreation, we
              have everything you need. Come to us and experience the
              difference: we don't just sell bikes, we we help you find real
              pleasure from skiing. yours needs are our priority and we are
              always happy to help you make the right choice.
            </p>
            <br /> <br />
            <p className="">
              Our bicycle shop began its journey in 2010, when three friends,
              united by a passion for bicycles, decided to create a place where
              everyone can find the perfect bicycle for themselves. We started
              as a small shop in the city center, offering bikes from only a few
              popular brands. <br /> <br />
              Over time, our reputation has grown through our commitment to
              quality and customer service. We have always strived not just to
              sell a bike, but to help everyone find what best suits their needs
              and desires. Our approach proved successful and we quickly
              expanded the range to include new popular brands and a variety of
              accessories. <br /> <br />
              Not stopping there, in 2018 we moved to a larger premises and
              opened additional outlets in other cities. Today, our stores are
              modern spaces where every cyclist, from a beginner to a
              professional, will find everything they need for comfortable and
              safe riding. We are proud to be part of a great cycling community
              and continue to grow with it. <br /> <br />
              Our customers are our family and we are always happy to see you in
              our stores or on site to help make your cycling dreams come true.
              Thank you for choosing us. We look forward to your next cycling
              adventure with us!
            </p>
          </div>
          <h1 className="font-[600] text-xl flex items-center justify-center pt-5">
            Our Mission
          </h1>
          <div className="flex items-center justify-center mx-[200px] flex-col text-center">
            <p className="pt-2">
              In our bike shop, we strive not just to sell bikes, but to create
              an unforgettable experience for you from every trip. Our main goal
              is to provide you with the best bikes and accessories so that
              every time you go out on the road or trail brings joy and
              pleasure. Our goal is to become your reliable partner in the world
              of bicycles, where you can always find what you need for a
              comfortable and pleasant ride. Thank you for choosing us and we
              promise to always do our best to make your cycling dreams come
              true.
            </p>
          </div>
          <br />

          <img src={banner2} className="w-full h-[300px] object-cover " />
        </div>
      </div>
    </>
  );
};
