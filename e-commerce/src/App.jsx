import React from "react";
import { Routes, Route } from "react-router-dom";
import Routing from "./component/Routing";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Contact from "./pages/Contact";
import Exterior from "./pages/Exterior";
import Alloys from "./pages/Alloys";
import Multicards from "./pages/Multicards";
import Animation from "./pages/Animation";
import Safety from "./pages/Safety";
import Cleaning from "./pages/Cleaning";
import Lights from "./pages/Lights";
import Interior1 from "./pages/Interior1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Routing />}>
        <Route index element={<Home />} />
        <Route path="background" element={<Background />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Exterior" element={<Exterior />} />
        <Route path="alloys" element={<Alloys />} />
        <Route path="multicards" element={<Multicards />} />
        <Route path="animation" element={<Animation />} />
        <Route path="Safety" element={<Safety />} />
        <Route path="Cleaning" element={<Cleaning />} />
        <Route path="Lights" element={<Lights />} />
        <Route path="Interior1" element={<Interior1/>}/>
      </Route>
    </Routes>
  );
};

export default App;
