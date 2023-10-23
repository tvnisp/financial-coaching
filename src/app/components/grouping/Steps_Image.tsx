import {useContentfullImage} from '@/hooks/useContentfulImage';
import {useTypeAtomicEntries} from '@/hooks/useTypeAtomicEntries';
import {
	IGroupingFields,
	IStep,
	IStepFields,
} from '@/types/generated/contentful';
import Image from 'next/image';
import React from 'react';

function CheckSvg() {
	return (
		<svg
			className='w-6 text-gray-600'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<polyline
				fill='none'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit='10'
				points='6,12 10,16 18,8'
			></polyline>
		</svg>
	);
}

function ArrowSvg() {
	return (
		<svg
			className='w-4 text-gray-600'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			viewBox='0 0 24 24'
		>
			<line
				fill='none'
				strokeMiterlimit='10'
				x1='12'
				y1='2'
				x2='12'
				y2='22'
			></line>
			<polyline
				fill='none'
				strokeMiterlimit='10'
				points='19,15 12,22 5,15'
			></polyline>
		</svg>
	);
}

function Step(props: IStepFields) {
	const {title, description} = props;
	return (
		<div className='flex'>
			<div className='flex flex-col items-center mr-4'>
				<div>
					<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
						<ArrowSvg />
					</div>
				</div>
				<div className='w-px h-full bg-gray-300'></div>
			</div>
			<div className='pt-1 pb-8'>
				<p className='mb-2 text-lg font-bold'>Step {title}</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function StepsImage(props: IGroupingFields) {
	const {body, image} = props;
	const steps  = useTypeAtomicEntries(body || [], 'step');
	const {imageUrl, imageDescription} = useContentfullImage({
		asset: image,
		options: {width: 600, height: 640},
	});

	return (
		<div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 text-brandBlue'>
			<div className='grid gap-6 row-gap-10 lg:grid-cols-2'>
				<div className='lg:py-6 lg:pr-16'>
					{steps?.map((stepData, index) => (
						<Step key={index} {...stepData.fields} />
					))}
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<CheckSvg />
								</div>
							</div>
						</div>
						<div className='pt-1'>
							<p className='mb-2 text-lg font-bold'>Success</p>
							<p className='text-brandBlue'></p>
						</div>
					</div>
				</div>
				<div className='relative'>
					<Image
						className='inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full'
						src={imageUrl}
						width={600}
						height={640}
						alt={imageDescription}
					/>
				</div>
			</div>
		</div>
	);
}
