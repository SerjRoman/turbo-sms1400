import { TextInput, Text, View, Image } from "react-native"
import { styles } from "./input.style"
import { IInputProps } from "./input.types"

export function Input(props: IInputProps) {
    const { label, leftIcon, error, rightIcon, errorIcon, style, ...otherProps } = props

    return (
        <View style={styles.inputContainer}>

            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.inputWrapper} >
                {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
                <TextInput
                    style={[
                        styles.input,
                        leftIcon ? styles.inputWithLeftIcon : undefined,
                        rightIcon ? styles.inputWithRightIcon : undefined,
                        style
                    ]}
                    {...otherProps}
                />
                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            </View>

            <View style={styles.inputWrapper}>

                {errorIcon && <View style={styles.errorIcon}>{errorIcon}</View>}

                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>

        </View>
    );
}
