import { GridText } from '.';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: {
    title: mock.title,
    description: mock.description,
    grid: mock.grid,
    background: mock.background,
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
