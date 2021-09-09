import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
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


console.log(todos)

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
