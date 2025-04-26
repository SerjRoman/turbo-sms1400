import { Controller, useForm } from "react-hook-form"
import { View, Text } from "react-native"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { UserIcon } from "../../../../shared/ui/icons"
import { MailIcon } from "../../../../shared/ui/icons"
import { styles } from "./form.styles"
import { IRegister } from "../../types/register"
import { COLORS } from "../../../../shared/ui/colors"

export function RegisterForm(){
    const { control, handleSubmit } = useForm<IRegister>()

    function onSubmit(data: IRegister){
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <View>
                <Controller 
                control={control} 
                name='email'
                rules={{
                    required:{
                        value:true,
                        message:"Email is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="Email" 
                            error={fieldState.error?.message}
                            leftIcon={<MailIcon width={33} height={27}/>}/>
                        )
                    }
                }/>

                <Controller 
                control={control} 
                name='username'
                rules={{
                    required:{
                        value:true,
                        message:"Username is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="Username" 
                            label="Username" 
                            error={fieldState.error?.message}
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }/>

                <Controller control={control} name='password'
                rules={{
                    required:{
                        value:true,
                        message:"Password is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input.Password value={field.value} 
                            onChange={field.onChange} 
                            placeholder="Password" 
                            label="Password" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }/>

                <Controller control={control} name='confirmPassword'
                rules={{
                    required:{
                        value:true,
                        message:"Re-type password is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input.Password value={field.value} 
                            onChange={field.onChange} 
                            placeholder="Password" 
                            label="Re-type password" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }/>
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Continue..."/>
            </View>
            <View style={styles.bottomContainer}>
                <Text style = {styles.bottomText}>Already have an account?</Text>
                <Text style={[ styles.bottomText, styles.bottomLink]}>Login now</Text>
            </View>
        </View>
    )
}