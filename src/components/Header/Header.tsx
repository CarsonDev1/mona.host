'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Button as CustomButton } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import './header.scss';
import { NAV_LINKS } from '@/components/Header/NavLink';
import { Cart } from '@/components/MiniCart/Cart';
import { FaUserAlt } from 'react-icons/fa';
import { Modal, Box, Typography, Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import SignIn from '@/components/SignIn/SignIn';
import SignUp from '@/components/SignUp/SignUp';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/app/api/auth/user';
import envConfig from '@/config';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { useAppContext } from '@/context/authProvider';

interface NavLink {
	href: string;
	label: string;
	isActive: boolean;
}

type UserData = {
	fullname: string;
	email: string;
	password: string;
};

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const [cartCount, setCartCount] = useState(0);
	const [userData, setUserData] = useState<null | UserData>(null);
	const [error, setError] = useState(null);

	const { sessionToken } = useAppContext();

	// useEffect(() => {
	// 	const fetchRequest = async () => {
	// 		try {
	// 			const response = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users/me`, {
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `Bearer ${sessionToken}`,
	// 				},
	// 			});

	// 			const payload = await response.json();
	// 			const data = {
	// 				status: response.status,
	// 				payload,
	// 			};

	// 			if (!response.ok) {
	// 				throw data;
	// 			}

	// 			setUserData(data.payload);
	// 			localStorage.setItem('userData', JSON.stringify(data.payload));
	// 		} catch (err) {
	// 			console.error('Error fetching user data:', err);
	// 		}
	// 	};

	// 	const storedData = localStorage.getItem('userData');
	// 	if (storedData) {
	// 		try {
	// 			const parsedData = JSON.parse(storedData);
	// 			setUserData(parsedData);
	// 		} catch (parseError) {
	// 			console.error('Error parsing stored data:', parseError);
	// 			localStorage.removeItem('userData');
	// 			fetchRequest();
	// 		}
	// 	} else {
	// 		fetchRequest();
	// 	}
	// }, [sessionToken]);

	const handleMenuToggle = () => setMenuOpen(!menuOpen);
	const handleCartToggle = () => setCartOpen(!cartOpen);
	const handleModalToggle = (login: boolean) => {
		setIsLogin(login);
		setModalOpen(!modalOpen);
	};
	const switchForm = () => setIsLogin(!isLogin);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
	const handleCloseUserMenu = () => setAnchorElUser(null);

	const handleLogout = () => {
		setUserData(null);
		localStorage.removeItem('userData');
		localStorage.removeItem('sessionToken');
		handleCloseUserMenu();
	};

	const navLinks = useMemo(
		() =>
			NAV_LINKS.map((link, i) => (
				<li key={i} className='py-2'>
					<Link
						href={link.href}
						className='block md:px-[2.4rem] transition hover:text-primary-600 nav-text active:text-[#1685FE]'
					>
						<span className='text-[16px] font-bold'>{link.label}</span>
					</Link>
				</li>
			)),
		[]
	);

	const updateCartCount = () => {
		const cart = JSON.parse(localStorage.getItem('cart') || '[]');
		setCartCount(cart.length);
	};

	useEffect(() => {
		updateCartCount();

		window.addEventListener('cartUpdated', updateCartCount);

		return () => {
			window.removeEventListener('cartUpdated', updateCartCount);
		};
	}, []);

	return (
		<header className='header'>
			<nav className='header-nav'>
				<div className='container mx-auto'>
					<div className='flex flex-wrap items-center justify-between py-[18px]'>
						<div className='header-flex flex items-center justify-between w-full xl:w-auto'>
							<Link
								href='/'
								aria-label='mona host logo'
								className='header-logo'
								style={{ ['--hd-logo-less' as any]: "url('/logo/hd-logo-pri-less-dark.svg')" }}
							>
								<Image src='/logo/logo-pri-less.svg' width={150} height={48} alt='logo-host' />
							</Link>
							<div className='flex xl:hidden items-center'>
								<div className='header-user block xl:hidden items-center relative'>
									<div className='relative cursor-pointer' onClick={() => handleModalToggle(true)}>
										<FaUserAlt className='icon-user' fill='#1ec0f2' />
									</div>
								</div>
								<ThemeSwitch />
								<Link href='/cart'>
									<div
										className='header-cart relative cursor-pointer mr-4'
										style={{ ['--bag-header' as any]: "url('/cart/bag-header-dark.svg')" }}
										onClick={handleCartToggle}
									>
										<Image
											src='/cart/bag-header.svg'
											width={48}
											height={48}
											alt='bag-header'
											className='icon'
										/>
										<button
											className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'
											onClick={() => setCartOpen(true)}
										>
											<span>{cartCount}</span>
										</button>
									</div>
								</Link>
								<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
									<SheetTrigger asChild>
										<button
											aria-label='hamburger'
											onClick={handleMenuToggle}
											className='relative border border-gray-950/30 p-2 rounded-full transition duration-300 active:scale-95'
										>
											<div
												className={`m-auto h-[2px] w-[24px] rounded header-bar transition duration-300 ${
													menuOpen ? 'rotate-45 translate-y-1' : ''
												}`}
											/>
											<div
												className={`m-auto mt-1 h-[2px] w-[24px] rounded header-bar transition duration-300 ${
													menuOpen ? '-rotate-45 -translate-y-1' : ''
												}`}
											/>
										</button>
									</SheetTrigger>
									<SheetContent side='left' className='p-4 w-[400px] sm:w-[540px]'>
										<Image
											src='/home/logo-banner.png'
											width={218}
											height={37}
											alt='logo-toggle'
											className='w-[218px] h-[37px]'
										/>
										<ul className='flex flex-col items-center space-y-4 py-[12px] w-full'>
											{navLinks}
										</ul>
									</SheetContent>
								</Sheet>
							</div>
						</div>
						<div className='hidden xl:flex xl:items-center xl:space-x-8'>
							<ul className='menu-list flex'>
								{NAV_LINKS.map((link: NavLink, i: number) => (
									<li key={i} className={`menu-item ${link.isActive ? 'active' : ''}`}>
										<Link href={link.href} className='menu-link'>
											<span className='label'>{link.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='hidden xl:flex xl:items-center'>
							<ThemeSwitch />
							<Link href='/cart'>
								<div
									className='header-cart relative cursor-pointer'
									style={{ ['--bag-header' as any]: "url('/cart/bag-header-dark.svg')" }}
									onClick={handleCartToggle}
								>
									<Image
										src='/cart/bag-header.svg'
										width={48}
										height={48}
										alt='bag-header'
										className='icon'
									/>
									<button
										className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'
										onClick={() => setCartOpen(true)}
									>
										<span>{cartCount}</span>
									</button>
								</div>
							</Link>

							{userData ? (
								<Box sx={{ flexGrow: 0 }}>
									<Tooltip title=''>
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Avatar
												alt={userData?.fullname}
												src='/static/images/avatar/2.jpg'
												className='bg-orange-500 border-[3px] border-slate-400'
												style={{ borderStyle: 'solid' }}
											/>
										</IconButton>
									</Tooltip>
									<Menu
										sx={{
											mt: '45px',
											width: '500px',
											'& .MuiMenuItem-root': {
												fontSize: '1.25rem',
												padding: '12px 20px',
											},
										}}
										id='menu-appbar'
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										{settings.map((setting) => (
											<MenuItem
												key={setting}
												onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
											>
												<Typography textAlign='center'>{setting}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
							) : (
								<div className='btn-group'>
									<button className='btn btn-size-small' onClick={() => handleModalToggle(true)}>
										<span className='txt'>Đăng nhập</span>
									</button>
									<button
										className='btn btn-size-small btn-pri'
										onClick={() => handleModalToggle(false)}
									>
										<span className='txt'>Đăng ký</span>
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 500,
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 4,
						borderRadius: 2,
					}}
				>
					<Image
						src='/home/logo-banner.png'
						width={150}
						height={48}
						alt='logo-host'
						className='w-[194px] mx-auto'
						priority
					/>
					{isLogin ? (
						<SignIn switchForm={switchForm} closeModal={() => setModalOpen(false)} />
					) : (
						<SignUp switchForm={switchForm} />
					)}
				</Box>
			</Modal>
		</header>
	);
}

export default Header;
