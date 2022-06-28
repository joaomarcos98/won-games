import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'
import { FormLink, FormWrapper } from 'components/Form'

describe('<Form />', () => {
    it('should render the heading', () => {
        const { container } = renderWithTheme(
            <FormWrapper>
                <FormLink>
                    My <a href="#">link</a>
                </FormLink>
            </FormWrapper>
        )

        expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
        expect(screen.getByText(/my/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              font-size: 1.4rem;
              color: #030517;
              text-align: center;
            }

            .c0 a {
              color: #3CD3C1;
              text-underline-offset: 0.4rem;
              -webkit-transition: border,color 0.1s ease-in-out;
              transition: border,color 0.1s ease-in-out;
            }

            .c0 a:hover {
              color: #29b3a3;
              border-color: #29b3a3;
            }

            <div
              class=""
            >
              <div
                class="c0"
              >
                My 
                <a
                  href="#"
                >
                  link
                </a>
              </div>
            </div>
        `)
    })
})
