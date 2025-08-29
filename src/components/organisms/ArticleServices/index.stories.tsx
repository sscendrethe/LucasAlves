import type { Meta, StoryObj } from "@storybook/react";
import ArticleServices from "./index";
import type { ArticleServicesProps } from "./index";

const meta: Meta<typeof ArticleServices> = {
  title: "Organisms/ArticleServices",
  component: ArticleServices,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ArticleServices>;

export const Default: Story = {
  args: {
    text:
      "Conheça as soluções que oferecemos para impulsionar sua marca no digital.",
      
    cardData: [
      {
        iconName: "heartShare",
        link: "/sobre-mim",
        title: "Gestão e Social Media",
        titleColor: "white",
        label: "Saiba mais",
        secondaryColor: "white",
        backgroundColor: "vividorange",
        iconColor: "white",
      },
      {
        iconName: "cameraHeart",
        link: "/parcerias",
        title: "Fotografia e Videomaker",
        titleColor: "vividorange",
        label: "Saiba mais",
        border: "#ff6a00ff",
        secondaryColor: "#ff6a00ff",
        backgroundColor: "white",
        iconColor: "white",
        iconBackgroundColor: "white",
      },
      {
        iconName: "deviceDesktopHeart",
        link: "/parcerias",
        title: "Criação de WebSites",
        titleColor: "white",
        label: "Saiba mais",
        secondaryColor: "white",
        backgroundColor: "vividorange",
        iconColor: "white",
      },
    ],
  } satisfies ArticleServicesProps,
};
