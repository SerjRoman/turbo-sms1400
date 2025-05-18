import {View, Text} from 'react-native'
import {styles} from './header.styles'
import { IHeaderProps } from './header.types'

export function Header(props: IHeaderProps){
    const {title, headerLeft, headerRight, headerBottom} = props
    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleBlock}>
                {headerLeft && <View style={styles.headerLeft}>{headerLeft}</View>}
                {title && <Text style={styles.title}>{title}</Text>}
                {headerRight && <View style={styles.headerRight}>{headerRight}</View>}
            </View>
            {headerBottom && <View style={styles.headerBottom}>{headerBottom}</View>}
        </View>
    )
}