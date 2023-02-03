import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {theme} from '../core/Theme';
interface IToDo {
  text: string;
  completed: boolean;
}

export const Homepage = () => {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);
  //Functoins
  const handleSubmit = (): void => {
    if (value.trim()) {
      setToDos([...toDoList, {text: value, completed: false}]);
    } else {
      showError(true);
      setValue('');
    }
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create a Task </Text>
        <Text style={styles.subtitle1}>Enter the Task You Want To Create</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your todo task..."
            value={value}
            onChangeText={e => {
              setValue(e);
              showError(false);
            }}
            style={styles.inputBox}
          />
          <Button title="Add Task" onPress={handleSubmit} />
        </View>
        {error && (
          <Text style={styles.error}>Error: Input field is empty...</Text>
        )}
        <Text style={styles.subtitle}>Your Tasks :</Text>
        {toDoList.length === 0 && <Text>No to do task available</Text>}
        {toDoList.map((toDo: IToDo, index: number) => (
          <View style={styles.listItem} key={`${index}_${toDo.text}`}>
            <Text
              style={[
                styles.task,
                // eslint-disable-next-line react-native/no-inline-styles
                {textDecorationLine: toDo.completed ? 'line-through' : 'none'},
              ]}>
              {toDo.text}
            </Text>
            <Button
              title={toDo.completed ? 'Completed' : 'Complete'}
              onPress={() => toggleComplete(index)}
            />
            <Button
              title="X"
              onPress={() => {
                removeItem(index);
              }}
              color="crimson"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: 'center',
    height: theme.dimensions.windowHeight,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    borderColor: 'purple',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  title: {
    marginTop: 80,
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'purple',
  },
  subtitle1: {
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'purple',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  addButton: {
    alignItems: 'flex-end',
  },
  task: {
    width: 200,
  },
  error: {
    color: 'red',
  },
});
