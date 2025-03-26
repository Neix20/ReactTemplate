import React from "react";
import Index from "./index";

export default {
  title: "Components/LoadingModal",
  component: Index,
  argTypes: {
    loading: { control: "boolean" },
  },
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  loading: false,
};
