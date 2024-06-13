'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

function Hero() {
	const [mode, setMode] = useState<boolean>(() => {
		if (typeof window !== "undefined") {
			const themLocalStorage = localStorage.getItem("theme");
			return themLocalStorage !== "dark";
		}

		return true;
	});

	return (
		<section className='sec-com banner'>
			<div className='container overflow-visible'>
				<div className='content'>
					<div className='textContainer'>
						<div className="logo-host" style={{ ["--logo-img" as any]: "url('/logo/logo-pri-less-white.svg')" }}>
							<Image
								src='/logo/logo-pri-less.svg'
								width={150}
								height={48}
								alt='logo-host'
								className='logo'
							/>
						</div>
						<div className='headingContainer'>
							<h3 className='sec-com-tt content-tt'>Đơn vị cung cấp
								<br />
								<span className="txt-hl">Giải pháp hạ tầng</span> toàn diện
							</h3>
							<p className='subheading'>Mang đến dịch vụ cao cấp trong mọi khía cạnh</p>
						</div>
						<p className='description'>
							Luôn hướng đến sự ổn định và phát triển mạnh mẽ của quý khách hàng
						</p>
						<Link
							href='#'
							className='btn btn-pri banner-link'
						>
							<span className='txt'>Tìm hiểu dịch vụ của MONA.Host</span>
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
					<div className='imageContainer solution-logo' style={{ ["--banner-img" as any]: "url('/home/bg-banner-dark.svg')" }}>
						<Image
							src='/home/solution-host.svg'
							width={150}
							height={48}
							alt='logo-host'
							className='logo'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
