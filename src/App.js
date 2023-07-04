import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectTemplate from './components/ProjectTemplate';
import './i18n/i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MainIndex from './components/MainIndex';
import useDarkMode from './components/hooks/useDarkMode';
import Image1 from './media/img/ProjectTemp1-min.jpg';
import Image2 from './media/img/ProjectTemp2-min.jpg';
import Image3 from './media/img/ProjectTemp3-min.jpg';
import Image4 from './media/img/ProjectTemp4-min.jpg';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#333',
        },
      },
    },
  },
});

const projects = [
  {
    image: Image1,
    title: 'Project Medieval',
    description:
      'This is a short description of my bachelor that I did called Project Medieval. It is a game that is based on the medieval times. Multiplayer using Unity and C#.',
    path: 'project-medieval',
  },
  {
    image: Image2,
    title: 'Project 2',
    description: 'This is a brief description about Project 2...',
    path: 'project-2',
  },
  {
    image: Image3,
    title: 'Project 3',
    description: 'This is a brief description about Project 3...',
    path: 'project-3',
  },
  {
    image: Image4,
    title: 'Project 5',
    description: 'This is a brief description about Project 5...',
    path: 'project-5',
  },
  {
    image: Image4,
    title: 'Project 6',
    description: 'This is a brief description about Project 6...',
    path: 'project-6',
  },
  {
    image: Image4,
    title: 'Project 7',
    description: 'This is a brief description about Project 7...',
    path: 'project-7',
  },
  {
    image: Image4,
    title: 'Project 8',
    description: 'This is a brief description about Project 8...',
    path: 'project-8',
  },
  // Add more projects as needed
];

function ProjectDetails({ projects }) {
  const { projectId } = useParams();

  const project = projects.find((project) => project.path === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={project} />;
}

function App() {
  const [isDarkMode, toggleTheme] = useDarkMode();

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainIndex projects={projects} />} />
          <Route path="/projects/:projectId" element={<ProjectDetails projects={projects} />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

