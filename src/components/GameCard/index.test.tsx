import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'
import theme from '../../styles/theme'

import GameCard from '.'

const props = {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
}

describe('<GameCard />', () => {
    it('should render the heading', () => {
        renderWithTheme(<GameCard {...props} />)

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src', props.img
        )
        expect(screen.getByRole('heading', { name: props.title }))
            .toBeInTheDocument()
        expect(screen.getByRole('heading', { name: props.developer }))
            .toBeInTheDocument()
        expect(screen.getByText(props.price))
            .toBeInTheDocument()
    })

    it('should render price in label', () => {
        renderWithTheme(<GameCard {...props} />)

        const price = screen.getByText(props.price)

        expect(price).not.toHaveStyle({
            'text-decoration': 'line-through',
            color: theme.colors.gray
        })
        expect(price).toHaveStyle({
            backgroundColor: theme.colors.secondary
        })
    })

    it('should render a line-through in price when promotional', () => {
        renderWithTheme(<GameCard {...props} promotionalPrice='R$ 150,00' />)

        const price = screen.getByText(props.price)
        const promotionalPrice = screen.getByText('R$ 150,00')

        expect(price).toHaveStyle({
            'text-decoration': 'line-through',
            color: theme.colors.gray
        })
        expect(price).not.toHaveStyle({
            backgroundColor: theme.colors.secondary
        })
        expect(promotionalPrice).not.toHaveStyle({
            'text-decoration': 'line-through',
            color: theme.colors.gray
        })
        expect(promotionalPrice).toHaveStyle({
            backgroundColor: theme.colors.secondary
        })
    })
})
