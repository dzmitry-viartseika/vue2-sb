import { action } from '@storybook/addon-actions';
import ButtonTemplate from '../components/Elements/ButtonTemplate';
import ModalTemplate from "../components/Modals/ModalTemplate";

export default {
    title: 'Modals',
    component: ModalTemplate,
    argTypes: {
        header: { control: 'header' },
        content: { control: 'content' },
        showModal: { control: 'boolean'},
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ModalTemplate, ButtonTemplate },
    template:
        `<ModalTemplate v-model="showModal">
      <template slot="header">
        {{ header }}
      </template>
      <template slot="content">
        {{ content }}
      </template>
      <template slot="footer">
        <ButtonTemplate
            v-bind="$props"
            @click="clickCancel"
            background=""
            buttonText="OK"
        />
        <ButtonTemplate
            v-bind="$props"
            @click="clickCancel"
            background=""
            buttonText="Cancel"
        />
      </template>
    </ModalTemplate>`,
    methods: {
        clickCancel: action('click Cancel Button'),
        clickOk: action('click Ok Button')
    },
});

// template: '<ButtonTemplate v-bind="$props" @handleClick="action" />',
//     methods: {
//     action: action('button-clicked')
// }

export const Default = Template.bind({});
Default.args = {
    header: 'Header text',
    content: 'Content text',
    showModal: true,
};
