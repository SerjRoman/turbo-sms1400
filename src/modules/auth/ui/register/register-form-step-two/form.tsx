import { Controller, useForm } from "react-hook-form"
import { IRegister } from "../../../types"
import { View, Text } from "react-native"
import { Input } from "../../../../../shared/ui/input"
import { Button } from "../../../../../shared/ui/button"
import { UserIcon, LoupeIcon } from "../../../../../shared/ui/icons"
import { styles } from "./form.styles"
import { UploadImage } from "../../../../../shared/ui/images/";

export function RegisterFormStepTwo(){

    const { control, handleSubmit } = useForm<IRegister>()

    function onSubmit(data: IRegister){
        console.log(data)
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
                            placeholder="Your surname" 
                            error={fieldState.error?.message}/>
                        )
                    }
                }/>
            </View>
            
            <View style={styles.photoUpload}>
                <View style={styles.photoUploadObject}>
                    <UploadImage style={styles.uploadImage} />
                    <LoupeIcon style={styles.loupeIcon} />
                </View>
                <Text>Upload photo</Text>
            </View>

            <View style={styles.buttonForm}>
                <Button onPress={handleSubmit(onSubmit)} label="Register"/>
            </View>

        </View>
    )
}