import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'
import bannerMocks from 'components/BannerSlider/mock'
import highlightMocks from 'components/Highlight/mock'
import gamesMocks from 'components/GameCardSlider/mock'

import Home from '.'

const props = {
    banners: bannerMocks,
    newGames: [gamesMocks[0]],
    mostPopularHighlight: highlightMocks,
    mostPopularGames: [gamesMocks[0]],
    upcommingGames: [gamesMocks[0]],
    upcommingHighlight: highlightMocks,
    upcommingMoreGames: [gamesMocks[0]],
    freeGames: [gamesMocks[0]],
    freeGameHighlight: highlightMocks
}

describe('<Home />', () => {
    it('should render the menu and Footer', () => {
        renderWithTheme(<Home {...props} />)

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /contact/i })
        ).toBeInTheDocument()
        expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(
            2
        )
        expect(
            screen.getByRole('heading', { name: /news/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /most popular/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /upcomming/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /free games/i })
        ).toBeInTheDocument()
        expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
        expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
        expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3)
    })
})
