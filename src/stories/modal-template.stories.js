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
        <ButtonTemplate name="キャンセル" className="black" :useDiv="true" @click="clickCancel" />
        <ButtonTemplate name="OK" className="primary right" :useDiv="true" @click="clickOk" />
      </template>
    </ModalTemplate>`,
    methods: {
        clickCancel: action('click Cancel Button'),
        clickOk: action('click Ok Button')
    },
});

export const Default = Template.bind({});
Default.args = {
    header: 'モーダルヘッダー',
    content: 'モーダルコンテンツ',
    showModal: true,
};
