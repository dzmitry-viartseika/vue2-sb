import Radio from '../components/Elements/Radio.vue';
import { Default } from "./modal-template.stories";
import { action } from '@storybook/addon-actions'

export default {
    title: 'Elements/Radio',
    component: Radio,
    argTypes: { onChange: { action: 'input' } },
};

const Template = (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    template: '<Radio v-bind="$props" @onChange="action"/>',
    methods: {
        action: action('button-clicked')
    },
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    label: 'Wertey',
    checked: true,
};
