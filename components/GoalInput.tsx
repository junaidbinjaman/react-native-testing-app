import {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface GoalInputHandler {
    onAddGoal: (enteredGoalText: string) => void;
}

const GoalInput = ({onAddGoal}: GoalInputHandler) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course goal'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Load' onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
