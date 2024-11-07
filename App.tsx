import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

type courseGoal = {
    text: string;
    id: string;
};

export default function App() {
    const [courseGoal, setCourseGoal] = useState<courseGoal[]>([]);

    function addLoadHandler(enteredGoalText: string) {
        setCourseGoal((currentCourseGoal) => [
            ...currentCourseGoal,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addLoadHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    data={courseGoal}
                    renderItem={(itemData) => {
                        return <GoalItem itemData={itemData.item} />;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
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
