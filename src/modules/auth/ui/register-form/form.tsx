import { Controller, useForm } from "react-hook-form"
import { IRegister } from "../../types/register";
import { View } from "react-native";
import React from "react";
import { UserIcon } from "../../../../shared/ui/icons";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./form.styles";

export function RegisterForm(){
    const {control, handleSubmit} = useForm<IRegister>();

    function onSubmit(data: IRegister){
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
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
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }/>

                <Controller 
                control={control} 
                name='username'
                rules={{
                    required: {
                        value:true,
                        message:"Username is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolUsername" 
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
                <Controller control={control} name='confirmation'
                rules={{
                    required:{
                        value:true,
                        message:"Confirm your password"
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
        </View>
    )
}