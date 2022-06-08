import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

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

        expect(screen.getByRole('img')).toHaveAttribute(
            'src', props.img
        )
        expect(screen.getByRole('heading', { name: /population zero/i }))
            .toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /rockstar games/i }))
            .toBeInTheDocument()
        expect(screen.getByText('R$ 235,00'))
            .toBeInTheDocument()
    })
})
