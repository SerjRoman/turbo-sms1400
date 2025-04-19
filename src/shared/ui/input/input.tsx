import { TextInput, Text, View, Image } from "react-native"
import { styles } from "./input.style"
import { IInputProps } from "./input.types"

export function Input(props: IInputProps) {
    const { label, leftIcon, error, placeholder, rightIcon, errorIcon } = props

    return (
        <View style={styles.inputContainer}>

            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.inputWrapper}>
                {leftIcon && (
                    <Image 
                        source={{ uri: leftIcon }} 
                        style={styles.leftIcon} 
                    />
                )}

                <TextInput
                    style={[
                        styles.input,
                        leftIcon && styles.inputWithLeftIcon,
                        rightIcon && styles.inputWithRightIcon,
                    ]}
                    placeholder={placeholder}
                    {...props}
                />

                {rightIcon && (
                    <Image 
                        source={{ uri: rightIcon }} 
                        style={styles.rightIcon} 
                    />
                )}
            </View>

            <View style={styles.inputWrapper}>

                {errorIcon && (
                    <Image 
                        source={{ uri: errorIcon }} 
                        style={styles.errorIcon} 
                    />
                )}

                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>

        </View>
    );
}