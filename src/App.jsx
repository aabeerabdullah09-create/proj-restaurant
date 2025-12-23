import { Routes, Route } from "react-router-dom";

import Mainpage from "./containers/Mainpage/Mainpage.jsx";
import Foodpage from "./containers/Foodpage/Foodpage.jsx";
import Dessertpage from "./containers/Dessertpage/Dessertpage.jsx";
import Drinkspage from "./containers/Drinkspage/Drinkspage.jsx";
import NotFound from "./containers/NotFound/NotFound.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ScrollToTop from "./components/ScrollToTop.jsx";


const darkTheme = createTheme({
  palette: { mode: "dark" },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ScrollToTop />
      <main></main>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Home" element={<Mainpage />} />

        <Route path="/Foodpage" element={<Foodpage />} />
        
        <Route path="/Foodpage/:id" element={<Foodpage />} />
        <Route path="/Drinkspage" element={<Drinkspage />} />

        <Route path="/Dessertpage" element={<Dessertpage />} />
        <Route path="/Dessertpage/:id" element={<Dessertpage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider >
  );
}

export default App;
