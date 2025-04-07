import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

type BigIconProps = {
    typeName: string;
    typeSize: number;
    typeColor: string;
};

const BigIcon: React.FC<BigIconProps> = ({typeName, typeSize, typeColor }) => {
    const iconExistsInMaterial = typeName in MaterialCommunityIcons.glyphMap;

    const renderIcon = () => {
        if (iconExistsInMaterial) {
            return <MaterialCommunityIcons name={typeName as keyof typeof MaterialCommunityIcons.glyphMap} size={typeSize} color={typeColor}/>;
        } else {
            return <FontAwesome6 name={typeName as keyof typeof FontAwesome6.glyphMap} size={typeSize} color={typeColor}/>;
        }
    }

    return (
        <View style={styles.bigIcon}>
            {renderIcon()}
        </View>
   
    );
}

export default BigIcon;
