import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
    title: 'Slider',
    component: Slider
} as Meta

const horizontalSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1
}

const Slide = styled.div`
    background-color: gray;
    width: 30rem;
    padding: 10rem 0;
    border: 0.1rem solid red;
    color: white;
    text-align: center;
`

export const Horizontal: Story = () => (
    <Slider settings={horizontalSettings}>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
    </Slider>
)

const verticalSettings: Settings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    slidesToShow: 1
}

export const Vertical: Story = () => (
    <Slider settings={verticalSettings}>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
        <Slide>1</Slide>
    </Slider>
)
