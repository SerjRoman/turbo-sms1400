import { Image, ImageProps } from "react-native"

export function BoyImage(props: ImageProps){
    return (
        <Image source={require('../../../../assets/boy.png')} {...props}/>
    )
}