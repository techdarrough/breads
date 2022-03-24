import React from "react";
import Default from "./layouts/Default";

let New = ({bakers}) => (
  <Default>
    <h2>Add a new bread</h2>
    <div className="backButton">
      <a href="/breads">
        <button>Go back to the index</button>
      </a>
    </div>
    <form action="/breads" method="POST">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="image">Image</label>
      <input type="text" name="image" id="image" />
      <label htmlFor="baker">Baker</label>
      <select name="baker" id="baker">

        {bakers.map(baker => (
          <option 
            value={baker.id} 
            key={baker.id
              }>
                {baker.name}
          </option>
        ))}
  
     
      </select>
      <label htmlFor="hasGluten">Has Gluten?</label>
      <input type="checkbox" name="hadGluten" id="hasGluten" defaultChecked />
      <br />
      <input type="submit" />
    </form>
  </Default>
);

module.exports = New;
