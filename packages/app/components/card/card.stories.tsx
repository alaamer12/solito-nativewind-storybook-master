import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const CardStory: Story = {
  render: (props) => (
    <Card title={props.title}>
      {props.children}
    </Card>
  ),
  name: "Card",
  args: {
    children: "Hello",
    title: "Content",
  },
};