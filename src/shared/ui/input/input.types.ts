import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
    label?: string,
    placeholder?: string,
    rightIcon?: string,
    leftIcon?: string,
    error?: string,
    value?: string,
    errorIcon?: string,
    children?: React.ReactNode,
}