import { Controller, useForm } from "react-hook-form"
import { IRegister } from "../../../types"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Input } from "../../../../../shared/ui/input"
import { Button } from "../../../../../shared/ui/button"
import { UserIcon, LoupeIcon } from "../../../../../shared/ui/icons"
import { styles } from "./form.styles"
import { UploadImage } from "../../../../../shared/ui/images/";
import {launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker'
import { useState } from "react"

const defaultImage = require('../../../../../../assets/upload.png')

export function RegisterFormStepTwo(){

    const { control, handleSubmit } = useForm<IRegister>()
    const [image, setImage] = useState<string>("")
    
    function onSubmit(data: IRegister){
        console.log(data)
    }

    async function onSearch() {
        const result = await requestMediaLibraryPermissionsAsync()

        if (result.status === "granted") {
            const images = await launchImageLibraryAsync({
                mediaTypes: "images",
                allowsEditing: true,
                allowsMultipleSelection: false,
                selectionLimit: 1,
                base64: false,
            });

            if (images.assets) {
                setImage(images.assets[0].uri)
            }
        }
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.personalInfoText}>
                <Text style={{fontSize: 30}}><UserIcon width={36} height={35}/>Personal Info</Text>
            </View>
            
            <View>
                <Controller
                control={control}
                name='name'
                rules={{
                    required:{
                        value:true,
                        message:"Name error"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange}
                            onChangeText={field.onChange}
                            placeholder="Your name" 
                            error={fieldState.error?.message}/>
                        )
                    }
                }/>

                <Controller 
                control={control} 
                name='surname'
                rules={{
                    required:{
                        value:true,
                        message:"Surname error"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange}
                            onChangeText={field.onChange}
                            placeholder="Your surname" 
                            error={fieldState.error?.message}/>
                        )
                    }
                }/>
            </View>
            
            <TouchableOpacity onPress={onSearch}>
                <View style={styles.photoUpload}>
                    <View style={styles.photoUploadObject}>
                        <Image
                            source={image ? { uri: image } : defaultImage}
                            style={{ width: 100, height: 100, borderRadius: 25 }}
                            resizeMode="cover"
                        />
                        <LoupeIcon style={image ? {display: 'none'} : styles.loupeIcon} />
                    </View>
                    <Text style={image ? {display: 'none'} : {display: 'flex'}}>Upload photo</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttonForm}>
                <Button onPress={handleSubmit(onSubmit)} label="Register"/>
            </View>

        </View>
    )
}