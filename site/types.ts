export interface Post {
	title: string;
	content: string;
	preview: boolean;
	publishDate: Date;
	author: {
		name: string;
	};
}

export interface PostProps {
	title: string;
	content: string;
	preview: boolean;
	name: string;
}

export type Posts = Post[];
