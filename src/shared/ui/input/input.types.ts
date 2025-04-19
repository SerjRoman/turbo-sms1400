import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps{
    label: string,
    placeholder: string,
    iconLeft?: string,
    iconRight?: string,
    value?: string
}