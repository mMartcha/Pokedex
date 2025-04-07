import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '@/components/PokeType/styles';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

type PokeTypeProps = {
    pokeTypeText: string;
    typeName: string;
    typeSize: number;
    typeColor: string;
};

const PokeType: React.FC<PokeTypeProps> = ({ pokeTypeText, typeName, typeSize, typeColor }) => {
    const iconExistsInMaterial = typeName in MaterialCommunityIcons.glyphMap;

    const renderIcon = () => {
        if (iconExistsInMaterial) {
            return <MaterialCommunityIcons name={typeName as keyof typeof MaterialCommunityIcons.glyphMap} size={typeSize} color={typeColor} style={styles.pokeTypeIcon} />;
        } else {
            return <FontAwesome6 name={typeName as keyof typeof FontAwesome6.glyphMap} size={typeSize} color={typeColor} style={styles.pokeTypeIcon} />;
        }
    }

    return (
        <View style={styles.pokeTypeCard}>
            {renderIcon()}
            <Text style={styles.pokeTypeText}>{pokeTypeText}</Text>
        </View>
    );
}

export default PokeType;
