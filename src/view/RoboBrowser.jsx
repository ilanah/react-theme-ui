import React, { memo } from "react"; //, memo
import RoboList from "./RoboList";
import RoboFilter from "./RoboFilter";
import RoboProfile from "./RoboProfile";
import styled from "styled-components";
// import robots_data from "../robots-data.json";
// import { RoboProvider, useRobots } from "../state/Robo.store";
// import { RoboProvider, RoboStore } from "../state/Robo.store";
import { useRobots } from "../state/Robo.store";

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
    <Box>
      {!loading_robots ? (
        <div>
          <RoboFilter list_data={all_robots} on_filter={set_filtered_robots} />
          <ContentBox>
            <RoboProfile {...selected_robot} />
            <RoboList
              list_data={filtered_robots}
              on_select={set_selected_robot}
            />
          </ContentBox>
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
// Connected;

const Box = styled.div`
  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
`;
const ContentBox = styled.div`
  /*border:red solid 2px;*/
  border-radius: 5px;
  display: flex;
`;
