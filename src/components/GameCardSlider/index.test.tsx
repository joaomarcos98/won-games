import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import GameCardSlider from '.'

const items = [
    {
        title: 'Population Zero 1',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x140',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
    {
        title: 'Population Zero 2',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x141',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
    {
        title: 'Population Zero 3',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x142',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
    {
        title: 'Population Zero 4',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x143',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
    {
        title: 'Population Zero 5',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x144',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
]

describe('<GameCardSlider />', () => {
    it('should render with four active items', () => {
        const { container } = renderWithTheme(<GameCardSlider items={items} />)

        expect(container.querySelectorAll('div.slick-active')).toHaveLength(4)
    })

    it('should render white arrow if color passed ', () => {
        renderWithTheme(<GameCardSlider items={items} color='white' />)

        expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
            color: '#FAFAFA'
        })
        expect(screen.getByLabelText(/next games/i)).toHaveStyle({
            color: '#FAFAFA'
        })
    })
})
