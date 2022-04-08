import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Form } from '../src/components/Form';

export default {
  title: 'Form',
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Form
    title="Default Styles"
    schema={{
      text: {
        type: 'text',
        label: 'Name',
        placeholder: 'Name',
        isRequired: true,
      },
      number: {
        type: 'number',
        label: 'Age',
        placeholder: 'Age',
      },
      select: {
        type: 'select',
        label: 'Gender',
        options: [
          {
            value: 'Male',
          },
          {
            value: 'Female',
          },
          {
            value: 'Rather not say',
          },
        ],
      },
      toggle: {
        type: 'switch',
        label: 'Some Toggle',
      },
      days: {
        type: 'checkbox',
        label: 'Days of the Week',
        checkboxes: [
          {
            name: 'Monday',
          },
          {
            name: 'Tuesday',
          },
          {
            name: 'Wednesday',
          },
          {
            name: 'Thursday',
          },
          {
            name: 'Friday',
          },
        ],
      },
      address: {
        type: 'object',
        label: 'Address',
        properties: {
          city: {
            type: 'text',
            placeholder: 'City',
          },
          country: {
            type: 'text',
            placeholder: 'Country',
          },
        },
      },
      favouriteThings: {
        type: 'array',
        label: 'Favourite Things',
        isCollapsable: true,
        itemField: {
          type: 'text',
          label: 'Thing',
          placeholder: 'Thing',
        },
      },
    }}
    handleSubmit={action('submit')}
  />
);

export const Default = Template.bind({});
