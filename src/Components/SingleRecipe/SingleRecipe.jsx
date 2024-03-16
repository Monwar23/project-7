
const SingleRecipe = ({ recipe }) => {
    console.log(recipe)
    return (
        <div>
           <div className="p-3 bg-base-100 shadow-xl border-dashed border border-slate-500 rounded-lg">
  <figure><img className="rounded-lg h-48 w-80" src={recipe.recipe_image} alt="Shoes" /></figure>
  <div className="my-4">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <p className="text-[#878787]  border-dashed border-b
          border-slate-300 p-2">{recipe.short_description}</p>
          <div className="ingredients">
          <h3 className="text-lg font-medium my-2 ">Ingredients : {recipe.ingredients.length}</h3>
                  <ul className="list-disc ml-6">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="mb-1  text-[#878787] ">{ingredient}</li>
                    ))}
                  </ul>
          </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;