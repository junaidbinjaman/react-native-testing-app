import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

type courseGoal = {
    text: string;
    id: string;
};

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [courseGoal, setCourseGoal] = useState<courseGoal[]>([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addLoadHandler(enteredGoalText: string) {
        setCourseGoal((currentCourseGoal) => [
            ...currentCourseGoal,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id: number | string) {
        setCourseGoal((currentCourseGoal) => {
            return currentCourseGoal.filter((goal) => goal.id !== id);
        });
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button
                    title='Add New Goal'
                    color='#905ad8'
                    onPress={startAddGoalHandler}
                />
                {modalIsVisible && (
                    <GoalInput
                        onAddGoal={addLoadHandler}
                        visible={modalIsVisible}
                        onCancel={endAddGoalHandler}
                    />
                )}
                <View style={styles.goalsContainer}>
                    <FlatList
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        data={courseGoal}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    itemData={itemData.item}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
});
