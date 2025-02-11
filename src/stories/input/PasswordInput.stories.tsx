import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../../components/Input/PasswordInput/PasswordInput';
import { GlobalStyle } from 'GlobalStyle';

const meta = {
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordInputStory: Story = {
  args: {
    onChangeFirst: () => {},
    onChangeSecond: () => {},
  },
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
};
