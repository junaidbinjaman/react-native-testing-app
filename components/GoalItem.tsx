import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface GoalInputProps {
    itemData: {
        text:string
    }
}

const GoalItem = ({itemData}: GoalInputProps) => {
    return (
        <View style={styles.goalItem}>
        <Text style={styles.goalText}>
            {itemData.text}
        </Text>
    </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
});