import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {
        children: {
            type: 'string'
        }
    },
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
    children: 'Most Popolars'
}
