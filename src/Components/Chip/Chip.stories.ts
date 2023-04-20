import Chip from './Chip.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Molecules/Chip",
    component: Chip,
    argTypes: {
        colorWay: { control: { type: 'select', options: ['primary', 'warning', 'info', 'error', 'black', 'white'] } },
        label: { control: { type: 'text' } },
    }
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => ({
    components: { Chip },
    setup() {
        return { args };
    },
    template: '<Chip v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = { label: 'Primary chip', colorWay: 'primary' };
export const Warning = Template.bind({});
Warning.args = { label: 'Warning chip', colorWay: 'warning' };
export const Info = Template.bind({});
Info.args = { label: 'Info chip', colorWay: 'info' };
export const Error = Template.bind({});
Error.args = { label: 'Error chip', colorWay: 'error' };
export const White = Template.bind({});
White.args = { label: 'White chip', colorWay: 'white' };
export const Black = Template.bind({});
Black.args = { label: 'Black chip', colorWay: 'black' };
