// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Container, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import UrlForm from "./features/url/UrlForm";
import RedirectPage from "./features/url/RedirectPage";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        URL Shortener
      </Typography>

      <Routes>
        <Route path="/" element={<UrlForm />} />
        <Route path="/:shortCode" element={<RedirectPage />} />
      </Routes>
    </Container>
  );
}

export default App;
