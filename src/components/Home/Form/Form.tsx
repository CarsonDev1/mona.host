'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import Link from 'next/link';

interface FormData {
	email: string;
	name: string;
}

export const Form = () => {
	return (
		<section className='sec-form sec-com'>
			<div className="sec-com-separator">
				<div className="section-separator gap-24 flex items-center mx-autos is-visible">
					<div className="flex-1 neutral-opaque bg-gradient-to-r from-transparent to-neutral-opaque-10"></div>
					<div className="section-separator-ani left">
						<Image
							src='/separator/section-separator-ani.png'
							width={173}
							height={14}
							alt='separator'
							className='separator-img'
						/>
					</div>
					<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
					<div className="moving-arrows-item relative moving-arrows-item-undefined rotate-90">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="neutral-opaque bg-neutral-opaque-6 flex-1"></div>
					<div className="section-separator-ani">
						<Image
							src='/separator/section-separator-ani.png'
							width={173}
							height={14}
							alt='separator'
							className='separator-img'
						/>
					</div>
					<div className="flex-1 neutral-opaque bg-gradient-to-l from-transparent to-neutral-opaque-10"></div>
				</div>
			</div>
			{/* <div className="py-36 relative">
        <div className="max-w-3xl mx-auto border rounded-\[--card-border-radius\] border-\[--ui-light-border-color\] .p-\[--card-padding\] br-24 p-24 bg-white relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Nhận các <span className="text-pri">thông báo mới</span> <br />
              từ MONA.Host?</h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300"><span className="text-orange-400 font-bold">Đăng ký</span> để nhận các bài nghiên cứu, blog, <br /> thông tin mới nhất từ chúng tôi</p>
          </div>

          <div className="form">
            <form action="#">
              <div className="f-r flex gap-3 w-full mb-3">
                <div className="f-c w-full">
                  <div className="ipt-wrap flex items-stretch">
                    <span className="icon shrink-0 bg-pri p-2 rounded-l-lg flex justify-center align-center w-10 h-10">
                      <MdOutlineEmail className="relative icon size-5 m-auto text-white" />
                    </span>
                    <input type="email" name="" id="" className="ipt flex-1 p-2 rounded-r-lg outline-0 border leading-tight border-color-100" placeholder="Nhập email" />
                  </div>
                </div>
              </div>
              <div className="f-r flex w-full mb-3">
                <div className="f-c w-full">
                  <div className="ipt-wrap flex items-stretch">
                    <span className="icon shrink-0 bg-pri p-2 rounded-l-lg flex justify-center align-center w-10 h-10">
                      <FaRegCircleUser className="relative icon size-5 m-auto text-white" />
                    </span>
                    <input type="email" name="" id="" className="ipt flex-1 p-2 rounded-r-lg outline-0 border leading-tight border-color-100" placeholder="Nhập họ và tên" />
                  </div>
                </div>
              </div>
              <div className="f-r flex w-full my-6">
                <div className="f-c w-full">
                  <div className="ipt-wrap flex gap-3 items-center justify-center">
                    <input type="radio" name="" id="accept-noti" className="w-4" />
                    <label htmlFor="accept-noti" className="label cursor-pointer">Chấp nhận nhận thông báo từ MONA.Host</label>
                  </div>
                </div>
              </div>
              <div className="max-w-max m-auto p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                <Link href="#" className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
                  <svg className="size-5 relative" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="opacity-20 dark:opacity-50" d="M7.40705 15L5.10627 16.7375C5.0234 16.8039 4.92499 16.848 4.82033 16.8658C4.71567 16.8836 4.6082 16.8744 4.50806 16.8392C4.40793 16.8039 4.31842 16.7437 4.24798 16.6643C4.17755 16.5849 4.12851 16.4888 4.10549 16.3852L3.13986 12.0391C3.11906 11.9458 3.11993 11.8489 3.14241 11.756C3.16489 11.6631 3.20839 11.5766 3.26955 11.5031L5.63752 8.66484C5.5469 10.4883 5.99221 12.6117 7.40705 15ZM16.7305 11.5031L14.3625 8.66484C14.4571 10.4883 14.0078 12.6117 12.593 15L14.8938 16.7375C14.9766 16.8039 15.075 16.848 15.1797 16.8658C15.2844 16.8836 15.3918 16.8744 15.492 16.8392C15.5921 16.8039 15.6816 16.7437 15.7521 16.6643C15.8225 16.5849 15.8715 16.4888 15.8946 16.3852L16.8602 12.0391C16.881 11.9458 16.8801 11.8489 16.8576 11.756C16.8351 11.6631 16.7917 11.5766 16.7305 11.5031Z" fill="currentColor"></path>
                    <path
                      d="M11.875 17.5C11.875 17.6658 11.8092 17.8247 11.6919 17.9419C11.5747 18.0591 11.4158 18.125 11.25 18.125H8.75C8.58424 18.125 8.42527 18.0591 8.30806 17.9419C8.19085 17.8247 8.125 17.6658 8.125 17.5C8.125 17.3342 8.19085 17.1753 8.30806 17.0581C8.42527 16.9408 8.58424 16.875 8.75 16.875H11.25C11.4158 16.875 11.5747 16.9408 11.6919 17.0581C11.8092 17.1753 11.875 17.3342 11.875 17.5ZM10 8.75C10.1854 8.75 10.3667 8.69501 10.5208 8.592C10.675 8.48899 10.7952 8.34257 10.8661 8.17126C10.9371 7.99996 10.9557 7.81146 10.9195 7.6296C10.8833 7.44774 10.794 7.2807 10.6629 7.14959C10.5318 7.01847 10.3648 6.92919 10.1829 6.89301C10.001 6.85684 9.81254 6.8754 9.64123 6.94636C9.46993 7.01732 9.32351 7.13748 9.2205 7.29165C9.11748 7.44582 9.0625 7.62708 9.0625 7.8125C9.0625 8.06114 9.16127 8.2996 9.33709 8.47541C9.5129 8.65123 9.75136 8.75 10 8.75ZM17.4703 12.1742L16.5047 16.5203C16.4589 16.7267 16.3615 16.9181 16.2216 17.0766C16.0817 17.2351 15.9039 17.3555 15.7048 17.4266C15.5057 17.4977 15.2918 17.5172 15.0832 17.4831C14.8745 17.4491 14.6779 17.3627 14.5117 17.232L12.3836 15.625H7.61797L5.48828 17.232C5.3221 17.3627 5.12549 17.4491 4.91684 17.4831C4.70819 17.5172 4.49431 17.4977 4.29522 17.4266C4.09613 17.3555 3.91832 17.2351 3.77842 17.0766C3.63853 16.9181 3.54112 16.7267 3.49531 16.5203L2.52969 12.1742C2.48873 11.9877 2.4908 11.7943 2.53574 11.6087C2.58068 11.4231 2.66731 11.2502 2.78906 11.1031L5.02031 8.42656C5.0952 7.44292 5.32102 6.47666 5.68984 5.56172C6.69766 3.03515 8.50234 1.45 9.23437 0.885935C9.45348 0.716157 9.72281 0.624023 10 0.624023C10.2772 0.624023 10.5465 0.716157 10.7656 0.885935C11.4953 1.45 13.3023 3.03515 14.3102 5.56172C14.679 6.47666 14.9048 7.44292 14.9797 8.42656L17.2109 11.1031C17.3327 11.2502 17.4193 11.4231 17.4643 11.6087C17.5092 11.7943 17.5113 11.9877 17.4703 12.1742ZM7.76797 14.375H12.232C13.882 11.4422 14.1906 8.63437 13.1492 6.025C12.2305 3.72187 10.507 2.26562 10 1.875C9.49141 2.26562 7.76797 3.72187 6.84922 6.025C5.80937 8.63437 6.11797 11.4422 7.76797 14.375ZM6.59609 14.832C5.75495 13.3034 5.24453 11.801 5.06484 10.325L3.75 11.9031L4.71562 16.25L4.72969 16.2398L6.59609 14.832ZM16.25 11.9031L14.9352 10.325C14.757 11.7979 14.2477 13.3003 13.407 14.832L15.2703 16.2383L15.2844 16.2484L16.25 11.9031Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-nowrap">Nhận thông báo</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-server absolute bottom-0 w-full">
          <Image
            src="/home/bg-server.png"
            width={1728}
            height={782}
            alt="logo host"
            className="w-full"
          />
        </div>
      </div> */}
			<div className='container'>
				<div className='sec-com-header text-center'>
					<div className="sec-com-frame active">
						<div className="line mid top"></div>
						<div className="line side left"></div>
						<div className="line side right"></div>
						<div className="dot top left"></div>
						<div className="dot top right"></div>
					</div>
				</div>
				<div className="sec-com-content sec-question-content relative">
					<div className="sec-com-frame active">
						<div className="line mid bottom"></div>
						<div className="line side left"></div>
						<div className="line side right"></div>
						<div className="dot top left"></div>
						<div className="dot top right"></div>
						<div className="line-sticky">
							<div className="sticky-ele"></div>
						</div>
					</div>
					<div className='form-all'>
						<div className='form-header'>
							<h2 className='form-title'>
								Nhận các <span className='txt'>thông báo mới </span>
								từ MONA.Host?
							</h2>
							<p className='form-desc'>
								Đăng ký để nhận các bài nghiên cứu, blog, thông tin mới nhất từ chúng tôi
							</p>
						</div>
						<div className='form-wrapper'>
							<form action='#' className='form-content'>
								<div className='form-group'>
									<div className='form-group-lable'>Email</div>
									<div className='form-group__input'>
										<MdOutlineEmail className='icon font-light' />
										<input
											type='email'
											name=''
											id=''
											className='form-input bg-white'
											placeholder='Nhập email'
										/>
									</div>
								</div>
								<div className='form-group'>
									<div className='form-group-lable'>Họ tên</div>
									<div className='form-group__input'>
										<FaRegCircleUser className='icon' />
										<input
											type='email'
											name=''
											id=''
											className='form-input bg-white'
											placeholder='Nhập họ tên'
										/>
									</div>
								</div>
								<div className='form-group'>
									<Link
										href='#'
										className='btn btn-pri mg-auto'
									>
										<span className='txt'>Nhận thông báo ngay</span>
										<svg
											className="HoverArrow"
											width={10}
											height={10}
											viewBox="0 0 10 10"
											aria-hidden="true"
										>
											<g fillRule="evenodd">
												<path className="HoverArrow__linePath" d="M0 5h7" />
												<path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
											</g>
										</svg>
									</Link>
								</div>
							</form>
						</div>
						<div className='form-dcor'>
							<Image src='/home/form-dcor.svg' width={1162} height={684} alt='' className='form-dcor__img' />

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
