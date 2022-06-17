import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Highlight from '.'
import * as S from './styles'
import item  from './mock'



describe('<Highlight />', () => {
    it('should render the headings and buttons', () => {
        renderWithTheme(<Highlight {...item} />)

        expect(screen.getByRole('heading', { name: /heading 1/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /heading 2/i })).toBeInTheDocument()
        expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    })

    it('should render background image', () => {
        const { container } = renderWithTheme(<Highlight {...item} />)

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${item.backgroundImage})`
        })
    })

    it('should render background image', () => {
        renderWithTheme(<Highlight {...item} floatImage='/float-image.png' />)

        expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
            'src',
            '/float-image.png'
        )
    })

    it('should render align right by default', () => {
        const { container } = renderWithTheme(<Highlight {...item} />)

        expect(container.firstChild).toHaveStyleRule(
            'grid-template-areas',
            "'floatImage content'"
        )

        expect(container.firstChild).toHaveStyleRule(
            'text-align',
            "right", {
            modifier: `${S.Content}`
        })
    })

    it('should render align left', () => {
        const { container } = renderWithTheme(<Highlight {...item} alignment='left' />)

        expect(container.firstChild).toHaveStyleRule(
            'grid-template-areas',
            "'content floatImage'"
        )

        expect(container.firstChild).toHaveStyleRule(
            'text-align',
            "left", {
            modifier: `${S.Content}`
        })
    })
})
