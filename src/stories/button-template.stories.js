import ButtonTemplate from '../components/Elements/ButtonTemplate.vue';
import { action } from '@storybook/addon-actions'

export default {
    title: 'Buttons/ButtonTemplate',
    component: ButtonTemplate,
    argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args, { argTypes }) => ({
    components: { ButtonTemplate },
    props: Object.keys(argTypes),
    template: '<ButtonTemplate v-bind="$props" @handleClick="action" />',
    methods: {
        action: action('button-clicked')
    }
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: '', buttonText: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, buttonText: 'Secondary', icon: 'upload' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, buttonText: 'Tertiary'};
