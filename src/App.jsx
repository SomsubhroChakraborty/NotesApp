import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Navbar from './pages/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#912BBC',
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;





