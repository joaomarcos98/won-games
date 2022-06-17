import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Home from '.'

describe('<Home />', () => {
    it('should render the menu and Footer', () => {
        renderWithTheme(<Home />)

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    })

    it('should render the sections', () => {
        renderWithTheme(<Home />)

        expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /most popular/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /free games/i })).toBeInTheDocument()
    })
})
