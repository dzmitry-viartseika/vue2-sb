import InputTemplate from '../components/Elements/InputTemplate.vue';
import { action } from '@storybook/addon-actions'

export default {
    title: 'Inputs/InputTemplate',
    component: InputTemplate,
    argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args, { argTypes }) => ({
    components: { InputTemplate },
    props: Object.keys(argTypes),
    template: '<InputTemplate v-bind="$props" @changeValue="action" @inputFocusStatus="action2"/>',
    methods: {
        action: action('value-changed'),
        action2: action('input-focus-status')
    }
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    autofocus: true,
    labelText: 'Label Input',
    typeInput: 'text',
    placeholderText: 'Enter your text',
    value: '',
};
