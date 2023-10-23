import {useContentfullImage} from '@/hooks/useContentfulImage';
import {ICallToActionFields} from '@/types/generated/contentful';
import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction(props: ICallToActionFields) {
	const {title, subtitle, description, image} = props;

	const {imageUrl, imageDescription} = useContentfullImage({
		asset: image,
		options: {width: 520, height: 380},
	});

	return (
		<div className='max-w-screen-xl mx-auto md:px-8 py-14'>
			<div className='items-center gap-x-12 sm:px-4 md:px-0 lg:flex'>
				<div className='flex-1 sm:hidden lg:block'>
					<Image
						className='rounded-sm'
						src={imageUrl}
						width={520}
						height={380}
						alt={imageDescription}
					/>
				</div>
				<div className='max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl'>
					<h3 className='text-brandYellow text-bold font-semibold'>
						{subtitle}
					</h3>
					<p className='text-brandBlue text-3xl font-semibold sm:text-4xl'>
						{title}
					</p>
					<p className='mt-3 text-brandBlue'>{description}</p>
					<Link
						href='javascript:void(0)'
						className='inline-flex gap-x-1 items-center text-brandYellow text-bold hover:text-indigo-600 hover:underline duration-150 font-medium'
					>
						Learn more
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5'
						>
							<path
								fillRule='evenodd'
								d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
								clipRule='evenodd'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
