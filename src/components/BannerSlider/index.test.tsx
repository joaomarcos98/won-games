import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import BannerSlider from '.'
import { items } from './mock'


describe('<BannerSlider />', () => {
    it('should render vertical slider', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />)

        expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
    })

    it('should render with one active item', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />)

        expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
        expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
        expect(screen.getByRole('heading', { name: /defy death 2/i, hidden: true })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /defy death 1/i, hidden: false })).toBeInTheDocument()
    })

    it('should render with the dots', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />)

        expect(container.querySelector('.slick-dots')).toBeInTheDocument()
    })
})
