import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoadingScreen } from "./index";

export default {
  title: "components/LoadingScreen",
  component: LoadingScreen,
} as ComponentMeta<typeof LoadingScreen>;

const Template: ComponentStory<typeof LoadingScreen> = (args) => (
  <LoadingScreen {...args} />
);

export const LoadingScreenStory = Template.bind({});
LoadingScreenStory.args = {};
