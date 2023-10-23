'use client';

import {IFaqFields} from '@/types/generated/contentful';
import {useRef, useState} from 'react';

export function FAQ(props: IFaqFields) {
	const answerElRef: any = useRef(null);

	const [state, setState] = useState(false);
	const [answerH, setAnswerH] = useState('0px');
	const {question, answer} = props;

	const handleOpenAnswer = () => {
		const answerElH = answerElRef?.current?.childNodes[0]?.offsetHeight;
		setState(!state);
		setAnswerH(`${answerElH + 20}px`);
	};

	return (
		<div
			className='space-y-3 mt-5 overflow-hidden border-b'
			onClick={handleOpenAnswer}
		>
			<h4 className='cursor-pointer pb-5 flex items-center justify-between text-lg text-brandBlue font-medium'>
				{question}
				{state ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-brandBlue ml-2'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M20 12H4'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-brandYellow ml-2'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 4v16m8-8H4'
						/>
					</svg>
				)}
			</h4>
			<div
				ref={answerElRef}
				className='duration-300'
				style={state ? {height: answerH} : {height: '0px'}}
			>
				<div>
					<p className='text-brandBlue'>{answer}</p>
				</div>
			</div>
		</div>
	);
}
