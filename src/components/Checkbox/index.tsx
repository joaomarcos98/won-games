import * as S from './styles'

export type CheckboxProps = {
    label?: string
    labelFor?: string
    color?: 'white' | 'black'
}

const Checkbox = ({ label, labelFor = '', color = 'white' }: CheckboxProps) => (
    <S.Wrapper>
        <S.Input id={labelFor} type='checkbox' />
        <S.Label color={color} htmlFor={labelFor}>{label}</S.Label>
    </S.Wrapper>
)

export default Checkbox
