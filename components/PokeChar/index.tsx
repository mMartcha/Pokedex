import { Text, View } from "react-native";
import { styles } from "@/components/PokeChar/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";


type PokeCharProps = {
    charText: string
    icone: keyof typeof MaterialCommunityIcons.glyphMap
    size: number
}


export default function PokeChar({charText, icone, size}: PokeCharProps){

    return(

        <View style={styles.pokeCharCard}>
            <MaterialCommunityIcons name={icone} size={size} color="grey" />
            <Text style={styles.charText}>{charText}</Text>
        </View>




    )
}