import React from 'react';
import { Content } from './features/content/Content';
import { Footer } from './features/footer/Footer';
import { HeaderContainer } from './features/header/Header';
import { SideMenu } from './features/sideMenu/SideMenu';
import { Wrapper } from './features/wrapper/Wrapper';
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './features/welcome/Welcome';
import { Popup } from './features/popup/Popup';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const { isVisible } =useSelector((state:RootState) => state.popup)

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <HeaderContainer />
        {isVisible && <Popup />}
        <Wrapper>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="country/:countryCode"  element={<Content />}/>
          </Routes>
          <SideMenu />
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;