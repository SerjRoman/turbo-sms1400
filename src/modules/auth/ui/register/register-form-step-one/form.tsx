import { Controller, useForm } from "react-hook-form"
import { IRegister } from "../../../types"
import { View } from "react-native"
import { Input } from "../../../../../shared/ui/input"
import { Button } from "../../../../../shared/ui/button"
import { UserIcon } from "../../../../../shared/ui/icons"
import { styles } from "./form.styles"
import { useLocalSearchParams, useRouter  } from "expo-router";

export function RegisterFormStepOne(){
    // Берез control и handleSubmit с useForm
    // Вместо register мы берем control потому-что register сделал больше для тегов html а не для компонентов
    // handleSubmit - Функция которая сработает при отправки формы
    const { control, handleSubmit } = useForm<IRegister>()

    const router = useRouter();

    // useLocalSearchParams - хук який витягує всі параметри, як динамічні так і query параметри
    const params = useLocalSearchParams<{username: string, email: string, password: string}>()

    // Функция которая будет что-то делать при отправке формы
    function onSubmit(data: IRegister){ // Из-за IRegister в будущем могут быть проблемы, посмотрим. 
        console.log(params)
        router.push("/register-form-step-two")
    }

    return(
        <View style={styles.container}>
            <View>
                <Controller 
                // Control - указывает каким хуком формы должен контроллироваться этот контроллер
                control={control} 
                // name='email' - это имя поля взятого из интерфейса(для useForm)
                name='email'
                rules={{
                    required:{
                        value:true,
                        message:"Email is required"
                }}}
                // Рендерим компонент инпута, также (контроллируем)управляем функцией OnChange и value
                // field - це об'єкт який дає змогу контролювати будь-яке поле 
                // fieldState - це об'єкт який має всі стани поля, якого контролює (наприклад помилка)
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            onChangeText={field.onChange}
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
                            onChangeText={field.onChange}
                            placeholder="SuperCoolUsername" 
                            label="Username" 
                            error={fieldState.error?.message}
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }/>

                <Controller 
                control={control} 
                name='password'
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
                            onChangeText={field.onChange}
                            placeholder="Password" 
                            label="Password" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }/>

            <Controller 
            control={control} 
            name='confirmPassword'
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
                        onChangeText={field.onChange}
                        placeholder="Re-type Password" 
                        label="Re-type Password" 
                        error={fieldState.error?.message}
                        />
                    )
                }
            }/>
            </View>

            <View style={styles.buttonForm}>
                <Button onPress={handleSubmit(onSubmit)} label="Continue..."/>
            </View>

        </View>
    )
}