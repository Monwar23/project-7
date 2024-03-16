import PropTypes from 'prop-types';

const SingleRecipe = ({ recipe,handleRecipe }) => {
    // console.log(handleRecipe)
    return (
            <div className="p-3 bg-base-100 shadow-xl border-dashed border border-slate-500 rounded-lg">
                <figure><img className="rounded-lg h-48 w-80" src={recipe.recipe_image} alt="Shoes" /></figure>
                <div className="my-4">
                    <h2 className="card-title">{recipe.recipe_name}</h2>
                    <p className="text-[#878787]  border-dashed border-b
          border-slate-300 p-2">{recipe.short_description}</p>
                    <div className="ingredients border-dashed border-b
          border-slate-300 p-2">
                        <h3 className="text-lg font-medium my-2 ">Ingredients : {recipe.ingredients.length}</h3>
                        <ul className="list-disc ml-6 ">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="mb-1  text-[#878787] ">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex gap-2">
                            <img src="https://i.ibb.co/89DkqtD/Frame.png" alt="" />
                            <p>{recipe.preparing_time}</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="https://i.ibb.co/bdcm3P4/Frame-1.png" alt="" />
                            <p>{recipe.calories}</p>
                        </div>
                    </div>
                    <div className="card-actions mt-6">
                        <button onClick={()=>handleRecipe(recipe)} className="btn border-none bg-[#0BE58A] rounded-3xl text-lg font-medium ">Want to Cook</button>
                    </div>
                </div>
            </div>
    );
};

SingleRecipe.PropTypes={
    recipe:PropTypes.array,
    handleRecipe:PropTypes.func

}

export default SingleRecipe;