import { Text, TouchableOpacityProps } from "react-native"
import { ButtonContainer } from "./button.style"
interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}
const Button = ({ ...props }: ButtonProps) => {
    return (
        <ButtonContainer {...props} margin={props.margin}>
            <Text>{props.title}</Text>
        </ButtonContainer>
    )
}

export default Button