import Chip from './Chip.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Chip",
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

export const Base = Template.bind({});
Base.args = { label: 'Chip', colorWay: 'primary' };
