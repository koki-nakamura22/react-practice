import React from "react";
import TodoDisplay from "./TodoDisplay";
import { Box, Grid2 } from "@mui/material";

type Todo = {
  title: string;
  body: string;
}

type Props = {
  todoList: Todo[];
}

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <Box sx={{ flexGrow: 1}} paddingTop={3}>
      <Grid2 container spacing={3}>
        {
          todoList.map((todo, index) => {
            return (
              <Grid2
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                paddingLeft={2}
              >
                <TodoDisplay key={index} title={todo.title} body={todo.body} />
              </Grid2>
            )
          })
        }
      </Grid2>
    </Box>
  )
}

export default TodoList;
