import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Highlight from '.'

const props = {
    title: "Heading 1",
    subtitle: "Heading 2",
    buttonLabel: "buy now",
    buttonLink: "/rdr2",
    backgroundImage: "/img/red-dead-img.jpg"
}

describe('<Highlight />', () => {
    it('should render the headings and buttons', () => {
        renderWithTheme(<Highlight {...props} />)

        expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()
        expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    })

    it('should render background image', () => {
        const { container } = renderWithTheme(<Highlight {...props} />)

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${props.backgroundImage})`
        })
    })

    it('should render background image', () => {
        renderWithTheme(<Highlight {...props} floatImage='/float-image.png' />)

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            '/float-image.png'
        )
    })
})