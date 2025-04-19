// <Input placeholder="" label="" iconRight= iconLeft=  onChange= value=  style >
import { TextInput, View, Text, Image } from "react-native";
import { IInputProps } from "./input.types";
import React from "react";
import { styles } from "./input.styles";

// <input value={} onChange={()=> {}} />
export function Input(props: IInputProps){
    const { label, placeholder, iconLeft, iconRight, onChange } = props
    return (
        // View container
        // icon -> Image
        // ? : для иконок
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputField}>
                {iconLeft ? <Image style={styles.iconLeft} source={{uri: iconLeft}}/> : undefined}
                <TextInput placeholder={placeholder} onChange={onChange} />
                {iconRight ? <Image style={styles.iconRight} source={{uri: iconRight}}/> : undefined}
            </View>
        </View>
    )
}