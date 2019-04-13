import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create ({
    display: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 20,
    },
    displayValue: {
        fontSize: 60,
        color: 'white'
    }

});

export default props => {
    return(
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={3}>{props.value}</Text>
    </View>);

}