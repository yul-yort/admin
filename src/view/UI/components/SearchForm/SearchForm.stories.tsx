import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchForm } from "./index";

export default {
  title: "components/SearchForm",
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args: any) => (
  <SearchForm {...args} />
);

export const SearchFormStory = Template.bind({});
SearchFormStory.args = {
  minified: false,
  origin: "Уфа",
  destination: "Нефтекамск",
};
