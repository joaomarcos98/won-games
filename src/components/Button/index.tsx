import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import * as S from './styles'

type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: ReactNode
    as?: React.ElementType
    minimal?: boolean
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
    children,
    minimal = false,
    size = 'medium',
    fullWidth = false,
    icon,
    ...props
}, ref) => (
    <S.Wrapper
        ref={ref}
        size={size}
        fullWidth={fullWidth}
        withIcon={!!icon}
        minimal={minimal}
        {...props}
    >
        {' '}
        {icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default forwardRef(Button)
