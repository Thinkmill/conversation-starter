import { useMediaQuery } from '../hooks/useMediaQuery';

export function Wrapper({ offset = 0, ...props }) {
	const mq = useMediaQuery();

	return (
		<div
			css={mq({
				maxWidth: `${78.875 - offset}rem`,
				margin: '0 auto',
				padding: ['0 var(--space5)', '0 var(--space6)', '0 var(--space7)'],
			})}
			{...props}
		/>
	);
}
