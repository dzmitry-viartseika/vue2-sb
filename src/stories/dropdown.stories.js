import Dropdown from '../components/Elements/Dropdown.vue';

export default {
    title: 'Elements/Dropdown',
    component: Dropdown,
};

const Template = (args, { argTypes }) => ({
    components: { Dropdown },
    props: Object.keys(argTypes),
    template: '<Dropdown v-bind="$props"/>',
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    dropdownOptions: {
        list: [
            {
                code: 'Ru',
                text: 'Russian',
            },
            {
                code: 'En',
                text: 'English',
            },
        ],
    }
};
