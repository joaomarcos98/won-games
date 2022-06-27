import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
    onCheck?(value: RadioValue): void
    label?: string
    labelColor?: 'white' | 'black'
    labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
    label,
    onCheck,
    labelColor = 'white',
    labelFor = '',
    value,
    ...rest
}: RadioProps) => {
    const onChange = () => {
        !!onCheck && onCheck(value!)
    }

    return (
        <S.Wrapper>
            <S.Input
                id={labelFor}
                type="radio"
                value={value}
                onChange={onChange}
                {...rest}
            />
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>
            )}
        </S.Wrapper>
    )
}

export default Radio
