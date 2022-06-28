import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
    it('should render the form', () => {
        const { container } = renderWithTheme(<FormSignUp />)

        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()

        expect(screen.getByRole('button', { name: /sign up now/i })).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the button', () => {
        renderWithTheme(<FormSignUp />)

        expect(screen.getByRole('button', { name: /sign up now/i })).toBeInTheDocument()
    })

    it('should render the link and text', () => {
        renderWithTheme(<FormSignUp />)

        expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
        expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
    })
})
