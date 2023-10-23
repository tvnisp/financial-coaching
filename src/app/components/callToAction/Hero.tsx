import {useContentfullImage} from '@/hooks/useContentfulImage';
import {
	IActionItemFields,
	ICallToActionFields,
} from '@/types/generated/contentful';

export default function Hero(props: ICallToActionFields) {
	const {title, description, button, image} = props;

	const {imageUrl} = useContentfullImage({asset: image});
	const buttonFields = button?.fields as IActionItemFields;

	return (
		<div
			className='hero min-h-550'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold animate__animated animate__fadeInLeft'>
						{title}
					</h1>
					<p className='mb-5 animate__animated animate__fadeInRight animate__delay-1s'>
						{description}
					</p>
					<button className='btn btn-primary'>
						{buttonFields.title}
					</button>
				</div>
			</div>
		</div>
	);
}
