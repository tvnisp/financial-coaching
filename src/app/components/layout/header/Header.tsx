'use client';
import Image from 'next/image';
import Link from 'next/link';
import {CalendyButton} from '../../button/CalendyButton';

const navLinks = [
	{to: '/', text: 'Home'},
	{to: '/about', text: 'About'},
	{to: '/contact', text: 'Contact'},
];

function NavLink(props: {to: string; text: string}) {
	const {to, text} = props;
	return (
		<li className='hover:bg-brandYellow rounded-lg transition-colors text-brandBlue'>
			<Link href={to} className='hover:text-white'>
				{text}
			</Link>
		</li>
	);
}

export function Header() {
	return (
		<header>
			<nav className='navbar max-w-7xl mx-auto'>
				<div className='navbar-start'>
					<Link href='/' className='h-fit'>
						<Image
							src='/assets/logo.png'
							width={250}
							height={71}
							alt='logo'
						/>
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 text-lg'>
						{navLinks.map((link, index) => (
							<NavLink
								key={index}
								to={link.to}
								text={link.text}
							/>
						))}
					</ul>
				</div>
				<div className='navbar-end'>
					<div className='drawer-end'>
						<input
							id='my-drawer'
							type='checkbox'
							className='drawer-toggle'
						/>
						<div className='drawer-content'>
							<label
								tabIndex={0}
								htmlFor='my-drawer'
								className='btn btn-ghost lg:hidden'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
						</div>
						<div className='drawer-side z-10'>
							<label
								htmlFor='my-drawer'
								aria-label='close sidebar'
								className='drawer-overlay'
							></label>
							<ul className='menu p-4 w-80 min-h-full bg-gray-50 text-base-content'>
								{navLinks.map((link, index) => (
									<NavLink
										to={link.to}
										key={index}
										text={link.text}
									/>
								))}
							</ul>
						</div>
					</div>
					<div className='hidden lg:flex'>
						<CalendyButton />.
					</div>
				</div>
			</nav>
		</header>
	);
}
