/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react";
// import Thumb from "./Thumb";
// import styled from "styled-components";
import { Box, Image, Heading, Text } from "rebass";

const MyCard = ({ first_name, country, description, avatar }) => {
  // console.log('first_name:',first_name)
  //	console.log('props:',props)
  return (
    <Box
      sx={{
        padding: "2rem 2.8rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center"

        // &:hover {
        //   background: paleturquoise;
        //   ${Image} {
        //     box-shadow: 0 0.4rem 1.5rem DimGrey;
        //     margin-bottom: 3rem;
        //     padding-bottom: 1rem;
        //   }
        // }

        // &:active {
        //   background: skyblue;
        //   color: white;
        // }
      }}
    >
      <Image
        src={avatar}
        sx={{
          height: "10rem",
          width: "10rem",
          borderRadius: "50%",
          backgroundColor: "darksalmon",
          transition: "box-shadow 150ms, margin 150ms, padding 150ms"
        }}
      />
      <Box sx={{ paddingLeft: "2.8rem" }}>
        <Heading
          sx={{
            color: "slategray",
            fontFamily: "Expletus Sans",
            textAlign: "left",
            fontSize: "2.8rem"
          }}
        >
          {first_name} from {country}
        </Heading>
        <Text
          sx={{
            fontFamily: "Raleway",
            fontSize: "1.4rem",
            maxWidth: "35rem"
          }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
export default memo(MyCard);

//const Box = styled.div`

/* .card:active .paragraph {
    color: white;
  }
  .card:active .thumb {
    box-shadow: 0 0.4rem 1.5rem DimGrey;
  } */
//`;

// .card:hover .thumb {
//   box-shadow: 0 0.4rem 1.5rem DimGrey;
//   margin-bottom: 3rem;
//   padding-bottom: 1rem;
// }
// .card:active {
//   background: skyblue;
//   color: white;
// }
// .card:active .paragraph {
//   color: white;
// }
// .card:active .thumb {
//   box-shadow: 0 0.4rem 1.5rem DimGrey;
// }
