import { useMediaQuery } from './hooks/useMediaQuery';
import { Wrapper } from './primitives/Wrapper';
import { Emoji } from './primitives/Emoji';
import { Type } from './primitives/Type';

export function Footer() {
	const mq = useMediaQuery();

	return (
		<footer
			css={mq({
				gridArea: 'footer',
				padding: 'var(--space5) 0',
				marginTop: 'var(--space7)',
				zIndex: 2,
				textAlign: 'center',
			})}
		>
			<Wrapper>
				<Type look="text16">
					Made in <Emoji symbol="🇦🇺" alt="Australia" /> by Thinkmill.
				</Type>
			</Wrapper>
		</footer>
	);
}
