/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Box, Card, Image, Heading, Text } from "rebass";

export default ({ image, title, description }) => (
  <Box width={256} paddingTop={70}>
    <div
      sx={{
        fontWeight: "bold",
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        color: "primary" // picks up value from `theme.colors.primary`
      }}
    >
      Hello
    </div>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
      }}
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        }
      />
      <Box px={2}>
        <Heading as="h3">xxx</Heading>
        <Text fontSize={0}>yyy</Text>
      </Box>
    </Card>
    <Styled.h1>Theme UI + Create React App</Styled.h1>
  </Box>
);
