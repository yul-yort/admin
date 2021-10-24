import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Order } from "./index";

export default {
  title: "components/Order",
  component: Order,
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = (args: any) => (
  <Order {...args} />
);

const ListTemplate: ComponentStory<typeof Order> = (args: any) => (
  <>
    <Order {...args} />
    <Order {...args} />
    <Order {...args} />
    <Order {...args} />
  </>
);

export const OrderStory = Template.bind({});
OrderStory.args = {
  agencyName: "Иремель",
  priceValue: "1200 ₽",
  phoneValues: ["+7 9999999999"],
};

export const OrdersListStory = ListTemplate.bind({});
OrdersListStory.args = {
  agencyName: "Иремель",
  priceValue: "1200 ₽",
  phoneValues: ["+7 9999999999", "+7 9899999999"],
};
