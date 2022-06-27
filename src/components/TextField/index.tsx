import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
    onInput?(value: string): void
    icon?: ReactNode
    label?: string
    labelFor?: string
    disabled?: boolean
    initialValue?: string
    error?: string
    iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    icon,
    label,
    labelFor = '',
    initialValue = '',
    disabled = false,
    onInput,
    error,
    iconPosition = 'left',
    ...rest
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value
        setValue(newValue)

        !!onInput && onInput(newValue)
    }

    return (
        <S.Wrapper disabled={disabled} error={!!error} >
            {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
            <S.InputWrapper>
                {!!icon && <S.Icon iconPosition={iconPosition} >{icon}</S.Icon>}
                <S.Input
                    disabled={disabled}
                    type="text"
                    onChange={onChange}
                    value={value}
                    {...rest}
                    iconPosition={iconPosition}
                />
            </S.InputWrapper>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    )
}

export default TextField
