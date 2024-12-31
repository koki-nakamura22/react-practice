import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  body: string;
}

const TodoDisplay: React.FC<Props> = ( {title, body }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TodoDisplay;
