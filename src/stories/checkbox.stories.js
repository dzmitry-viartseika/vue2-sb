import Checkbox from '../components/Elements/Сheckbox';
import { Default } from "./modal-template.stories";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Elements/Checkbox',
    component: Checkbox,
    argTypes: { onChange: { action: 'input' } },
};

const Template = (args, { argTypes }) => ({
    components: { Checkbox },
    props: Object.keys(argTypes),
    template: '<Checkbox v-bind="$props" @changeCheckBox="action"/>',
    methods: {
        action: action('changed')
    },
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    name: 'test',
    checkboxText: 'Wertey',
    value: true,
};
