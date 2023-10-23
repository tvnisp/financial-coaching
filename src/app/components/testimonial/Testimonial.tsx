import Link from 'next/link';
import {PropsWithChildren} from 'react';

interface ITestimonialProps {
	author: string;
	description: string;
	imgUrl: string;
	link: string;
}
function SingleTestimonial(props: ITestimonialProps) {
	const {author, description, imgUrl, link} = props;
	return (
		<blockquote className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
			<div className='flex items-center gap-4'>
				<img
					alt='Man'
					src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
					className='h-14 w-14 rounded-full object-cover'
				/>
				<div>
					<p className='mt-0.5 text-lg font-medium text-gray-900'>
						{author}
					</p>
				</div>
			</div>
			<p className='mt-4 text-gray-700'>{description}</p>
			<Link href={link} className='underline text-brandBlue block mt-2'>
				Read more
			</Link>
		</blockquote>
	);
}

export function TestimoniaSection(props: PropsWithChildren) {
	const {children} = props;
	return (
		<div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
			<h3 className='text-center text-brandBlue text-3xl font-semibold sm:text-4xl'>
				Read trusted reviews from our customers
			</h3>

			<div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
				{children}
			</div>
		</div>
	);
}

TestimoniaSection.Testimonial = SingleTestimonial;
