import Loader from '../components/Elements/Loader.vue';
import { Default } from "./modal-template.stories";

export default {
    title: 'Loaders/Loader',
    component: Loader,
};

const Template = (args, { argTypes }) => ({
    components: { Loader },
    props: Object.keys(argTypes),
    template: '<Loader v-bind="$props" />',
});

export const FirstStory = Template.bind({});
Default.args = {
    isLoader: false,
};
