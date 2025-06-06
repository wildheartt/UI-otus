import Collapsible from './Collapsible.jsx';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
  },
};

export const Closed = {
  args: {
    title: 'Нажмите чтобы раскрыть',
    defaultOpen: false,
    children:
      'Это содержимое схлопывающегося блока. Здесь может быть любой контент - текст, изображения, другие компоненты.',
  },
};

export const Open = {
  args: {
    title: 'Раскрытый блок',
    defaultOpen: true,
    children:
      'Этот блок открыт по умолчанию. В нем может быть множество различного контента.',
  },
};

export const WithLongContent = {
  args: {
    title: 'Блок с длинным содержимым',
    defaultOpen: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};
