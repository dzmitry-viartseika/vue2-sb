import AppFile from '../components/Elements/AppFile.vue';
import { Default } from "./modal-template.stories";
import { action } from '@storybook/addon-actions'

const templateDecorator = () => ({
    template: `
<div style="padding: 20px"><story/></div>
	`,
});

export default {
    title: 'Uploading/AppFile',
    component: AppFile,
    argTypes: { handleClick: { action: 'handleClick' } },
    decorators: [templateDecorator]
};

const Template = (args, { argTypes }) => ({
    components: { AppFile },
    props: Object.keys(argTypes),
    template: '<AppFile v-bind="$props" :file="file" @handleClick="action" />',
    methods: {
        action: action('button-clicked')
    },
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    file: '',
    isVisibleButton: false,
};
