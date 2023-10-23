import {IGroupingFields} from '@/types/generated/contentful';
import {ContentBlockRaw} from '../contentBlock/ContentBlock';

export default function FAQs(props: IGroupingFields) {
	const {title, subtitle, body} = props;
	return (
		<div className='leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8'>
			<div className='space-y-3 text-center'>
				<h1 className='text-brandBlue text-3xl font-semibold sm:text-4xl'>
					{title}
				</h1>
				<p className='text-brandBlue max-w-lg mx-auto text-lg'>
					{subtitle}
				</p>
			</div>
			<div className='mt-14 mx-auto'>
				{body?.map((item, idx) => (
					<ContentBlockRaw key={idx} {...item} />
				))}
			</div>
		</div>
	);
}
