import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { EmailIcon, UserIcon } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { styles } from './form.styles'
import { useRouter } from "expo-router";
import { IRegisterStepOne } from "../../types/reg";

export function RegisterFormStepOne(){

    const { control, handleSubmit } = useForm<IRegisterStepOne>()
    //хук useRouter возвращает обьект роутера, который используется для програмной навигации
    // у обьекта роутера есть следующие основные методы: 
    const router = useRouter();
    function onSubmit(data: IRegisterStepOne){
        // Из data берется confirmPassword И все что осталось кроме confirmPassword записывается в otherData
        const { confirmPassword, ...otherData } = data
        router.push({
            pathname: "/register/step-two",
            params: otherData,
        })
    }
    // /register-about?username=""&email=""&password=""
    // query - параметры которые пишутся после знака вопроса в ссылке /chat?username=Anton
    // route параметры - динамические параметры, определяют ссылку /:chat
    // [chat].tsx
    // /chat/dasfsdgfdgds/dsads/dsadas/dsadas
    // /chat?username=sadass&email=dsadsad&nam=dsadas
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