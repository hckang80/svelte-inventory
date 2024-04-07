import type { Meta, StoryObj } from '@storybook/svelte';
import Picture from './Picture.svelte';
// import logo from '$lib/images/svelte-welcome.png?w=400;800&format=avif;webp;png&as=picture&imagetools';
import logo from '$lib/images/svelte-welcome.png?1x=400&as-picture';

const meta = {
	title: 'Element/Picture',
	component: Picture,
	tags: ['autodocs'],
	argTypes: {
		meta: {
			description:
				'imagetools로 정의된 이미지를 전달합니다. 반드시 as=picture로 정의되어야 합니다.',
			table: {
				type: {
					summary: 'object'
				}
			}
		},
		media: {
			table: {
				disable: true
			}
		},
		sizes: {
			table: {
				disable: true
			}
		},
		width: {
			table: {
				disable: true
			}
		},
		height: {
			table: {
				disable: true
			}
		}
	}
} satisfies Meta<Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		meta: logo
	}
};
