'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table-domain.scss';
import { ListDomain } from '@/types/ListDomain';

interface TableDomainProps {
	listDomainTable: ListDomain[];
}

const TableDomain: React.FC<TableDomainProps> = ({ listDomainTable }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [displayCount, setDisplayCount] = useState(5);

	const filteredData = listDomainTable.filter((item) =>
		item.suffix.toLowerCase().includes(searchQuery.toLowerCase())
	);
	const visibleData = filteredData.slice(0, displayCount);

	const handleLoadMore = () => {
		setDisplayCount(displayCount + 5);
	};

	return (
		<div className='px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12'>
			<h2 className='mb-8 text-2xl font-semibold text-center sm:text-3xl text-gray-950 '>
				Bảng giá dịch vụ tên miền
			</h2>
			<div className='flex flex-col items-center justify-between mb-4 sm:flex-row'>
				<TextField
					className='w-full mb-2 bg-white rounded-md sm:w-1/3 sm:mb-0 '
					variant='outlined'
					placeholder='Tìm kiếm loại tên miền...'
					value={searchQuery}
					sx={{
						'& .MuiOutlinedInput-root': {
							'&.Mui-focused fieldset': {
								borderColor: '#3399FF',
							},
							'&:hover fieldset': {
								borderColor: '#3399FF',
							},
						},
					}}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<span className='text-sm italic sm:text-base'>(Đơn vị tiền tệ: VNĐ)</span>
			</div>
			<TableContainer component={Paper}>
				<Table className='styled-table'>
					<TableHead>
						<TableRow className='bg-gray-200'>
							<TableCell align='center' className='table-cell text-sm sm:text-xl tld-cell'>
								TLD
							</TableCell>
							<TableCell align='center' className='table-cell text-sm sm:text-xl'>
								1 năm
							</TableCell>
							<TableCell align='center' className='table-cell text-sm sm:text-xl'>
								2 năm
							</TableCell>
							<TableCell align='center' className='table-cell text-sm sm:text-xl'>
								5 năm
							</TableCell>
							<TableCell align='center' className='table-cell text-sm sm:text-xl'>
								10 năm
							</TableCell>
							<TableCell align='center' className='table-cell text-sm sm:text-xl'>
								Gia hạn /năm
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{visibleData.map((row) => (
							<TableRow key={row.id}>
								<TableCell align='center' className='table-cell text-base sm:text-lg tld-cell'>
									{row.suffix}
								</TableCell>
								<TableCell align='center' className='table-cell text-base sm:text-lg'>
									{row.buy_price.toLocaleString()}
								</TableCell>
								<TableCell align='center' className='table-cell text-base sm:text-lg'>
									{row.renew_price.toLocaleString()}
								</TableCell>
								<TableCell align='center' className='table-cell text-base sm:text-lg'>
									{(row.renew_price * 5).toLocaleString()}
								</TableCell>
								<TableCell align='center' className='table-cell text-base sm:text-lg'>
									{(row.renew_price * 10).toLocaleString()}
								</TableCell>
								<TableCell align='center' className='table-cell text-base sm:text-lg'>
									{row.renew_price.toLocaleString()}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{displayCount < filteredData.length && (
				<div
					onClick={handleLoadMore}
					className='flex flex-col items-center justify-center gap-4 mt-8 cursor-pointer '
				>
					<div className='p-3 rounded-md bg-[#1ec0f2] hover:bg-[#5180e5]'>
						<span className='text-white text-nowrap'>Xem thêm</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default TableDomain;
