import Button from './Button.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Molecules/Button",
    component: Button,
    argTypes: {
        colorWay: { control: { type: 'select' }, options: ['primary', 'warning', 'info', 'error', 'black', 'white'] },
        label: { control: { type: 'text' } },
        block: { control: { type: 'select' }, options: [true, false]}
    }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
    components: { Button },
    setup() {
        return { args };
    },
    template: '<Button v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = { label: 'Primary button', colorWay: 'primary' };
export const Warning = Template.bind({});
Warning.args = { label: 'Warning button', colorWay: 'warning' };
export const Info = Template.bind({});
Info.args = { label: 'Info button', colorWay: 'info' };
export const Error = Template.bind({});
Error.args = { label: 'Error button', colorWay: 'error' };
export const White = Template.bind({});
White.args = { label: 'White button', colorWay: 'white' };
export const Black = Template.bind({});
Black.args = { label: 'Black button', colorWay: 'black' };
