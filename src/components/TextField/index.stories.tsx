import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
    title: 'TextField',
    component: TextField,
    args: {
        icon: <Email />,
        label: 'E-mail',
        labelFor: 'Email',
        id: 'Email',
        initialValue: '',
        placeholder: 'john.cage@gmail.com',
        error: ''
    },
    argTypes: {
        onInput: { action: 'changed' },
        icon: { type: 'symbol' }
    }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)
