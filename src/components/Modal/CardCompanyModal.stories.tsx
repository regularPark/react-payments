import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './CardCompanyModal';
import { ICON_SVG_PATH, COMPANY_LIST } from '../../constants';

const meta = {
  component: Modal,
  title: 'Section/Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {
    ImgSources: Object.values(ICON_SVG_PATH) as string[],
    companyNames: COMPANY_LIST,
  },
};
