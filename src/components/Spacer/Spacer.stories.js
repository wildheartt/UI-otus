import Spacer from './Spacer.jsx';

export default {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showLine: {
      control: 'boolean',
    },
  },
};

export const Small = {
  args: {
    height: 'small',
    showLine: false,
  },
};

export const Medium = {
  args: {
    height: 'medium',
    showLine: false,
  },
};

export const Large = {
  args: {
    height: 'large',
    showLine: false,
  },
};

export const WithLine = {
  args: {
    height: 'medium',
    showLine: true,
  },
};
