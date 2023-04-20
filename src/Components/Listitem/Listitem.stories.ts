import Listitem from './Listitem.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Unfinished/Listitem",
    component: Listitem,
    argTypes: {}
} as Meta<typeof Listitem>;

const Template: StoryFn<typeof Listitem> = (args) => ({
    components: { Listitem },
    setup() {
        return { args };
    },
    template: '<Listitem v-bind="args"><p>List item 1</p></Listitem>'
});

export const Base = Template.bind({});
// Base.args = { };
