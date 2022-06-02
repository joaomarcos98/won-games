import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Banner from '.'

describe('<Banner />', () => {
    it('should render the heading', () => {
        renderWithTheme(<Banner
            img='https://avatars.githubusercontent.com/u/72817686?v=4'
            title='any title'
            subtitle='any subtitle'
            buttonLabel='any label'
            buttonLink='any ref'
        />)

        expect(screen.getByRole('heading', { name: /any title/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /any subtitle/i })).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute("src",
            'https://avatars.githubusercontent.com/u/72817686?v=4'
        )

    })
})
