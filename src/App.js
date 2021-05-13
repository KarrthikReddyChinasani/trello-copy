
import React from 'react';
import './App.css';
import { useState } from 'react';
import DragDropContainer from './containers/DragDrop/DragDrop.container';
import { ThemeProvider } from './context';
import Header from './components/Header/Header.component';
import { themeColors } from './constants/theme.style';


function App() {

  const [data, setData] = useState(FAKE_API_DATA);
  const [theme, setTheme] = useState(themeColors['light']);

  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      <Header />
      <DragDropContainer data={data} setData={setData} />
    </ThemeProvider.Provider>
  );
}

export default App;


const FAKE_API_DATA = {
  resources: [
    {
      id: 1,
      story_name: "Create List View",
      desc: "Get work done",
      tag: "task"
    },
    {
      id: 2,
      story_name: "Create Add Form",
      desc: "Create a new api for add form",
      tag: "task"
    }
  ],
  todo: [
    {
      id: 3,
      story_name: "Setup Git work flow",
      desc: "Get work done",
      tag: "bug"
    },
    {
      id: 4,
      story_name: "Install dependencies",
      desc: "Get this done asap",
      tag: "bug"
    }
  ],
  doing: [
    {
      id: 5,
      story_name: "Create Grid View",
      desc: "Get work done",
      tag: "task"
    },
    {
      id: 6,
      story_name: "Design view form component",
      desc: "Check if existing logic can be reused",
      tag: "bug"
    }
  ],
  done: [
    {
      id: 7,
      story_name: "App Crashes",
      desc: "Get this one fixed",
      tag: "bug"
    },
    {
      id: 8,
      story_name: "View Users fix",
      desc: "Modify the list",
      tag: "task"
    }
  ]
}