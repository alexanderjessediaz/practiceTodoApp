import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Plus from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/AntDesign';




const TodoInput = () => {

const [text, onChangeText] = useState('')

const [todos, setTodos] = useState([])

const handleSubmit = (text) => {
   todos.push({todo: text, completed : false})
   onChangeText('')
}



//join here: https://meet.google.com/duu-xfso-pbq


const toggleSwitch = (index) => {
  const [isCompleted, setIsCompleted] = useState(false)
  setIsCompleted(!todos[index].completed)
  return isCompleted
}

const displayTodos = todos.map((todo, index) => {
  console.log(todos[index].completed)
    return (
      <View key={index}>
        <Text >{todo.todo}</Text> 
        <Switch 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={todo.completed ? "#f5dd4b" : "#f4f3f4"}
          value={todo.completed}
          onValueChange={() => toggleSwitch(index)}
        />
      </View>
    )
  })


  return (
  <View>
    <TextInput 
      style={styles.toDoLayout}
      value={text}
      onChangeText={onChangeText}
      />
    <Pressable onPress={() => handleSubmit(text)} >
      <Text>Add Todo</Text>
    </Pressable>
    <View>{displayTodos}</View>
  </View>
  
  )}

const CompletedTodo = () => (
  <View>
    <Text>Completed Todo</Text>
  </View>
)


const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="TodoInput" component={TodoInput} 
    options={{
      tabBarIcon: ({ focused, color, size }) => (
          <Text style={{ marginTop: 6 }}> 
              <Plus name={'pluscircle'} size={30} color={color} />
          </Text>
      )
  }} 
    />
    <Tab.Screen name="CompletedTodos" component={CompletedTodo}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
          <Text style={{ marginTop: 6 }}> 
              <Check name={'checkcircle'} size={30} color={color} />
          </Text>
      )
  }} 
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
      <StatusBar style="auto" />   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toDoLayout: { 
    borderStyle: 'solid',
    borderRadius: 6,
    borderWidth: 4,
  }
});
