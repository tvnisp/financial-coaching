import {ICallToActionFields} from '@/types/generated/contentful';

export default function BannerCTA(props: ICallToActionFields) {
	const {title, description} = props;
	return (
		<div className='py-28 relative mt-6'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
				<div className='max-w-xl md:mx-auto'>
					<p className='text-white text-3xl font-semibold sm:text-4xl'>
						{title}
					</p>
					<p className='text-blue-100 mt-3'>{description}</p>
				</div>
				<div className='mt-4'>
					<a href='javascript:void(0)' className='btn btn-secondary'>
						Get started
					</a>
				</div>
			</div>
			<div className='absolute top-0 w-full h-full bg-brandBlue'></div>
		</div>
	);
}
