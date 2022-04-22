
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";
import FormMike from "./components/FormMike";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVideos(dummyData);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          <br/><br/>
          <h1>Hello world</h1>
          {/* {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className="section-title">{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })} */}
            <FormMike />
        </div>
      </>
    </ThemeProvider>
    
  );
};
export default App;
