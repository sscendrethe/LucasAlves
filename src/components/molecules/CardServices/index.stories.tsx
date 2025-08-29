import type { Meta, StoryObj } from "@storybook/react";
import { CardServices, CardProps } from "./index";
import {
  backgroundColorArgTypes,
  disableTable,
} from "@/storybook-docs/argTypes";

const meta: Meta<typeof CardServices> = {
  title: "Molecules/CardServices",
  component: CardServices,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      options: ["vividorange", "white"],
    },
    link: { ...disableTable },
    // controle para escolher o ícone
    iconName: {
      control: { type: "select" },
      options: ["heartShare", "cameraHeart", "deviceDesktopHeart"],
    },
    // os stories abaixo já definem colors etc., então ocultamos na tabela se quiser
  },
};

export default meta;

type Story = StoryObj<typeof CardServices>;

export const Service1: Story = {
  args: {
    iconName: "heartShare",
    link: "/sobre-mim",
    title: "Gestão e Social Media",
    titleColor: "white",
    label: "Saiba mais",
    secondaryColor: "white",
    backgroundColor: "vividorange",
    iconColor: "white",
  } as CardProps,
};

export const Service2: Story = {
  args: {
    iconName: "cameraHeart",
    link: "/parcerias",
    title: "Fotografia e Videomaker",
    titleColor: "vividorange",
    label: "Saiba mais",
    border: "#ff6a00ff",
    secondaryColor: "#ff6a00ff",
    backgroundColor: "white",
    iconColor: "#ffffffff",
    iconBackgroundColor: "white",
  } as CardProps,
};

export const Service3: Story = {
  args: {
    iconName: "deviceDesktopHeart",
    link: "/parcerias",
    title: "Criação de WebSites",
    titleColor: "white",
    label: "Saiba mais",
    secondaryColor: "white",
    backgroundColor: "vividorange",
    iconColor: "white",
  } as CardProps,
};
