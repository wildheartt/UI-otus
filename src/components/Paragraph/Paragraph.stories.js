import Paragraph from './Paragraph.jsx';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Small = {
  args: {
    size: 'small',
    children:
      'Это маленький параграф текста. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    children:
      'Это средний параграф текста. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Large = {
  args: {
    size: 'large',
    children:
      'Это большой параграф текста. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
};
