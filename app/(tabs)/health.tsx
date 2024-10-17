import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>我的健康 (My Health)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HealthScreen;
