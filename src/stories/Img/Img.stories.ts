import type { Meta, StoryObj } from '@storybook/svelte';
import Img from './Img.svelte';
import logo from '$lib/images/svelte-logo.svg';
import { decoding, loading } from '$src/lib';

const meta = {
	title: 'Example/Img',
	component: Img,
	tags: ['autodocs'],
	argTypes: {
		alt: {
			table: {
				disable: true
			}
		},
		loading: {
			table: {
				disable: true,
				type: {
					summary: loading.join(' | ')
				}
			}
		},
		decoding: {
			table: {
				disable: true,
				type: {
					summary: decoding.join(' | ')
				}
			}
		}
	}
} satisfies Meta<Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: logo
	}
};
