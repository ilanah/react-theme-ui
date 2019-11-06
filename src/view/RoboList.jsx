import React, { memo } from "react"; //
import Card from "./Card";
import styled from "styled-components";

const RoboList = ({ list_data, on_select }) => {
  return (
    <Box>
      <ul>
        {list_data.map(bot => (
          <CardItem key={bot.id} onClick={() => on_select(bot)}>
            <Card {...bot} />
          </CardItem>
        ))}
      </ul>
    </Box>
  );
};
export default memo(RoboList); //RoboList;

const Box = styled.div`
  background: oldlace;
  height: 77vh;
  min-width: 56rem;
  /*border: #0000b9 solid 3px;*/
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;

const CardItem = styled.li`
  &:nth-child(even) {
    background: honeydew;
  }
  &:nth-child(odd) {
    background: white;
  }
`;
