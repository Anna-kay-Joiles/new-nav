import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import ToDoList from '../comp/ToDoForm';
import ToDoForm from '../comp/ToDoForm';
import MainLayout from '../layouts/MainLayout';
 
const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go To Gym',
    'Walk Dog',
  ]);
 
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  
 
  return (
<MainLayout>
<ToDoList tasks={tasks} />
<ToDoForm addTask={addTask} />
<Button title="Go to About" onPress={() => navigation.navigate('About')} />
</MainLayout>
  );
};
 
export default HomeScreen;