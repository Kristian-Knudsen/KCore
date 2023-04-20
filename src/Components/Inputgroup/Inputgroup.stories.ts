import Inputgroup from './Inputgroup.vue';
import Icon from '../Icon/Icon.vue';
import Chip from '../Chip/Chip.vue';
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    // title: "Combines/Inputgroup",
    title: "Unfinished/Inputgroup",
    component: Inputgroup,
    argTypes: {
        hasBorder: { control: { type: 'radio'}, options: [true, false] },
        borderColor: { control: { type: 'color'}},
    },
    subcomponents: { Icon, Chip },
} as Meta<typeof Inputgroup>;

const Empty: StoryFn<typeof Inputgroup> = (args : {}) => ({
    components: { Inputgroup },
    setup() {
        return { args };
    },
    template: '<Inputgroup v-bind="args" />'
});

export const WithIcon = (args: {}) => ({
    components: { Inputgroup, Icon },
    setup() {
        return { args };
    },
    template: '<Inputgroup v-bind="args"><Icon icon="home" /></Inputgroup>'
});

export const WithIconAndChip = (args: {}) => ({
    components: { Inputgroup, Icon, Chip },
    setup() {
        return { args };
    },
    template: '<Inputgroup v-bind="args"><Icon icon="home" /><Chip label="Some value" /></Inputgroup>'
});
