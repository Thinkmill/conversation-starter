import { list } from '@keystone-6/core';
import { select, relationship, text, timestamp } from '@keystone-6/core/fields';

export const lists = {
	Post: list({
		ui: {
			listView: {
				initialColumns: ['title', 'status', 'author', 'publishDate'],
				initialSort: { field: 'publishDate', direction: 'ASC' },
			},
		},
		fields: {
			title: text({ validation: { isRequired: true } }),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
				],
			}),
			content: text({
				ui: {
					displayMode: 'textarea',
				},
			}),
			publishDate: timestamp(),
			author: relationship({ ref: 'Author.posts', many: false }),
		},
	}),
	Author: list({
		ui: {
			listView: {
				initialColumns: ['name', 'email'],
			},
		},
		fields: {
			name: text({ validation: { isRequired: true } }),
			email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
			posts: relationship({ ref: 'Post.author', many: true }),
		},
	}),
};
