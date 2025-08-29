import type { Meta, StoryObj } from "@storybook/react";
import CardServicesWrapper, {
  CardServicesWrapperProps,
} from "./index";
import { disableTable } from "@/storybook-docs/argTypes";

const meta: Meta<typeof CardServicesWrapper> = {
  title: "Organisms/CardServicesWrapper",
  component: CardServicesWrapper,
  parameters: { layout: "centered" },
  argTypes: {
    // escondemos o array no painel (você pode habilitar um control de JSON se quiser)
    cardData: { ...disableTable },
  },
  args: {
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
        link: "/presentation",
        title: "Fotografia e Videomaker",
        titleColor: "vividorange",
        label: "Saiba mais",
        border: "white",
        secondaryColor: "white",
        backgroundColor: "white",
        iconColor: "#ffffffff",
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
  } satisfies CardServicesWrapperProps,
};

export default meta;

type Story = StoryObj<typeof CardServicesWrapper>;

export const Default: Story = {
  render: (args) => <CardServicesWrapper {...args} />,
};
