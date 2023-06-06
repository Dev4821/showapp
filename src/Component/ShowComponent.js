import React from 'react'
import { Link } from 'react-router-dom';
const ShowComponent=(props)=> {
  
    let {_id,thumbnailSrc,name,rating}=props;
    return (
      <div className='my-3 mx-3'>
       <div className="card" >
     
  <img src={!thumbnailSrc?"https://images.puella-magi.net/thumb/2/27/No_Image_Wide.svg/800px-No_Image_Wide.svg.png?20110202071158":thumbnailSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6 className='card-text'>Rating:{!rating?`NA`:rating}</h6>
    
    <Link to={`/show/${_id}`} className="btn btn-sm btn-dark">Get Summary</Link>
   
     </div>
   </div>
 </div>
    )
  
}

export default ShowComponent
