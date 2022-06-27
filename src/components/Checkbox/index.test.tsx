import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Checkbox from '.'

describe('<Checkbox />', () => {
    it('should render the heading', () => {
        renderWithTheme(<Checkbox labelFor="check" label="checkbox label" />)

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
        renderWithTheme(
            <Checkbox label="checkbox" labelFor="check" color="black" />
        )

        expect(screen.getByText(/checkbox/i)).toHaveStyle({
            color: theme.colors.black
        })
    })

    it('should render with white label by default', () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: theme.colors.white
        })
    })

    it('should dispatch onCheck when status changes', () => {
        const onCheck = jest.fn()
        renderWithTheme(<Checkbox label="checkbox label" onCheck={onCheck} />)

        fireEvent.click(screen.getByRole('checkbox'))

        expect(onCheck).toBeCalledTimes(1)
        expect(onCheck).toBeCalledWith(true)
    })

    it('should dispatch onCheck when status changes with isChecked', () => {
        const onCheck = jest.fn()
        renderWithTheme(
            <Checkbox label="checkbox label" onCheck={onCheck} isChecked />
        )

        fireEvent.click(screen.getByRole('checkbox'))

        expect(onCheck).toBeCalledTimes(1)
        expect(onCheck).toBeCalledWith(false)
    })

    it('should be accessible with tab', () => {
        renderWithTheme(<Checkbox label="checkbox" labelFor="checkbox" />)

        expect(document.body).toHaveFocus()
        userEvent.tab()
        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
    })
})
