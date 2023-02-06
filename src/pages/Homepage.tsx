import React, {useContext} from 'react';
import {Text, View, TextInput, Button, ScrollView} from 'react-native';
import {TodoContext} from '../contexts/TodoContext';
import {styles} from '../styles/Todo.component.styles';
export interface IToDo {
  text: string;
  completed: boolean;
}

export const Homepage = () => {
  const {value, setValue, error, setError, toDoList, setTodoList} =
    useContext(TodoContext);
  //Functoins
  const onChangeText = (e: any): void => {
    setValue!(e);
    setError!(false);
  };
  const handleSubmit = (): void => {
    if (value.trim()) {
      setTodoList!([...toDoList, {text: value, completed: false}]);
    } else setError!(true);
    setValue!('');
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setTodoList!(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setTodoList!(newToDoList);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create a Task </Text>
        <Text style={styles.subtitle1}>Enter the Task You Want To Create</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your todo task..."
            value={value}
            onChangeText={e => onChangeText(e)}
            style={styles.inputBox}
          />
          {error && <Text style={styles.error}> Input field is empty...</Text>}
          <Button title="Add Task" onPress={handleSubmit} />
        </View>

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

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//     height: theme.dimensions.windowHeight,
//   },
//   inputContainer: {
//     width: '100%',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   inputBox: {
//     width: '100%',
//     borderColor: theme.colors.primary,
//     borderRadius: 8,
//     borderWidth: StyleSheet.hairlineWidth,
//     padding: 8,
//     marginBottom: 10,
//   },
//   title: {
//     marginTop: 80,
//     fontSize: 30,
//     marginBottom: 5,
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
//   subtitle1: {
//     fontSize: 14,
//     marginBottom: 20,
//     color: theme.colors.secondary,
//   },
//   subtitle: {
//     fontSize: 20,
//     marginBottom: 20,
//     color: theme.colors.primary,
//   },
//   listItem: {
//     borderWidth: StyleSheet.hairlineWidth,
//     borderRadius: 3,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 10,
//     backgroundColor: theme.colors.themer,
//   },
//   addButton: {
//     alignItems: 'flex-end',
//   },
//   task: {
//     marginLeft: 5,
//     width: 200,
//   },
//   error: {
//     color: theme.colors.error,
//   },
// });
