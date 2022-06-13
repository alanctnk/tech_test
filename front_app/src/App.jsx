import { Header } from './components'
import { Home, About, Form, Vehicles, NotFound } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <> 
      <Toaster />
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
         
        <Route exact path="/about" element={<About />}/>
  
        <Route exact path="/vehicles" element={<Vehicles />}/>

        <Route exact path="/new_vehicle" element={<Form />}/>

        <Route exact path="/edit_vehicle/:id" element={<Form />} />

        <Route exact path="/not_found" element={ <NotFound /> } />

        <Route path="*" element={<Navigate to="/not_found" replace />} />
      </Routes>
    </>
  );
}

export default App;
