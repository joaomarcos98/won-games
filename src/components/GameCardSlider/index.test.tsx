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

        expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
        expect(container.querySelectorAll('div.slick-active')).toHaveLength(4)
        expect(screen.getByRole('heading', { name: /Population Zero 1/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /Population Zero 4/i })).toBeInTheDocument()
        expect(screen.queryByRole('heading', { name: /Population Zero 5/i })).not.toBeInTheDocument()
    })
})
