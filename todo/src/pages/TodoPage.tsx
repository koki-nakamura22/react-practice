import { AppBar, Box, Fab, IconButton, Toolbar, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu"
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import TodoList from "../components/TodoList";

const TodoPage: React.FC = () => {
  // ダミーデータ
  const dummyTodoList = [
    { title: "Learn React", body: "Read the official React documentation." },
    { title: "Build a Todo App", body: "Use React to build a simple Todo application." },
    { title: "Master TypeScript", body: "Learn how to use TypeScript with React." },
  ];

  const handleClick = () => {
    alert("Edit");
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
          Todo管理
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Fab color="primary" size="small" onClick={handleClick}>
            <EditIcon />
          </Fab>
        </Toolbar>
      </AppBar>
      <TodoList todoList={dummyTodoList}/>
    </>
  )
}

export default TodoPage;
