import BreadCrumbs from '../components/Elements/BreadCrumbs.vue';
import { linkTo } from '@storybook/addon-links'
import { action } from "@storybook/addon-actions";

export default {
    title: 'Elements/BreadCrumbs',
    component: BreadCrumbs,
    data() {
        return {
            myData: null,
        }
    },
    methods: {
        action: action('data-updated'),
        proceedTo(route) {
            console.log('route', route)
            this.myData = route;
            this.action(route);
        }
    }
};

const Template = (args, { argTypes }) => ({
    components: { BreadCrumbs },
    props: Object.keys(argTypes),
    template: '<BreadCrumbs v-bind="$props" />',
});

export const FirstStory = Template.bind({});
FirstStory.args = {
    items: [
        { name: 'Главная', route: '/' },
        { name: 'Второстепенная', route: '/about' },
    ]
};
