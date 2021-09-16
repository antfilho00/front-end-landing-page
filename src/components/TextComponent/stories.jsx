import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Iusto mollitia dolorum voluptatem. Doloremque, minima molestiae?
      Et expedita, voluptas ipsam, totam molestiae, blanditiis ratione veniam sapiente
      earum laborum iste dicta ipsum.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
