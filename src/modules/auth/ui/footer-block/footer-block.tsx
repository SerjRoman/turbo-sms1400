import { View, Text } from "react-native";
import { Link } from 'expo-router';
import { FooterBlockProps } from "./footer-block.types";
import { styles } from "./footer-block.styles";

export function FooterBlock({text, linkHref, linkText}: FooterBlockProps){
    return(
        <View>
            <Text style={styles.footerText}>{text}{" "}
                <Link href={linkHref} style={styles.footerLink}>{linkText}</Link>
            </Text>
        </View>
    )
}