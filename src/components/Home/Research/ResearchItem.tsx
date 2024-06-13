"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export const ResearchItem = () => {
  return (
    <>
      <div className="">
          <Link href='#' className='card hover wrap block relative group overflow-hidden pd-16 br-16 bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]'>
            <span className="head mb-4 block">
              <span className="img overflow-hidden br-8 block">
                <Image
                  src="/home/buy-domain.jpg"
                  width={320}
                  height={180}
                  alt="Hướng dẫn mua tên miền"
                />
              </span>
            </span>
            <span className="body block overflow-hidden">
              <span className="name block mb-2 text-lg primary-color font-bold">
                  Hướng dẫn mua tên miền trên APP.MONA.HOST
              </span>
              <span className="desc block text-base">
                  MONA.Host sẽ hướng dẫn bạn hoàn chỉnh các bước để có thể đổi tên miền một cách dễ dàng ngay trên app.mona.host...
              </span>
            </span>
          </Link>
      </div>
    </>
  )
}
