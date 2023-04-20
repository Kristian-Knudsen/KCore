import Icon from './Icon.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Molecules/Icon",
    component: Icon,
    argTypes: {
        icon: { control: { type: 'select'}, options: ['home', 'back', 'bell', 'cart']},
        colorWay: { control: { type: 'select' }, options: ['primary', 'warning', 'info', 'error', 'black', 'white'] },
    }
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: '<Icon v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = { icon: 'Home', colorWay: 'primary' };
export const Warning = Template.bind({});
Warning.args = { icon: 'Home', colorWay: 'warning' };
export const Info = Template.bind({});
Info.args = { icon: 'Home', colorWay: 'info' };
export const Error = Template.bind({});
Error.args = { icon: 'Home', colorWay: 'error' };
export const White = Template.bind({});
White.args = { icon: 'Home', colorWay: 'white' };
export const Black = Template.bind({});
Black.args = { icon: 'Home', colorWay: 'black' };
