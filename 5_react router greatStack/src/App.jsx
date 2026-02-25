import React from "react";
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import Info from "./components/Info";
import ContactForm from "./components/ContactForm";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}> 
        
        <Route path="info" element={<Info/>}/>
        <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Route>,
    ),
  );

  return (


<RouterProvider router={router}/>


    // <div>
    //    <Navbar />
    //  <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/products' element={<Products />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
        
    //      </Routes>
    //      </div> 

    // </div> 
    //   this was the old of routing 
  );
};

export default App;
