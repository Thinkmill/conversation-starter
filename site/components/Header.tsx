import Link from 'next/link';

import { Wrapper } from './primitives/Wrapper';
import { Logo } from './icons/Logo';

export function Header(props: any) {
	return (
		<header
			css={{
				gridArea: 'header',
				zIndex: 2,
				margin: 'var(--space5) 0 var(--space6) 0',
			}}
			{...props}
		>
			<Wrapper
				css={{
					margin: 'var(--space5) auto var(--space5) auto',
					display: 'grid',
					gridTemplateColumns: 'auto 1fr',
					alignItems: 'center',
				}}
			>
				<Link href="/" passHref>
					<a>
						<Logo
							css={{
								display: 'inline-block',
								height: 'var(--space8)',
								margin: '0 var(--space4) var(--space2) 0',
								verticalAlign: 'middle',
							}}
						/>
					</a>
				</Link>
			</Wrapper>
		</header>
	);
}
