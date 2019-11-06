/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react"; //
import { Box, Image, Title, Line, Text, Heading } from "rebass";
// import React, { memo } from "react"; //
// import styled from "styled-components";

const RoboProfile = ({
  id,
  first_name,
  last_name,
  email,
  country,
  description,
  avatar
}) => {
  avatar = avatar.replace("100x100", "300x300");

  return (
    <Box
      sx={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        paddingRight: "15px",
        alignItems: "center"
      }}
    >
      <Image>
        <img src={avatar} alt="avatar" />
      </Image>
      <Box>
        <Title>
          {first_name} {last_name}
        </Title>
        <Line />
        <Heading mt="2rem">id: {id}</Heading>
        <Heading>country: {country}</Heading>
        <Heading>email: {email}</Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default memo(RoboProfile); //RoboProfile;

// const ImageBox = styled.div`
//   /*flex:1;*/
//   background: peachpuff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   width: 30rem;
//   height: 30rem;
//   img {
//     border-radius: 50%;
//     width: 300px;
//   }
// `;
// const DetailsBox = styled.div`
//   padding: 10px;
//   font-family: "Expletus Sans";
//   text-align: left;
//   color: slategray;
//   font-weight: 400;
// `;

// const Title = styled.h2`
//   font-size: 3.5rem;
//   font-weight: inherit;
//   text-align: center;
// `;

// const Line = styled.span`
//   margin-top: 2rem;
//   display: block;
//   width: 100%;
//   border: none;
//   height: 1px;
//   background: -webkit-gradient(
//     radial,
//     50% 50%,
//     0,
//     50% 50%,
//     200,
//     from(midnightblue),
//     to(Cornsilk)
//   );
// `;
// const Detail = styled.h5`
//   margin-top: ${({ mt }) => mt || 0};
//   font-size: 2.2rem;
//   font-weight: inherit;
//   color: darkslateblue;
// `;

// const Description = styled.p`
//   margin-top: 2rem;
//   font-family: "Raleway";
//   font-size: 1.8rem;
//   max-width: 40rem;
// `;
