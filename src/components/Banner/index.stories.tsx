import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
    title: 'Banner',
    component: Banner
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
