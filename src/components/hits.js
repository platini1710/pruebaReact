import React, { useEffect,  useState } from "react";

import axios from "axios";
    const Hits = ({ hits }) => {

      const [data, setData] = useState([]);


      useEffect( () => {

        axios
          .get("https://hn.algolia.com/api/v1/search_by_date")
          .then((result) => {
            setData(result.data.hits);
 
          }
            );
        
      }, []);


      function handleRemove(id) {
        // remove item
      
        const temp = [...data];
        temp.splice(id, 1);
        setData(temp);
        
        console.log(data)
   
      }
      

      return (
        <div>
          <center><h1>Hits List</h1></center>
          {data.map((hit,key) => (
            <div class="card"  key={key}>
              <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">  
              
              <button type="button" onClick={() => handleRemove(key)}>
            Remove
          </button></h6>
               <h6 class="card-subtitle mb-2 text-muted">Titulo:: { hit.title}</h6>
              <h6 class="card-subtitle mb-2 text-muted">  Fecha:: { hit.created_at}</h6>
              <h6 class="card-subtitle mb-2 text-muted">  Author::    {hit.author }</h6>
              <h6 class="card-subtitle mb-2 text-muted">  url::    {hit.url }</h6>
              <h6 class="card-subtitle mb-2 text-muted">  Points::    {hit.points }</h6>
              <h6 class="card-subtitle mb-2 text-muted">  Story::    {hit.story_text }</h6>
              <h6 class="card-subtitle mb-2 text-muted">  Comment::    {hit.comment_text }</h6>
              <h6 class="card-subtitle mb-2 text-muted"> ------------------------------------- -------------------------------------</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Hits