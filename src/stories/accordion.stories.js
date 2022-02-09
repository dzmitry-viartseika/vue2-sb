import Accordion from '../components/Elements/Accordion';
import { Default } from "./modal-template.stories";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Elements/Accordion',
    component: Accordion,
};

const Template = (args, { argTypes }) => ({
    components: { Accordion },
    props: Object.keys(argTypes),
    template: '<Accordion v-bind="$props"/>',
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    items: [
        {
            id: 1,
            title: 'Title1',
            content: 'Content1'
        },
        {
            id: 2,
            title: 'Title2',
            content: 'Content2'
        },
        {
            id: 3,
            title: 'Title3',
            content: 'Content3'
        },
    ]
};
