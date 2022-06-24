import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
    onCheck?(status: boolean): void
    isChecked?: boolean
    label?: string
    labelFor?: string
    color?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
    label,
    labelFor = '',
    color = 'white',
    onCheck,
    isChecked = false,
    value,
    ...rest
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked)

    const onChange = () => {
        const status = !checked
        setChecked(status)
        if (onCheck) {
            onCheck(status)
        }
    }

    return (
        <S.Wrapper>
            <S.Input
                id={labelFor}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                value={value}
                {...rest}
            />
            {!!label && (
                <S.Label color={color} htmlFor={labelFor}>
                    {label}
                </S.Label>
            )}
        </S.Wrapper>
    )
}

export default Checkbox
