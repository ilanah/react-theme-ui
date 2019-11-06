/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { memo } from "react";
import MyCard from "./MyCard";
import { Box } from "rebass";
// import styled from "styled-components";

const RoboList = ({ list_data, on_select }) => {
  return (
    <Box
      sx={{
        background: "oldlace",
        height: "77vh",
        minWidth: "56rem",
        /*border: #0000b9 solid 3px;*/
        borderRadius: "0.4rem",
        overflowX: "hidden",
        overflowY: "scroll",
        boxShadow: "0 0.2rem 0.8rem DimGrey"
      }}
    >
      <ul>
        {list_data.map(bot => (
          <Styled.li key={bot.id} onClick={() => on_select(bot)}>
            <MyCard {...bot} />
          </Styled.li>
        ))}
      </ul>
    </Box>
  );
};
export default memo(RoboList); //RoboList;

// const CardItem = styled.li`
//   &:nth-child(even) {
//     background: honeydew;
//   }
//   &:nth-child(odd) {
//     background: white;
//   }
// `;
