import List from './List.vue';
import Listitem from "../Listitem/Listitem.vue";
import {Meta, StoryFn} from '@storybook/vue3';

export default {
    title: "Unfinished/List",
    component: List,
    argTypes: {}
} as Meta<typeof List>;

const Template: StoryFn<typeof List> = (args) => ({
    components: { List },
    setup() {
        return { args };
    },
    template: `<List>
        <Listitem>List item 1</Listitem>
		<Listitem>List item 2</Listitem>
    </List>`
});

export const Base = Template.bind({});
// Base.args = { };
