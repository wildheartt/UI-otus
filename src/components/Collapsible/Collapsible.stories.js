import Collapsible from './Collapsible';
import Paragraph from '../Paragraph/Paragraph';

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
    children: (
      <Paragraph>
        Это содержимое схлопывающегося блока. Здесь может быть любой контент -
        текст, изображения, другие компоненты.
      </Paragraph>
    ),
  },
};

export const Open = {
  args: {
    title: 'Раскрытый блок',
    defaultOpen: true,
    children: (
      <div>
        <Paragraph>
          Этот блок открыт по умолчанию. В нем может быть множество различного
          контента.
        </Paragraph>
        <Paragraph size="small">
          Например, несколько параграфов с разными размерами текста.
        </Paragraph>
      </div>
    ),
  },
};

export const WithLongContent = {
  args: {
    title: 'Блок с длинным содержимым',
    defaultOpen: false,
    children: (
      <div>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Paragraph>
      </div>
    ),
  },
};
