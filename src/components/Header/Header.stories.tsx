import type { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import Header from './Header';

/**
 * 페이지 헤더 컴포넌트
 */

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],

  decorators: [
    Story => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};