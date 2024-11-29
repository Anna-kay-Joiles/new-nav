import React, { useState } from "react";

import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

const ToDoList = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleComplete = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      if (prevCompletedTasks.includes(index)) {
        return prevCompletedTasks.filter((taskIndex) => taskIndex !== index);
      } else {
        return [...prevCompletedTasks, index];
      }
    });
  };

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleComplete(index)}>
          <View
            style={[
              styles.task,

              completedTasks.includes(index) && styles.completed,
            ]}
          >
            <Text
              style={[
                styles.taskText,

                completedTasks.includes(index) && styles.completedText,
              ]}
            >
              {task}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,

    borderBottomWidth: 1,

    borderColor: "#ccc",
  },

  completed: {
    backgroundColor: "#e0e0e0",
  },

  completedText: {
    textDecorationLine: "line-through",

    color: "#888",
  },

  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
