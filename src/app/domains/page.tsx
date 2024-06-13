'use client';
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { getListDomain } from '@/app/api/listDomain';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import Banner from '@/app/domains/components/banner/Banner';
import ContentList from '@/app/domains/components/content-list/ContentList';
import DomainName from '@/app/domains/components/domain-name/DomainName';
import TableDomain from '@/app/domains/components/table/TableDomain';
import Identification from '@/app/domains/components/identification/Identification';
import Choose from '@/app/domains/components/choose/Choose';

const Domains = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['listDomain'],
		queryFn: () => getListDomain(),
	});

	const listDomain = data?.popular_tlds || [];
	const listDomainTable = data?.tlds || [];

	const tableDomainRef = useRef<HTMLDivElement>(null);
	const bannerRef = useRef<HTMLDivElement>(null);
	const textFieldRef = useRef<HTMLInputElement>(null);

	const [suffix, setSuffix] = useState('');
	const [shouldScrollToBanner, setShouldScrollToBanner] = useState(false);

	const handleScrollToTableDomain = () => {
		if (tableDomainRef.current) {
			tableDomainRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleScrollToBanner = (suffix: string) => {
		setSuffix(suffix);
		setShouldScrollToBanner(true);
	};

	useEffect(() => {
		if (shouldScrollToBanner && bannerRef.current) {
			bannerRef.current.scrollIntoView({ behavior: 'smooth' });

			if (textFieldRef.current) {
				textFieldRef.current.focus();
			}
			setShouldScrollToBanner(false);
		}
	}, [shouldScrollToBanner]);

	return (
		<div className='bg-white domainss'>
			<Suspense>
				<div ref={bannerRef}>
					<Banner suffixFocus={suffix} setSuffixFocus={setSuffix} textFieldRef={textFieldRef} />
				</div>
			</Suspense>
			<ContentList />
			{isLoading ? (
				<div className='flex items-center justify-center'>
					<CircularProgress />
				</div>
			) : (
				<DomainName
					listDomain={listDomain}
					onSeeMore={handleScrollToTableDomain}
					onRegister={handleScrollToBanner}
				/>
			)}
			<Identification />
			<div ref={tableDomainRef}>
				{isLoading ? (
					<div className='flex items-center justify-center'>
						<CircularProgress />
					</div>
				) : (
					<TableDomain listDomainTable={listDomainTable} />
				)}
			</div>
			<Choose />
		</div>
	);
};

export default Domains;
