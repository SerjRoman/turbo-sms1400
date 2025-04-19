import { Controller, useForm } from "react-hook-form"
import { ILogin } from "../../types"
import { View } from "react-native"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { KeyIcon, UserIcon } from "../../../../shared/ui/icons"

export function LoginForm(){
    // Берез control и handleSubmit с useForm
    // Вместо register мы берем control потому-что register сделал больше для тегов html а не для компонентов
    // handleSubmit - Функция которая сработает при отправки формы
    const { control, handleSubmit } = useForm<ILogin>()

    // Функция которая будет что-то делать при отправке формы
    function onSubmit(data: ILogin){
        console.log(data)
    }

    return(
        <View>
            <View>
                <Controller 
                // Control - указывает каким хуком формы должен контроллироваться этот контроллер
                control={control} 
                // name='email' - это имя поля взятого из интерфейса(для useForm)
                name='email'
                // Рендерим компонент инпута, также (контроллируем)управляем функцией OnChange и value
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="email" 
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }>
                </Controller>
                <Controller control={control} name='password' render={
                    ({ field, fieldState })=>{
                        return(
                            <Input value={field.value} 
                            onChange={field.onChange} 
                            placeholder="password" 
                            label="password" 
                            leftIcon={<KeyIcon width={36} height={35}/>}/>
                        )
                    }
                }>
                </Controller>
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Submit"/>
            </View>
        </View>
    )
}