'use client';
export function CalendyButton() {
	return (
		<button
			className='btn btn-primary'
			onClick={() => {
				const win = window as any;
				win.Calendly.initPopupWidget({
					url: process.env.NEXT_PUBLIC_CALENDY_URL,
				});
			}}
		>
			Hire Me
		</button>
	);
}
