import { FlatList, View } from "react-native"
import { useContacts } from "../../../contacts/hooks/use-contacts"
import { ContactsList } from "../../../contacts/ui"



export function CreateChat(){

    const {contacts, isLoading, error} = useContacts()

    return (
        <ContactsList></ContactsList>
    )
}