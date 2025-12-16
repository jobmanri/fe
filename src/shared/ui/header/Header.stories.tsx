import { Header } from "./Header";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Header> = {
  title: "shared/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Desktop: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: {
      value: "iphone12",
      isRotated: false,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole("button", { name: "메뉴 열기" });

    await expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);

    const closeButton = canvas.getByRole("button", { name: "닫기" });

    await expect(closeButton).toBeVisible();

    await userEvent.click(closeButton);

    await expect(menuButton).toBeInTheDocument();
  },
};
