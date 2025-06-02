import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export const Level1 = {
  args: {
    level: 1,
    children: 'Заголовок первого уровня',
  },
};

export const Level2 = {
  args: {
    level: 2,
    children: 'Заголовок второго уровня',
  },
};

export const Level3 = {
  args: {
    level: 3,
    children: 'Заголовок третьего уровня',
  },
};

export const Level4 = {
  args: {
    level: 4,
    children: 'Заголовок четвертого уровня',
  },
};

export const Level5 = {
  args: {
    level: 5,
    children: 'Заголовок пятого уровня',
  },
};

export const Level6 = {
  args: {
    level: 6,
    children: 'Заголовок шестого уровня',
  },
};
