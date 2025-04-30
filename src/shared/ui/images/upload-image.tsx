import { Image, ImageProps } from "react-native"

export function UploadImage(props: ImageProps){
    return (
        <Image source={require('../../../../assets/upload.png')} {...props}/>
    )
}