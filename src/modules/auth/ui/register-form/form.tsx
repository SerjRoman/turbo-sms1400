import { Controller, useForm } from "react-hook-form";
import { IRegister } from "../../types";
import { View } from "react-native";
import { WelcomeBlock } from "../welcome-block";
import { Input } from "../../../../shared/ui/input";
import { MailIcon } from "../../../../shared/ui/icons/mail-icon";
import { UserIcon } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./form.style";



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
                        message:'email is requred'
                    }
                }}
                render={
                    ({field, fieldState})=>{
                        return(
                            <Input
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="email" 
                            error={fieldState.error?.message}
                            leftIcon={<MailIcon width={36} height={35}/>}/>
                        )
                    }
                }
                />

                <Controller        
                control={control}
                name='name'
                rules={{
                    required:{
                        value:true,
                        message:'name is requred'
                    }
                }}
                render={
                    ({field, fieldState})=>{
                        return(
                            <Input
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="name" 
                            error={fieldState.error?.message}
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }
                />

                <Controller        
                control={control}
                name='password'
                rules={{
                    required:{
                        value:true,
                        message:'password is requred'
                    }
                }}
                render={
                    ({field, fieldState})=>{
                        return(
                            <Input.Password
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="email" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }
                />

                <Controller        
                control={control}
                name='confirmPassword'
                rules={{
                    required:{
                        value:true,
                        message:'confirm password is requred'
                    }
                }}
                render={
                    ({field, fieldState})=>{
                        return(
                            <Input.Password
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="email" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }
                />
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Submit"/>
            </View>
        </View>
    )
}