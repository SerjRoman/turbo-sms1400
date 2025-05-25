import { Providers } from "./providers";
import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Providers>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerShown: false, // <HeaderComponent/>
                }}/>

                <Stack.Screen name="(auth)" options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="modals" options={{
                    headerShown: false,
                    presentation: "containedModal"
                }}/>
            </Stack>
        </Providers>
    )
}