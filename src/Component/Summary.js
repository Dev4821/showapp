import React, { useState, useEffect } from 'react';

import axios from 'axios';
const Summary = ({ match }) => {
  const [data, setData] = useState([]);
  
  const updateShow=async()=>
  {
   
     const url=`https://api.tvmaze.com/shows/${match.params.id}`;
    
     const response = await axios.get(url).catch((err) => {
      console.log("Error: ", err);
    });
    
    

    
    
     setData(response.data);
    
    

  }
 
  
  useEffect(()=>{  
  updateShow();
  // eslint-disable-next-line
},[])
var element = document.getElementById('setSummary');
if (element) {
  element.innerHTML = data.summary;
} 
var image=data.image && data.image.medium;
  return (
    
    <div className='my-3 mx-3 col-md-4 '>
      
       <div className="card" >
       <div className='card-header' style={{textAlign:'center',textDecorationStyle:"solid"}}>Summary</div>
  <img src={!image?"https://images.puella-magi.net/thumb/2/27/No_Image_Wide.svg/800px-No_Image_Wide.svg.png?20110202071158":image} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 className="card-title">{data.name}</h5>
   
    <div  id="setSummary">
    
      
    </div>
   
   
     </div>
   </div>
 </div>
    
    
  );
};

export default Summary;