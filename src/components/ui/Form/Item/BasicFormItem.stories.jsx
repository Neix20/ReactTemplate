import React from "react";
import Index from "./BasicFormItem";

import { SampleData } from "@config"; 

export default {
  title: "Components/Basic Form Item",
  component: Index,
  argTypes: {
    type: {
      control: "select",
      options: [
        "text", "email", "color", "password", "textarea", "int",
        "decimal", "date", "dropdown", "file", "image", "switch"
      ]
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    rows: { control: "number" },
    required: { control: "boolean" },
    readOnly: { control: "boolean" },
    selection: { control: "array" },
  },
};

const Template = (args) => <Index {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  type: "text",
  label: "Text Input",
  placeholder: "Enter text...",
};

export const EmailField = Template.bind({});
EmailField.args = {
  type: "email",
  label: "Email Input",
  placeholder: "Enter email...",
};

export const ColorPicker = Template.bind({});
ColorPicker.args = {
  type: "color",
  label: "Pick a color",
  value: "#ff6b00",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  type: "password",
  label: "Password",
  placeholder: "Enter password...",
};

export const TextArea = Template.bind({});
TextArea.args = {
  type: "textarea",
  label: "Message",
  placeholder: "Enter message...",
  rows: 3,
};

export const NumberField = Template.bind({});
NumberField.args = {
  type: "int",
  label: "Number",
  placeholder: "Enter number...",
};

export const DecimalField = Template.bind({});
DecimalField.args = {
  type: "decimal",
  label: "Decimal Number",
  placeholder: "Enter decimal value...",
};

export const DateField = Template.bind({});
DateField.args = {
  type: "date",
  label: "Select Date",
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  type: "dropdown",
  label: "Select an option",
  selection: SampleData.Platform,
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  type: "file",
  label: "Upload File",
};

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  type: "image",
  label: "Upload Image",
};

export const ToggleSwitch = Template.bind({});
ToggleSwitch.args = {
  type: "switch",
  label: "Enable Feature",
};
