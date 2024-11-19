import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import Head from 'next/head';

import { COLORS, SPACE, TYPE, TYPESCALE } from '../lib/TOKENS';
import { Wrapper } from './primitives/Wrapper';
import { reset } from '../lib/reset';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
	children: React.ReactNode, 
	title?: string, 
	description?: string, 
	ogImage?: {
		url: string, 
		width: number, 
		height: number
	}
}

export function Layout({
	children,
	title = 'My Blog',
	description = 'A blog built with Keystone',
	ogImage = {
		url: '/TODO',
		width: 1522,
		height: 820,
	},
}: LayoutProps) {
	const router = useRouter();

	return (
		<Fragment>
			<Global styles={reset} />
			<Global
				styles={{
					':root': {
						...COLORS,
						...SPACE,
						...TYPE,
						...TYPESCALE,
						'--ani': '1',
					},
					html: {
						height: '100%',
					},
					body: {
						fontFamily: 'var(--font-body)',
						lineHeight: 1.2,
						margin: 0,
						padding: 0,
						color: 'var(--text)',
						height: '100%',
					},
					'#__next': {
						minHeight: '100%',
						display: 'grid',
						gridTemplateRows: 'auto 1fr',
						gridTemplateAreas: '"header" "main" "footer"',
						gridTemplateColumns: 'minmax(0, 1fr)', // https://css-tricks.com/preventing-a-grid-blowout/
					},
					a: {
						color: 'var(--focus)',
						textDecoration: 'none',
						transition: 'color calc(var(--ani) * 0.3s) ease',
						textUnderlineOffset: '3px',
					},
					'a:hover': {
						color: 'var(--text)',
						textDecoration: 'underline',
					},
					'*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible':
						{
							outline: '1px dashed var(--focus)',
							outlineOffset: '3px',
						},
					'input:focus-visible': {
						outlineStyle: 'solid',
						outlineWidth: '3px',
						outlineOffset: '0',
					},
					'*, *:before, *:after': {
						boxSizing: 'border-box',
					},
				}}
			/>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#062959" />
				<meta name="msapplication-TileColor" content="#062959" />
				<meta name="theme-color" content="#062959" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta
					property="og:url"
					content={`https://homepage.tld/${router.asPath}`}
				/>
				<meta
					property="og:image"
					content={`https://homepage.tld/${ogImage.url}`}
				/>
				<meta property="og:image:width" content={`${ogImage.width}`} />
				<meta property="og:image:height" content={`${ogImage.height}`} />
			</Head>

			<Header />

			<main
				css={{
					gridArea: 'main',
					position: 'relative',
					zIndex: 1,
				}}
			>
				<Wrapper>{children}</Wrapper>
			</main>

			<Footer />
		</Fragment>
	);
}
