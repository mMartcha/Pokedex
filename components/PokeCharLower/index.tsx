
import {styles} from '@/components/PokeCharLower/styles'
import { Text, View } from 'react-native'

type PokeCharLowerProps = {
    pokeStats: string
    pokeStats2: string
}


export default function PokeCharLower({pokeStats, pokeStats2}: PokeCharLowerProps){
    return(

        <View style={styles.pokeCharLowerCard}>
            <Text style={styles.pokeStats}>{pokeStats}</Text>
            <Text style={styles.pokeStats2}>{pokeStats2}</Text>
        </View>
    )
}