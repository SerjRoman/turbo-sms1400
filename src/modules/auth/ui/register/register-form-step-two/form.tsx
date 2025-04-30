import { Controller, useForm } from "react-hook-form"
import { IRegister } from "../../../types"
import { View } from "react-native"
import { Input } from "../../../../../shared/ui/input"
import { Button } from "../../../../../shared/ui/button"
import { UserIcon } from "../../../../../shared/ui/icons"
import { styles } from "./form.styles"

export function RegisterFormStepTwo(){

    const { control, handleSubmit } = useForm<IRegister>()

    function onSubmit(data: IRegister){
        console.log(data)
    }

    return(
        <View style={styles.container}>
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
                            label="Name" 
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
                            label="Surname" 
                            error={fieldState.error?.message}/>
                        )
                    }
                }/>
            </View>

            <View style={styles.buttonForm}>
                <Button onPress={handleSubmit(onSubmit)} label="Register"/>
            </View>

        </View>
    )
}