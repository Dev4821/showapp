import React ,{useEffect,useState}from 'react'
import Spinner from './Spin'
import ShowComponent from './ShowComponent'
import axios from "axios";


const Show= (props)=> {
  
  const[articles,setArticles]=useState([])

 
  const[loading,setLoading]= useState(false)
    
  const updateShow=async()=>
    {
      props.setProgress(10);
       const url=`https://api.tvmaze.com/search/shows?q=all`;
       
       setLoading(true)
       props.setProgress(30);
       const response = await axios.get(url).catch((err) => {
        console.log("Error: ", err);
      });
       setLoading(false)
      
  
       props.setProgress(70);
      
       setArticles(response.data);
      
       props.setProgress(100);

    }
    useEffect(()=>{  
    updateShow();
    // eslint-disable-next-line
  },[])

    return (
       <div className='container my-2'>
        <h2 className='text-center' >  All Show </h2>
           {loading && <Spinner/>}
          {  !loading &&
        <div className="row">
      {articles.map(({ show }) => {
               return <div className="col-md-4"    key={show.id}>  <ShowComponent
                  _id={show.id}
                  thumbnailSrc={show.image && show.image.medium}
                  name={show.name}
                  rating={show.rating && show.rating.average}
                 
                />
                </div>
})}
          
        </div>
          }
       
      </div>
    )
  }

  
export default Show
