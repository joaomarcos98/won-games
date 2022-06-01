import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Footer from '.'

describe('<Footer />', () => {
    it('should render 4 columns topics', () => {
        const { container } = renderWithTheme(<Footer />)

        expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
  })
})
