import { Menu } from '.';
import linsMocks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linsMocks,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
