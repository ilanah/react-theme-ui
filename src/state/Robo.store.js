//wrapping the routes relevant to the robots state
import React, { useState, useEffect, createContext, useContext } from "react";
import * as robo_service from "../services/Robo.service";

const RoboStore = createContext();
const { Provider } = RoboStore;

const useRobots = () => {
  const context = useContext(RoboStore);
  if (!context) {
    throw new Error(`useRobots must be used within a RoboProvider`);
  }
  return context;
};

const RoboProvider = ({ children }) => {
  const [all_robots, set_all_robots] = useState([]);
  const [filtered_robots, set_filtered_robots] = useState([]);
  const [selected_robot, set_selected_robot] = useState({});
  const [loading_robots, set_loading_robots] = useState(true);
  const [error_message, set_error_message] = useState(null);

  const set_initial_data = data => {
    set_all_robots(data);
    set_filtered_robots(data);
    set_selected_robot(data[0]);
    set_loading_robots(false);
  };

  const get_reomte_data = async () => {
    try {
      const remoteData = await robo_service.get_all_robots();
      set_initial_data(remoteData);
      localStorage.setItem("RoboStore", JSON.stringify(remoteData));
    } catch (err) {
      set_error_message(err.message);
    }
  };

  useEffect(() => {
    if (all_robots.length === 0) {
      get_reomte_data();
    }
    // let localData = localStorage.getItem("RoboStore");
    // if (localData) {
    //   set_initial_data(JSON.parse(localData));
    // } else {
    //   get_reomte_data();
    // }
  }, []);

  // state === values to display
  const state = {
    all_robots,
    filtered_robots,
    selected_robot,
    loading_robots,
    error_message
  };
  // actions === callbacks to call
  const actions = {
    set_filtered_robots,
    set_selected_robot
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
};

// export { RoboProvider, useRobots };
export { RoboProvider, useRobots };
