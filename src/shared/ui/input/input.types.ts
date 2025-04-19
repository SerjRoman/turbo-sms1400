import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
    label?: string,
    placeholder?: string,
    rightIcon?: ReactNode,
    leftIcon?: ReactNode,
    error?: string,
    value?: string,
    errorIcon?: ReactNode,
}