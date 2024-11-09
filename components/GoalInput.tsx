import {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

interface GoalInputHandler {
    onAddGoal: (enteredGoalText: string) => void;
    visible: boolean,
    onCancel: () => void
}

const GoalInput = ({onAddGoal, visible, onCancel}: GoalInputHandler) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Load' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
