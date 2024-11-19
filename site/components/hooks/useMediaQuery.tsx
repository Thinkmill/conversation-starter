import weakMemo from '@emotion/weak-memoize';
import facepaint from 'facepaint';

const paint = weakMemo((breakpoints) =>
	facepaint(
		Object.entries(breakpoints).map(
			([, width]) => `@media (min-width: ${width}px)`
		)
	)
);

export const MEDIAQUERIES = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1400,
};

export function useMediaQuery() {
	return paint(MEDIAQUERIES);
}
