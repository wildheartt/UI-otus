import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export const Default = {
  args: {
    src: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Sample+Image',
    alt: 'Пример изображения',
    width: 300,
    height: 200,
    rounded: false,
  },
};

export const Rounded = {
  args: {
    src: 'https://via.placeholder.com/300x200/7ED321/FFFFFF?text=Rounded+Image',
    alt: 'Скругленное изображение',
    width: 300,
    height: 200,
    rounded: true,
  },
};

export const Square = {
  args: {
    src: 'https://via.placeholder.com/200x200/F5A623/FFFFFF?text=Square',
    alt: 'Квадратное изображение',
    width: 200,
    height: 200,
    rounded: false,
  },
};

export const SmallRounded = {
  args: {
    src: 'https://via.placeholder.com/100x100/BD10E0/FFFFFF?text=Small',
    alt: 'Маленькое скругленное изображение',
    width: 100,
    height: 100,
    rounded: true,
  },
};
