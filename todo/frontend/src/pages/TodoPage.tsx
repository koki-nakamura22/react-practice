import { AppBar, Box, CircularProgress, Fab, Toolbar, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import { Todo } from "../services/ITodoService";
import { useTodoService } from "../contexts/TodoServiceContext";

const TodoPage: React.FC = () => {
  // dummy data
  // const dummyTodoList = [
  //   { title: "Learn React", body: "Read the official React documentation." },
  //   { title: "Build a Todo App", body: "Use React to build a simple Todo application." },
  //   { title: "Master TypeScript", body: "Learn how to use TypeScript with React." },
  // ];

  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const todoService = useTodoService();

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const todos = await todoService.fetchTodoList();
        setTodos(todos);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        } else {
          console.error('不明なエラー:', error);
          setError('不明なエラーが発生しました');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchTodoList();
  }, [todoService]);

  const handleClick = () => {
    alert("Edit");
  }

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

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
      <TodoList todoList={todos}/>
    </>
  )
}

export default TodoPage;
