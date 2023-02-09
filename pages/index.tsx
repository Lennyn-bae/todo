import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TodoProvider } from './store/TodoContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Ticker from './components/Ticker/Ticker';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { Paper } from '@mui/material';


const Home: React.FC = () => {
  const queryClient = new QueryClient();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const [isVisible, setVisibility] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Paper className='paper'>
          <section className='main'>
            <Header
              setVisibility={setVisibility}
              isVisible={isVisible}
            />
            <TodoProvider>
              <TodoList />
            </TodoProvider>
            {isVisible
              && <Ticker />
            }
          </section>
        </Paper>

      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Home;

