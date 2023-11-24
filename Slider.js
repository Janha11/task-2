"use client";
import React, { useState ,useEffect} from 'react';
import './slider.css'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://bravaland.com/cdn/shop/files/DSC00058_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279',
      text:'hertage hodies'

    },
    {
      url: 'https://bravaland.com/cdn/shop/files/DSC09802_carousel_1440x650_crop_center.jpg?v=1691318279',
      text:'hertage tees'
    },
    {
      url: 'https://bravaland.com/cdn/shop/files/DSC00198_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318278',
      text:'permium  zip hoodies'
    },

    {
      url: 'https://bravaland.com/cdn/shop/files/DSC09618_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279',
      text:"hertage women's tanks"
    },
    {
      url: 'https://bravaland.com/cdn/shop/files/DSC00198_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318278',
      text:"perium zip hoodies"
    },


    {
        url: 'https://bravaland.com/cdn/shop/files/DSC09179_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279',
        text:"perium zip hoodies"
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically change slide every 5 seconds
    const intervalId = setInterval(nextSlide, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <div className=' h-[780px] w-full m-auto py-16   relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-cover   duration-500  relative '
      >
       <div className=' slide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-4 flex  flex-col'>
        <h1 className= 'slide_text font-mono font-extrabold text-white'>{slides[currentIndex].text}</h1>
            <button className=' slide_button rounded-full bg-white  border border-gray-500 text-black font-semibold transition duration-300 hover:bg-black hover:text-white'>Shop Now</button>
            </div>
            </div>
            


     
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
     
    </div>
  );
}

export default Slider;