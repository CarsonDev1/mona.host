import '@/styles/common/footer.scss';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer className='ft sec-com'>
			<div className='container'>
				<div className='ft-top'>
					<div className='ft-flex d-flex f-ctn'>
						<div className="ft-col col col-4">
							<div className="ft-logo" style={{ ["--ft-logo" as any]: "url('/logo/logo-pri-dark.svg')" }}>
								<Link href='/' className='link'>
									<Image width={200} height={200} src='./header/logo.svg' alt='Error' />
								</Link>
							</div>
							<div className="ft-contact">
								<div className="item">
									<span className="label fw-700">Địa chỉ: </span>
									<span className="text">1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, Thành phố Hồ Chí Minh</span>
								</div>
								<div className="item">
									<span className="label fw-700">Email: </span>
									<span className="text">
										<Link href='mailto:info@mona.host' className='link'>
											info@mona.host
										</Link>
									</span>
								</div>
								<div className="item">
									<span className="label fw-700">Hotline: </span>
									<span className="text">
										<Link href='tel:1900636648' className='link'>
											1900 636 648
										</Link>
									</span>
								</div>
								<div className="item">
									<span className="label fw-700">Mã số thuế: </span>
									<span className="text">0317401755</span>
								</div>
							</div>
						</div>

						<div className="ft-col col col-3">
							<div className="ft-label fw-700">Quy định & Chính sách</div>
							<ul className="ft-menu-list">
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Hướng dẫn thanh toán VNPAY
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Chính sách thanh toán
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Chính sách giao hàng
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Chính sách đổi trả và hoàn tiền
									</Link>
								</li>
							</ul>
						</div>

						<div className="ft-col col col-3">
							<div className="ft-label fw-700">Giải pháp & Dịch vụ</div>
							<ul className="ft-menu-list">
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Đăng ký tên miền
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Dịch vụ Hosting
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Dịch vụ Cloud VPS
									</Link>
								</li>
								<li className="ft-menu-item">
									<Link href='#' className='link'>
										Dịch vụ SSL
									</Link>
								</li>
							</ul>
						</div>

						<div className="ft-col col col-2">
							<div className="ft-bct">
								<Image
									className='qualified-img'
									width={200}
									height={82}
									src={`/footer/bocongthuong.png`}
									alt='Error'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="ft-bottom">
					<div className='copyright'>
						<div className='copyright-txt'>
							<span className='txt'>All rights reserved.</span>
							<span className="logo" style={{ ["--ft-logo-less" as any]: "url('/logo/logo-pri-less-dark.svg')" }}>
								<Image width={200} height={200} src={`/footer/mona-host.png`} alt='' />
							</span>
						</div>
					</div>
					<div className="ft-license">
						<div className="label">Điều khoản</div>
						<ul className="social-list d-flex">
							<li className="social-item">
								<Link href='/' className='link'>
									<Image width={200} height={200} src='./footer/social-fb.svg' alt='' />
								</Link>
							</li>
							<li className="social-item">
								<Link href='/' className='link'>
									<Image width={200} height={200} src='./footer/social-linked.svg' alt='' />
								</Link>
							</li>
							<li className="social-item">
								<Link href='/' className='link'>
									<Image width={200} height={200} src='./footer/social-youtube.svg' alt='' />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
