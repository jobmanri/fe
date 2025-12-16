import { Badge } from "./Badge";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Badge> = {
  title: "design-system/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "뱃지입니다." },
};

export const Variants: Story = {
  args: { children: "variants" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge variant="primary">primary</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="danger">danger</Badge>
      <Badge variant="warning">warning</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: "size" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge size="large">Large</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="small">Small</Badge>
    </div>
  ),
};
