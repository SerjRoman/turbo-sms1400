import { Image, ImageProps } from "react-native"

export function SerjImage(props: ImageProps){
    return (
        <Image source={require('../../../../assets/sereja.jpg')} {...props}/>
    )
}