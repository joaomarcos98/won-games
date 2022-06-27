import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Auth from '.'

describe('<Auth />', () => {
    it('should render all components and children', () => {
        renderWithTheme(
            <Auth title="auth title">
                <input type="text" />
            </Auth>
        )

        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: /is the best and most complete gaming platform/
            })
        ).toBeInTheDocument()
        expect(screen.getAllByLabelText(/Won Games/i)).toHaveLength(2)
        expect(
            screen.getByRole('heading', {
                name: /All your favorites games in one place/i
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /auth title/i })
        ).toBeInTheDocument()
    })
})
