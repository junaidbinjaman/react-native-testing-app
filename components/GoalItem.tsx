import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface GoalInputProps {
    itemData: {
        text: string;
        id: number | string;
    };
    onDeleteItem: (id: string | number) => void;
}

const GoalItem = ({itemData, onDeleteItem}: GoalInputProps) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#dddddd'}}
                style={({pressed}) => pressed && styles.pressedItem}
                onPress={onDeleteItem.bind(this, itemData.id)}
            >
                <Text style={styles.goalText}>{itemData.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});
