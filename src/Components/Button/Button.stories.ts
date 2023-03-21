import Button from './Button.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Button",
    component: Button,
    argTypes: {
        colorWay: { control: { type: 'select', options: ['primary', 'warning', 'info', 'error', 'black', 'white'] } },
        size: { control: { type: 'select', options: ['small', 'medium', 'large']}},
        label: { control: { type: 'text' } },
    }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
    components: { Button },
    setup() {
        return { args };
    },
    template: '<Button v-bind="args" />'
});

export const Base = Template.bind({});
Base.args = { label: 'Button', size: 'medium', colorWay: 'primary' };
