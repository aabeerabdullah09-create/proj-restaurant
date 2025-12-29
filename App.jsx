import {Routes,Route}from "react-router-dom";
import Mainpage from "./src/Container/Mainpage/Mainpage.jsx";
import Foodpage from "./src/Container/Foodpage/Foodpage.jsx";
import Dessertpage from "./src/Container/Dessertpage/Dessertpage.jsx";
import Drinkspage from "./src/Container/Drinkspage/Drinkspage.jsx";
import NotFound from "./src/Container/NotFound/NotFound.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import VanillaStoryPage from "./src/Container/VanillaStoryPage/VanillaStoryPage.jsx";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/Mainpage" element={<Mainpage/>}/>
          <Route path="/Home" element={<Mainpage/>}/>
          <Route path="/Foodpage" element={<Foodpage/>}/>
          <Route path="/Drinkspage" element={<Drinkspage/>}/>
          <Route path="/Drinkspage/:id" element={<Drinkspage/>}/>
          <Route path="/Dessertpage" element={<Dessertpage/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Foodpage/:id" element={<Foodpage/>} />
          <Route path="/VanillaStoryPage" element={<VanillaStoryPage/>} />
          <Route path="/Dessertpage/:id" element={<Dessertpage />} />

      </Routes>
          <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <main></main>
          </ThemeProvider>
      </>
  )
}

export default App
