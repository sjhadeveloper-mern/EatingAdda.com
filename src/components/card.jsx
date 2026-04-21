import Data from './data.json';
import {useState} from 'react'
import { useEffect } from 'react';

const Api = ()=>{
// data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name
    // const dataa = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6677&lng=77.4337&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    // const path = "data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.name";
    // useEffect(()=>{
        
    //     fetch(dataa).then((resolve)=>{
    //    return resolve.json();
    //     }).then((resolve2)=>{
    //         console.log(resolve2.path);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])


    const [api,setapi] = useState(Data);
return (
<>
<div className='h-screen w-screen flex justify-center items-center'>
<div className='flex  gap-5 bg-yellow-500 new flex-wrap'>
{
api.map((item)=>{


    return (
       <>
       
       <div className='bg-red-500 p-7 w-[220px] flex flex-col justify-center items-center h-80 rounded-xl cursor-pointer shadow-xl shadow-red-400/50/50' >
       <img src={item.img} width="200" />
<h1 className='text-white text-center font-extrabold text-xl'>{item.name}</h1>
<h2 className='text-large font-bold'>{item.rating}</h2>
<h2 className='text-yellow-300 font-bold'>{item.delivery}</h2>
</div>

</>

    )
})
}
 </div>
 </div>
 </>






)
}

export default Api;