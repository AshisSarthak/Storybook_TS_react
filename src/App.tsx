import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import GenBtn from "./Button/Button";
import { reducer } from "./redux/reducer";
import TaskList from "./Task_redux/TaskList";

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" }
];

let store = createStore(reducer, { tasks: defaultTasks });

const App = () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
);

export default App;
