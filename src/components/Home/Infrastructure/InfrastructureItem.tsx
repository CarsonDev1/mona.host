import Image from 'next/image';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { PiUsersThreeThin } from 'react-icons/pi';

function InfrastructureItem() {
	return (
		<>
			<div className='col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div className='grid sm:grid-cols-2'>
					<div className='flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6'>
						<div className='relative aspect-square rounded-full size-12 flex border  before:absolute before:-inset-2 before:border  before:rounded-full'>
							<IoTimeOutline className='icon size-6 m-auto' />
						</div>
						<div className='space-y-2'>
							<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
								Mua dịch vụ chỉ trong 01 phút
							</h2>
							<p className=' text-gray-700'>
								Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.
							</p>
						</div>
					</div>
					<div className='relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)] '>
						<div className='absolute flex gap-1 top-2 left-3'>
							<span className='block size-2 rounded-full border ' />
							<span className='block size-2 rounded-full border ' />
							<span className='block size-2 rounded-full border ' />
						</div>
						<Image
							className='m-auto hide-mb'
							src='/home/wait.gif'
							width={245}
							height={245}
							alt='infrastructure'
						/>
					</div>
				</div>
			</div>
			<div className='col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div>
					<div className='relative aspect-square  size-32 flex mx-auto '>
						<Image
							className='mg-auto hide-mb'
							src='/home/helpdesk.gif'
							width={298}
							height={188}
							alt='infrastructure'
						/>
					</div>
					<div className='mt-6 text-center relative z-10 space-y-2'>
						<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
							Support 100% sự cố
						</h2>
						<p className=' text-gray-700'>
							Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente
							nisi.
						</p>
					</div>
				</div>
			</div>
			<div className='col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div>
					<div className='relative aspect-square rounded-full size-32 flex border mx-auto '>
						<Image
							className='mg-auto hide-mb'
							src='/home/ecosystem.png'
							width={298}
							height={188}
							alt='infrastructure'
						/>
					</div>
					<div className='mt-6 text-center relative z-10 space-y-2'>
						<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
							Hệ sinh thái đa dạng
						</h2>
						<p className=' text-gray-700'>
							Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente
							nisi.
						</p>
					</div>
				</div>
			</div>
			<div className='col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div className='h-full grid sm:grid-cols-2'>
					<div className='flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6'>
						<div className='relative aspect-square rounded-full size-12 flex border  before:absolute before:-inset-2 before:border before:rounded-full'>
							<PiUsersThreeThin className='icon size-6 m-auto' />
						</div>
						<div className='space-y-2'>
							<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
								Support từ chuyên gia
							</h2>
							<p className=' text-gray-700'>
								Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.
							</p>
						</div>
					</div>
					<div className='mt-6 relative sm:-mr-[--card-padding] sm:-my-[--card-padding] before:absolute before:w-px before:inset-0 before:mx-auto before:bg-[--ui-light-border-color] '>
						<div className='relative space-y-6 py-6 flex flex-col justify-center h-full'>
							<div className='flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative'>
								<span className='h-fit text-xs block px-2 py-1 shadow-sm border rounded-md '>
									Võ Ng. Thoại
								</span>
								<div className='size-7 ring-4 ring-white '>
									<img
										className='rounded-full  border border-gray-950/5 '
										src='https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg'
										alt=''
									/>
								</div>
							</div>
							<div className='flex items-center gap-2 ml-[calc(50%-1rem)] relative'>
								<div className='size-8 ring-4 ring-white '>
									<img
										className='rounded-full  border border-gray-950/5 '
										src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg'
										alt=''
									/>
								</div>
								<span className='h-fit text-xs block px-2 py-1 shadow-sm border rounded-md '>
									Phúc Nguyễn
								</span>
							</div>
							<div className='flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative'>
								<span className='h-fit text-xs block px-2 py-1 shadow-sm border rounded-md '>
									Kiệt Phạm
								</span>
								<div className='size-7 ring-4 ring-white '>
									<img
										className='rounded-full  border border-gray-950/5 '
										src='https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div className='grid sm:grid-cols-2'>
					<div className='flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6'>
						<div className='relative aspect-square rounded-full size-12 flex border  before:absolute before:-inset-2 before:border  before:rounded-full'>
							<BsCurrencyDollar className='icon size-6 m-auto' />
						</div>
						<div className='space-y-2'>
							<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
								1 loại, 1 bảng giá
							</h2>
							<p className=' text-gray-700'>
								Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.
							</p>
						</div>
					</div>
					<div className='relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)] '>
						<div className='absolute flex gap-1 top-2 left-3'>
							<span className='block size-2 rounded-full border ' />
							<span className='block size-2 rounded-full border ' />
							<span className='block size-2 rounded-full border ' />
						</div>
						<Image
							className='mg-auto hide-mb'
							src='/home/list.gif'
							width={298}
							height={188}
							alt='infrastructure'
						/>
					</div>
				</div>
			</div>
			<div className='col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] '>
				<div>
					<div className='pt-6 lg:px-6'>
						<svg className='w-full' viewBox='0 0 386 123' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<rect width={386} height={123} rx={10} />
							<g clipPath='url(#clip0_0_106)'>
								<circle className='text-primary-600 ' cx={29} cy={29} r={15} fill='currentColor' />
								<path
									d='M29 23V35'
									stroke='white'
									strokeWidth={2}
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M35 29L29 35L23 29'
									stroke='white'
									strokeWidth={2}
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M55.2373 32H58.7988C61.7383 32 63.4404 30.1816 63.4404 27.0508V27.0371C63.4404 23.9404 61.7246 22.1357 58.7988 22.1357H55.2373V32ZM56.7686 30.6807V23.4551H58.6279C60.6719 23.4551 61.8818 24.7881 61.8818 27.0576V27.0713C61.8818 29.3613 60.6924 30.6807 58.6279 30.6807H56.7686ZM69.4922 32.1436C71.666 32.1436 72.999 30.6875 72.999 28.2949V28.2812C72.999 25.8887 71.6592 24.4326 69.4922 24.4326C67.3184 24.4326 65.9785 25.8955 65.9785 28.2812V28.2949C65.9785 30.6875 67.3115 32.1436 69.4922 32.1436ZM69.4922 30.9062C68.2139 30.9062 67.4961 29.9424 67.4961 28.2949V28.2812C67.4961 26.6338 68.2139 25.6699 69.4922 25.6699C70.7637 25.6699 71.4883 26.6338 71.4883 28.2812V28.2949C71.4883 29.9355 70.7637 30.9062 69.4922 30.9062ZM76.9111 32H78.4219L79.9531 26.4629H80.0693L81.6074 32H83.1318L85.1758 24.5762H83.7061L82.3799 30.3047H82.2637L80.7324 24.5762H79.3242L77.793 30.3047H77.6836L76.3506 24.5762H74.8604L76.9111 32ZM87.6934 32H89.1768V27.6455C89.1768 26.4492 89.8535 25.7041 90.9404 25.7041C92.0273 25.7041 92.54 26.3125 92.54 27.543V32H94.0166V27.1943C94.0166 25.4238 93.1006 24.4326 91.4395 24.4326C90.3594 24.4326 89.6484 24.9111 89.2861 25.7041H89.1768V24.5762H87.6934V32ZM97.1562 32H98.6396V21.6641H97.1562V32ZM104.992 32.1436C107.166 32.1436 108.499 30.6875 108.499 28.2949V28.2812C108.499 25.8887 107.159 24.4326 104.992 24.4326C102.818 24.4326 101.479 25.8955 101.479 28.2812V28.2949C101.479 30.6875 102.812 32.1436 104.992 32.1436ZM104.992 30.9062C103.714 30.9062 102.996 29.9424 102.996 28.2949V28.2812C102.996 26.6338 103.714 25.6699 104.992 25.6699C106.264 25.6699 106.988 26.6338 106.988 28.2812V28.2949C106.988 29.9355 106.264 30.9062 104.992 30.9062ZM113.307 32.123C114.291 32.123 115.07 31.6992 115.508 30.9473H115.624V32H117.094V26.9209C117.094 25.3623 116.041 24.4326 114.175 24.4326C112.486 24.4326 111.317 25.2461 111.14 26.4629L111.133 26.5107H112.562L112.568 26.4834C112.746 25.957 113.286 25.6562 114.106 25.6562C115.111 25.6562 115.624 26.1074 115.624 26.9209V27.5771L113.614 27.6934C111.844 27.8027 110.846 28.5752 110.846 29.9014V29.915C110.846 31.2617 111.892 32.123 113.307 32.123ZM112.322 29.8535V29.8398C112.322 29.1699 112.787 28.8008 113.812 28.7393L115.624 28.623V29.2588C115.624 30.2158 114.811 30.9404 113.703 30.9404C112.903 30.9404 112.322 30.5371 112.322 29.8535ZM122.893 32.123C123.932 32.123 124.745 31.6445 125.176 30.8311H125.292V32H126.769V21.6641H125.292V25.752H125.176C124.779 24.9521 123.911 24.4463 122.893 24.4463C121.006 24.4463 119.816 25.9297 119.816 28.2812V28.2949C119.816 30.626 121.026 32.123 122.893 32.123ZM123.316 30.8584C122.072 30.8584 121.327 29.8877 121.327 28.2949V28.2812C121.327 26.6885 122.072 25.7178 123.316 25.7178C124.547 25.7178 125.312 26.6953 125.312 28.2812V28.2949C125.312 29.8809 124.554 30.8584 123.316 30.8584Z'
									fill='currentColor'
								/>
								<path
									d='M268.324 34H269.906V21.3174H268.333L264.958 23.7432V25.4131L268.184 23.0752H268.324V34ZM280.363 34H281.91V31.3721H283.712V29.957H281.91V21.3174H279.616C277.841 23.9629 275.898 27.0566 274.185 29.9307V31.3721H280.363V34ZM275.802 29.9658V29.8604C277.182 27.5312 278.843 24.9121 280.267 22.7852H280.372V29.9658H275.802ZM286.162 37.2256H287.296L288.676 32.2246H286.927L286.162 37.2256ZM296.672 34.2109C299.212 34.2109 301.075 32.6465 301.075 30.5283V30.5107C301.075 28.709 299.818 27.5576 297.973 27.3994V27.3643C299.555 27.0303 300.662 25.958 300.662 24.3936V24.376C300.662 22.4512 299.071 21.1064 296.654 21.1064C294.281 21.1064 292.646 22.4863 292.444 24.5518L292.436 24.6396H293.956L293.965 24.5518C294.097 23.2686 295.16 22.4775 296.654 22.4775C298.201 22.4775 299.071 23.2422 299.071 24.5693V24.5869C299.071 25.8525 298.017 26.7842 296.505 26.7842H294.984V28.1201H296.575C298.351 28.1201 299.467 28.9902 299.467 30.5459V30.5635C299.467 31.9082 298.333 32.8398 296.672 32.8398C294.984 32.8398 293.833 31.9785 293.71 30.7305L293.701 30.6426H292.181L292.189 30.748C292.356 32.752 294.053 34.2109 296.672 34.2109ZM310.434 34H311.98V31.3721H313.782V29.957H311.98V21.3174H309.687C307.911 23.9629 305.969 27.0566 304.255 29.9307V31.3721H310.434V34ZM305.872 29.9658V29.8604C307.252 27.5312 308.913 24.9121 310.337 22.7852H310.442V29.9658H305.872ZM323.297 34H324.826V28.1289C324.826 26.793 325.767 25.7119 327.006 25.7119C328.201 25.7119 328.975 26.4414 328.975 27.5664V34H330.504V27.9092C330.504 26.7051 331.374 25.7119 332.692 25.7119C334.028 25.7119 334.67 26.4062 334.67 27.8037V34H336.199V27.4521C336.199 25.4658 335.118 24.3584 333.185 24.3584C331.875 24.3584 330.794 25.0176 330.284 26.0195H330.144C329.704 25.0352 328.808 24.3584 327.524 24.3584C326.285 24.3584 325.389 24.9473 324.967 25.9668H324.826V24.5254H323.297V34ZM344.67 34.167C347.069 34.167 348.643 32.2246 348.643 29.2715V29.2539C348.643 26.2832 347.078 24.3584 344.67 24.3584C343.369 24.3584 342.235 25.0088 341.717 26.0195H341.576V20.7637H340.047V34H341.576V32.4883H341.717C342.297 33.543 343.352 34.167 344.67 34.167ZM344.318 32.8135C342.596 32.8135 341.541 31.46 341.541 29.2715V29.2539C341.541 27.0654 342.596 25.7119 344.318 25.7119C346.05 25.7119 347.078 27.0479 347.078 29.2539V29.2715C347.078 31.4775 346.05 32.8135 344.318 32.8135ZM352.016 37.1641H353.545V32.5059H353.686C354.204 33.5166 355.338 34.167 356.639 34.167C359.047 34.167 360.611 32.2422 360.611 29.2715V29.2539C360.611 26.3008 359.038 24.3584 356.639 24.3584C355.32 24.3584 354.266 24.9824 353.686 26.0371H353.545V24.5254H352.016V37.1641ZM356.287 32.8135C354.564 32.8135 353.51 31.46 353.51 29.2715V29.2539C353.51 27.0654 354.564 25.7119 356.287 25.7119C358.019 25.7119 359.047 27.0479 359.047 29.2539V29.2715C359.047 31.4775 358.019 32.8135 356.287 32.8135ZM367.254 34.167C369.407 34.167 371.051 32.998 371.051 31.3105V31.293C371.051 29.9395 370.189 29.166 368.405 28.7354L366.946 28.3838C365.83 28.1113 365.355 27.707 365.355 27.0654V27.0479C365.355 26.2129 366.182 25.6328 367.307 25.6328C368.449 25.6328 369.188 26.1514 369.39 26.8984H370.893C370.682 25.3516 369.302 24.3584 367.315 24.3584C365.303 24.3584 363.791 25.5449 363.791 27.1182V27.127C363.791 28.4893 364.591 29.2627 366.366 29.6846L367.834 30.0361C369.003 30.3174 369.486 30.7656 369.486 31.4072V31.4248C369.486 32.2861 368.581 32.8926 367.307 32.8926C366.094 32.8926 365.338 32.374 365.083 31.583H363.519C363.694 33.1475 365.145 34.167 367.254 34.167Z'
									fill='currentColor'
								/>
							</g>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123'
								fill='url(#paint0_linear_0_106)'
								style={{}}
							/>
							<path
								className='text-primary-600 '
								d='M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605'
								stroke='currentColor'
								strokeWidth={3}
							/>
							<defs>
								<linearGradient
									id='paint0_linear_0_106'
									x1={3}
									y1={60}
									x2={3}
									y2={123}
									gradientUnits='userSpaceOnUse'
								>
									<stop className='text-primary-300 ' stopColor='currentColor' />
									<stop
										className='text-white '
										offset={1}
										stopColor='currentColor'
										stopOpacity='0.103775'
									/>
								</linearGradient>
								<clipPath id='clip0_0_106'>
									<rect
										width={358}
										height={30}
										fill='white'
										style={{ fill: 'white', fillOpacity: 1 }}
										transform='translate(14 14)'
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className='mt-14 text-center relative z-10 space-y-2'>
						<h2 className='text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 '>
							Cấu hình mạnh nhất thị trường
						</h2>
						<p className=' text-gray-700'>
							Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfrastructureItem;
