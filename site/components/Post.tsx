import { Stack } from './primitives/Stack';
import { Type } from './primitives/Type';
import { PostProps } from '../types'


export function Post({ title, content, name, preview }: PostProps) {
	return (
		<section>
			<Type look={preview ? 'heading24' : 'heading48'} as="h2">
				{title}
			</Type>
			<Type look="text18" as="p">
				{preview ? `${content.slice(0, 200)}...` : content}
			</Type>
			<Stack orientation="horizontal" gap={2}>
				<div
					css={{
						display: 'inline-block',
						background: 'var(--border)',
						width: 'var(--space6)',
						height: 'var(--space6)',
						borderRadius: '100%',
						verticalAlign: 'center',
					}}
				/>
				<Type look="text14">{name}</Type>
			</Stack>
		</section>
	);
}
