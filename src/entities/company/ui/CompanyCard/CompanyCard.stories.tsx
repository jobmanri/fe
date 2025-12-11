import { CompanyCard } from "./CompanyCard";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof CompanyCard> = {
  component: CompanyCard,
};

export default meta;
type Story = StoryObj<typeof CompanyCard>;

export const Default: Story = {
  args: {
    company: {
      id: 1,
      nameKr: "토스",
      nameEn: "Toss",
    },
  },
};
