import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ProjectTemplate from './scripts/templates/ProjectTemplate';
import './i18n/i18n';
import Navbar from './scripts/components/CompNavbar';
import Footer from './scripts/components/CompFooter';
import AboutMe from './scripts/pages/PageAboutme';
import Projects from './scripts/pages/PageProjects';
import Contact from './scripts/pages/PageContact';
import MainIndex from './scripts/pages/PageMainIndex';
import useDarkMode from './scripts/hooks/useDarkMode';

import Image1 from './media/img/ProjectTemp1-min.jpg';
import Image2 from './media/img/ProjectTemp2-min.jpg';
import Image3 from './media/img/ProjectTemp3-min.jpg';
import Image4 from './media/img/ProjectTemp4-min.jpg';
import jsIcon from './media/img/js.png';
import htmlIcon from './media/img/html.png';
import cssIcon from './media/img/css.png';
import reactIcon from './media/img/react.png';
import aiIcon from './media/img/ai.png';
import promptIcon from './media/img/prompt.png';
import unityIcon from './media/img/unity.png';
import CSharpIcon from './media/img/CSharp.png';

/* Icons downloaded from https://www.flaticon.com/ */

const baseTheme = {
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
          margin: '1em 0',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f0f0f0',
      switch: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
      switch: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
});

const projects = {
  'Project Medieval': {
    title: 'Project Medieval',
    path: 'project-medieval',
    generalDescription: "Project Medieval is a game I'm currently working on.",
    image: Image1,
    updates: [
      {
        timestamp: 1689247285602,
        version: '0.0.1',
        title: 'Test update 1',
        description: 'Test update 1',
        changelog: 'Test update 1',
        images: [Image1, Image2],
      },
      {
        timestamp: 1689247185602,
        version: '0.0.0',
        title: 'Test update',
        description: 'Test update',
        changelog: 'Test update',
        images: [Image1, Image2],
      },
    ],
  },
  'Project 2': {
    title: 'Project 2',
    path: 'project-2',
    image: Image2,
    updates: [
      // Updates for Project 2
    ],
  },
  'Project 3': {
    title: 'Project 3',
    path: 'project-3',
    image: Image3,
    updates: [
      // Updates for Project 3
    ],
  },
  // Add more projects as needed
};

const skills = [
  {
    name: 'JavaScript',
    level: 4,
    icons: [jsIcon],
  },
  {
    name: 'HTML CSS',
    level: 4,
    icons: [htmlIcon, cssIcon],
  },

  {
    name: 'React',
    level: 3,
    icons: [reactIcon],
  },
  {
    name: 'AI Prompt',
    level: 4,
    icons: [aiIcon, promptIcon],
  },
  {
    name: 'Unity',
    level: 4,
    icons: [unityIcon],
  },
  {
    name: 'C#',
    level: 3,
    icons: [CSharpIcon],
  },

  // add more skills as needed
];

function App() {
  const [isDarkMode, toggleTheme] = useDarkMode();
  const { i18n } = useTranslation();

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      i18n.changeLanguage(browserLanguage);
    }
    // Update local storage whenever the language changes
    localStorage.setItem('language', i18n.language);
  }, [i18n]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainIndex projects={projects} skills={skills} />} />
          <Route path="/projects/:projectId" element={<ProjectTemplate projects={projects} />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

