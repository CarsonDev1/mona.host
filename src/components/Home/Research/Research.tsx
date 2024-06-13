"use client"

import React, { useCallback, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import { ResearchItem } from './ResearchItem';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Research = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current?.swiper?.slideNext();
  }, []);

  return (
    <section className='research'>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Các nghiên cứu mới</h2>
          </div>

          <div className="mt-12 relative">
            <Swiper navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }} modules={[Virtual]} spaceBetween={24} slidesPerView={3} virtual ref={swiperRef} className="mySwiper">
              {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index}>
                  <ResearchItem />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
               <ResearchItem />
              </SwiperSlide>
              <SwiperSlide>
               <ResearchItem />
              </SwiperSlide>
              <SwiperSlide>
               <ResearchItem />
              </SwiperSlide>
              <SwiperSlide>
               <ResearchItem />
              </SwiperSlide>
              <SwiperSlide>
               <ResearchItem />
              </SwiperSlide>
              <SwiperSlide>
               <ResearchItem />
              </SwiperSlide> */}
            </Swiper>
            <div className="swiper-navi prev" ref={navigationPrevRef} onClick={handlePrev}>
              <MdKeyboardArrowLeft className="relative icon size-6 m-auto" />
            </div>
            <div className="swiper-navi next" ref={navigationNextRef} onClick={handleNext}>
              <MdKeyboardArrowRight className="relative icon size-6 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
