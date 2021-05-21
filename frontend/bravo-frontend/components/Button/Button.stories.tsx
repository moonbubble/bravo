// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import Button from './Button';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Bravo/Button',
    component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    /*👇 The args you need here will depend on your component */
    text: "You did it Fien!"
};