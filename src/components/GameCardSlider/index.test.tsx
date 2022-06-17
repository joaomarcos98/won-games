import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import GameCardSlider from '.'
import { items } from './mock'


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
