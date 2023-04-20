import Modal from './Modal.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Combines/Modal",
    component: Modal,
    argTypes: {
        title: { control: {type: 'string'}},
        shouldOpen: { control: {type: 'select'}, options: [true, false]},
    }
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        return { args };
    },
    template: '<Modal v-bind="args" />'
});

export const Base = Template.bind({});
Base.args = { title: 'Modal title'};
