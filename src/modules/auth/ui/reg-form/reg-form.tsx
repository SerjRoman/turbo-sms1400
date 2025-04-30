import { View, Text } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { IReg } from "../../types/reg";
import { UserIcon } from "../../../../shared/ui/icons";
import EmailIcon from "../../../../shared/ui/icons/email-icon";
import { Button } from "../../../../shared/ui/button";
import { styles } from "./reg-form.styles";
import React from "react";
import { Link, useRouter } from "expo-router";

export function RegPage(){

    const { control, handleSubmit } = useForm<IReg>()
    const router = useRouter();

    function onSubmit(data: IReg){
        router.push("/register-about")

    }

    return (
        <View>
            <View style={styles.container}>

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
                            onChangeText={field.onChange}
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
                            onChangeText={field.onChange}
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
                            onChangeText={field.onChange}
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
                            onChangeText={field.onChange}
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

            </View>
        </View>
    )
}