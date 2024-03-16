
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { useEffect } from 'react'
import SingleRecipe from './Components/SingleRecipe/SingleRecipe'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([])

  useEffect(() => {
    fetch('Dish.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);

  const handleRecipe = (rp) => {
    const isExists = cook.find((p) => p.recipe_id == rp.recipe_id);
    if (!isExists) {
      setCook([...cook, rp]);
    }
    else {
      toast('Already Exist');
    }
  }

  const handleRemove = (id) => {
    const cookingItem = cook.find((item) => item.recipe_id === id);
    const updatedCook = cook.filter((item) => item.recipe_id !== id);
    setCook(updatedCook);

    setCurrentCooking([...currentCooking, cookingItem]);

  };
  // console.log(cook)
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='main-container flex flex-col lg:flex-row gap-5 my-10'>
        <div className='Recipe-card-section grid-cols-1 grid lg:grid-cols-2 lg:w-3/5 gap-4'>
          {
            recipes.map((rcp) => (
              <SingleRecipe handleRecipe={handleRecipe} key={rcp.id} recipe={rcp}></SingleRecipe>
            )

            )}
        </div>
        <div className='side-bar border-dashed border border-slate-500 lg:w-2/5 '>
          <h3 className='text-2xl font-semibold text-center border-dashed border-b
          border-slate-400 py-2'>Want to cook : {cook.length} </h3>
          <div className='Want-cook'>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cook.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                      <td><button onClick={() => handleRemove(item.recipe_id)} className='btn border-none bg-[#0BE58A] rounded-3xl text-lg font-medium '>Preparing</button><ToastContainer /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='current-cook'>
            <div className="overflow-x-auto">
              <h3 className='text-2xl font-semibold text-center border-dashed border-b
          border-slate-400 py-2'>Currently cooking : {currentCooking.length}</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCooking.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td> 
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
