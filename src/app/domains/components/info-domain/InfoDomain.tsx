import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { IoMdClose } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';

interface SearchResult {
	suffix: string;
	name: string;
	buy_price: number;
	renew_price: number;
}

interface InfoDomainProps {
	open: boolean;
	handleClose: () => void;
	searchResult: SearchResult | null;
	domainInfo: any | null;
	loadingWhois: boolean;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	maxWidth: '1000px',
	bgcolor: 'background.paper',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
	maxHeight: '90vh',
	overflowY: 'auto',
};

const InfoDomain: React.FC<InfoDomainProps> = ({ open, handleClose, searchResult, domainInfo, loadingWhois }) => {
	const removeDot = (name: string) => {
		if (name.startsWith('.')) {
			return name.substring(1);
		}
		return name;
	};
	
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
				sx: {
					backgroundColor: 'rgba(0, 0, 0, 0.3)',
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style}>
					<IoMdClose
						onClick={handleClose}
						className='absolute top-0 right-0 text-2xl -translate-x-2 translate-y-2 cursor-pointer'
					/>
					{loadingWhois ? (
						<div className='flex items-center justify-center h-full'>
							<CircularProgress />
						</div>
					) : (
						domainInfo &&
						searchResult && (
							<>
								<Typography
									id='transition-modal-title'
									variant='h5'
									component='h5'
									className='mb-4 font-semibold text-center'
								>
									Thông tin WHOIS tên miền:{' '}
									<span className='text-[#3399FF]'>{removeDot(searchResult?.name)}</span>
								</Typography>
								<Typography variant='body1' className='mb-4 text-center'>
									Dữ liệu được cập nhật dưới 1 phút trước
								</Typography>
								<div className='flex flex-col gap-1 xl:gap-4'>
									<div className='flex items-center gap-4 p-4 rounded-sm md:flex-row bg-slate-200'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>Tên miền:</Typography>
											<Link href={`https://${domainInfo?.domain_name}`} target='_blank' rel='noopener noreferrer'>
													<div className='flex items-center gap-2 cursor-pointer'>
														<Typography variant='body1' className='text-[#3399FF]'>
															{domainInfo?.domain_name}
														</Typography>
														<FaExternalLinkAlt fill='#3399FF' />
													</div>
											</Link>
									</div>
									<div className='flex items-center gap-4 p-4 md:flex-row'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>Thông tin:</Typography>
										<Typography variant='body1'>Đã được đăng ký</Typography>
									</div>
									<div className='flex items-center gap-4 p-4 rounded-sm md:flex-row bg-slate-200'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>
											Ngày đăng ký:
										</Typography>
										<Typography variant='body1'>{domainInfo?.creation_date}</Typography>
									</div>
									<div className='flex items-center gap-4 p-4 md:flex-row'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>
											Ngày hết hạn:
										</Typography>
										<Typography variant='body1' className='font-semibold'>
											{domainInfo?.expiration_date}
										</Typography>
									</div>
									<div className='flex items-center gap-4 p-4 rounded-sm md:flex-row bg-slate-200'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>
											Chủ sở hữu tên miền:
										</Typography>
										<Typography variant='h6'>--</Typography>
									</div>
									<div className='flex flex-col items-start gap-1 p-4 md:flex-row md:items-center md:gap-4'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>
											Tên miền được quản lý tại:
										</Typography>
										<Typography variant='body1'>{domainInfo?.registrar}</Typography>
									</div>
									<div className='flex flex-col items-start gap-1 p-4 rounded-sm md:flex-row md:items-center md:gap-4 bg-slate-200'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>Nameservers:</Typography>
										<div className='flex flex-col gap-1'>
											{domainInfo?.name_server?.map(
												(nameServer: string, index: number) => (
													<Typography key={index} variant='body1'>
														{nameServer}
													</Typography>
												)
											)}
										</div>
									</div>
									<div className='flex items-center gap-4 p-4 md:flex-row'>
										<Typography className='min-w-[100px] md:min-w-[200px]'>DNSSEC:</Typography>
										<Typography variant='body1'>{`${domainInfo?.dnssec}`}</Typography>
									</div>
								</div>
							</>
						)
					)}
				</Box>
			</Fade>
		</Modal>
	);
};

export default InfoDomain;
