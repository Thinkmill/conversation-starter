import { Post } from './Post';
import { Posts } from '../types';

export function Listing({ posts }: { posts: Posts }) {
	return (
		<ul
			css={{
				listStyle: 'none',
				margin: 0,
				padding: 0,
			}}
		>
			{posts
				.slice()
				.sort((a, b) => (new Date(b.publishDate) as any) - (new Date(a.publishDate) as any))
				.map(({ title, content, author: { name } }, i) => (
					<li
						key={`${title}-${i}`}
						css={{
							background: i % 2 === 0 ? 'var(--bg)' : 'transparent',
							padding: 'var(--space6)',
						}}
					>
						<Post title={title} content={content} name={name} preview />
					</li>
				))}
		</ul>
	);
}
