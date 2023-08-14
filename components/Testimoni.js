import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Sofia Rodriguez",
      image: "/assets/people-1.png",
      city: "Ciudad de México",
      country: "México",
      rating: "4.8",
      testimoni:
        "We've witnessed a remarkable transformation since integrating Copypega into our operations. Their software solution has become an integral part of our daily routine, saving us precious hours that were once consumed by repetitive tasks. The efficiency and precision it brings to our workflow are truly commendable",
    },
    {
      name: "Liam Patel",
      image: "/assets/people-2.png",
      city: "San Juan",
      country: "Puerto Rico",
      rating: "4.7",
      testimoni:
        "In the realm of software solutions, Copypega stands out as a beacon of innovation. Our organization has experienced a significant boost in productivity ever since we started leveraging their tools. The ease with which we now handle complex data tasks has not only saved us time but has also elevated the quality of our work.",
    },
    {
      name: "Isabella Chen",
      image: "/assets/people-3.png",
      city: "Vancouver",
      country: "Canadá",
      rating: "4.9",
      testimoni:
        "Collaboration has taken on a new dimension with Copypega as our ally. The software they provide has seamlessly bridged gaps in our teamwork, making data sharing and joint projects a breeze. The way Copypega's tools integrate into our existing systems has fostered a smoother, more efficient collaborative environment.",
    },
    {
      name: "Noah Williams",
      image: "/assets/people-4.png",
      city: "Nueva York",
      country: "Usa",
      rating: "4.5",
      testimoni:
        "Bid farewell to the era of manual errors! Copypega's software suite has emerged as our safeguard against inaccuracies. With its meticulous data handling capabilities, we can now rely on consistently precise results. Copypega has undeniably raised the bar for accuracy in our operations.",
    },
    {
      name: "Ava Martinez",
      image: "/assets/people-5.png",
      city: "Buenos Aires",
      country: "Argentina",
      rating: "4.95",
      testimoni:
        "In the intricate world of technology, Copypega's software shines as a beacon of convenience. Its implementation has not only reduced the complexity of various tasks but has also yielded a remarkable time and effort savings. For any organization navigating the tech landscape, Copypega's offerings are a must-have.",
    },
    {
      name: "Ethan Nguyen",
      image: "/assets/people-3.png",
      city: "Los Ángeles",
      country: "Usa",
      rating: "4.6",
      testimoni:
        "Our workflow has undergone a revolution ever since Copypega entered the scene. The seamless integration of their software into our processes has ushered in a new era of efficiency. What used to take substantial time and effort now yields instant, high-quality results, making Copypega an indispensable asset in our software arsenal.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    className="people-image"
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
