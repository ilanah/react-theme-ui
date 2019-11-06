/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react"; //, memo
import RoboList from "./RoboList";
import RoboFilter from "./RoboFilter";
import RoboProfile from "./RoboProfile";
// import robots_data from "../robots-data.json";
// import { RoboProvider, useRobots } from "../state/Robo.store";
// import { RoboProvider, RoboStore } from "../state/Robo.store";
import { useRobots } from "../state/Robo.store";
import { Box } from "rebass";

const RobotsBrowser = () => {
  const {
    all_robots,
    filtered_robots,
    selected_robot,
    set_filtered_robots,
    set_selected_robot,
    loading_robots
  } = useRobots();

  return (
    <Box
      sx={{
        background: "Cornsilk",
        padding: "8.5rem 1.5rem 1.5rem",
        borderRadius: "0.4rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0.4rem 1.5rem DimGrey",
        position: "relative",
        marginTop: "7rem"
      }}
    >
      {!loading_robots ? (
        <div>
          <RoboFilter list_data={all_robots} on_filter={set_filtered_robots} />
          <Box
            sx={{
              borderRadius: "5px",
              display: "flex"
            }}
          >
            <RoboProfile {...selected_robot} />
            <RoboList
              list_data={filtered_robots}
              on_select={set_selected_robot}
            />
          </Box>
        </div>
      ) : (
        <h1>I am Loding...</h1>
      )}
    </Box>
  );
};

// const Connected = () => (
//   <RoboProvider>
//     <RobotsBrowser />
//   </RoboProvider>
// );
export default memo(RobotsBrowser);
