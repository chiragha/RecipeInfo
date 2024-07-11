import './App.css';
import MainPage from './Components/Recipe/MainPage';
import { Route, Routes } from "react-router-dom"
import MealInfo from './Components/Recipe/MealInfo';
import Footer from './Components/Recipe/Footer';

function App() {
  

  return (
    <>
    
     <Routes>
      <Route path="/"  element={<MainPage />}/>
      <Route path="/:mealid" element={<MealInfo />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
