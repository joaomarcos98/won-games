import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: 'symbol'
        }
    }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
    children: 'Buy now',
    size: 'medium',
    fullWidth: false
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
    children: 'Buy now',
    size: 'small',
    fullWidth: false,
    icon: <AddShoppingCart />
}

export const AsLink: Story = (args) => <Button {...args} />

AsLink.args = {
    children: 'Buy now',
    size: 'small',
    fullWidth: false,
    as: 'a',
    href: '/link'
}
