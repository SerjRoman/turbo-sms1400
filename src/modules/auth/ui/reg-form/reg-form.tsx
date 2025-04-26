import { View, Text } from "react-native";
import { WelcomeBlock } from "../welcome-block";
import { Input } from "../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { IReg } from "../../types/reg";
import { EyeIcon, KeyIcon, UserIcon } from "../../../../shared/ui/icons";
import React from "react";
import EmailIcon from "../../../../shared/ui/icons/email-icon";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./reg-form.styles";
import { COLORS } from "../../../../shared/ui/colors";

export function RegPage(){

    const { control, handleSubmit } = useForm<IReg>()

    function onSubmit(data: IReg){
        console.log(data)
    }

    return (
        <View>
            <View style={styles.container}>
                <WelcomeBlock/>
                <View>
                    <Controller
                    control={control}
                    name="email"
                    rules={{
                        required:{
                            value:true,
                            message:"Email is required"
                        }
                    }}
                    
                    render={({ field, fieldState})=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com"
                            label="Email"
                            error={fieldState.error?.message}
                            leftIcon={<EmailIcon width={36} height={35}/>}
                            />
                        )
                    }}/>

                    <Controller
                    control={control}
                    name="username"
                    rules={{
                        required:{
                            value:true,
                            message:"Username is required"
                        }
                    }}
                    
                    render={({ field, fieldState})=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolUsername"
                            label="Username"
                            error={fieldState.error?.message}
                            leftIcon={<UserIcon width={36} height={35}/>}
                            />
                        )
                    }}/>

                    <Controller
                    control={control}
                    name="password"
                    rules={{
                        required:{
                            value:true,
                            message:"Password is required"
                        },
                        minLength:{
                            value:6,
                            message:"Password must be at least 6 characters long"
                        },
                        maxLength:{
                            value:20,
                            message:"Password must be at most 20 characters long"
                        }
                    }}
                    
                    render={({ field, fieldState})=>{
                        return(
                            <Input.Password
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="Your password"
                            label="Password"
                            error={fieldState.error?.message}
                            />
                        )
                    }}/>

                    <Controller
                    control={control}
                    name="password"
                    rules={{
                        required:{
                            value:true,
                            message:"Password is required"
                        },
                        minLength:{
                            value:6,
                            message:"Password must be at least 6 characters long"
                        },
                        maxLength:{
                            value:20,
                            message:"Password must be at most 20 characters long"
                        }
                    }}
                    
                    render={({ field, fieldState})=>{
                        return(
                            <Input.Password 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="Your password"
                            label="Re-type password"
                            error={fieldState.error?.message}
                            />
                        )
                    }}/>
                </View>
                <View>
                    <Button onPress={handleSubmit(onSubmit)} label="Continue..." />
                </View>
                <View style={{flexDirection:"row", gap:5, marginTop:30}}>
                    <Text>Already have an account?</Text>
                    <Text style={{color:COLORS.brownPrimary}}>Login now</Text>
                </View>
            </View>
        </View>
    )
}