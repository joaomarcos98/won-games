import { screen } from '@testing-library/react'
import { Thenorthface } from 'styled-icons/simple-icons'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Checkbox from '.'

describe('<Checkbox />', () => {
    it('should render the heading', () => {
        renderWithTheme(<Checkbox labelFor='check' label="checkbox label" />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            'for',
            'check'
        )
    })

    it('should render without label', () => {
        renderWithTheme(<Checkbox />)

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
    })

    it('should render with black label', () => {
        renderWithTheme(<Checkbox label='checkbox' labelFor='check' color='black' />)

        expect(screen.getByText(/checkbox/i)).toHaveStyle({
            color: theme.colors.black
        })
    })

    it('should render with white label by default', () => {
        renderWithTheme(<Checkbox label='checkbox label' labelFor='check' />)

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: theme.colors.white
        })
    })
})
