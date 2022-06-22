import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
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

const Button = ({
    children,
    minimal = false,
    size = 'medium',
    fullWidth = false,
    icon,
    ...props
}: ButtonProps) => (
    <S.Wrapper size={size} fullWidth={fullWidth} withIcon={!!icon} minimal={minimal} {...props}>
        {' '}
        {icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button
