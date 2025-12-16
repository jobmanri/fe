import { FeedCard } from "./FeedCard";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof FeedCard> = {
  component: FeedCard,
};

export default meta;
type Story = StoryObj<typeof FeedCard>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const likeButton = canvas.getByRole("button", { name: "좋아요" });

    const heartIcon = likeButton.querySelector("svg") as SVGSVGElement;
    await userEvent.click(heartIcon);

    const unlikeButton = canvas.getByRole("button", { name: "좋아요 취소" });
    await expect(unlikeButton).toBeInTheDocument();

    await userEvent.click(heartIcon);

    const likeButtonAgain = canvas.getByRole("button", { name: "좋아요" });
    await expect(likeButtonAgain).toBeInTheDocument();
  },
};
