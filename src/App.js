import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [search, setsearch] = useState("Mumbai")
  const [currData, setcurrData] = useState(null)
  

  useEffect(()=>{
    const fetchcity = async ()=>{
      const fetchdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d15ea9bc8040a64b739d37bc9feb7faa`)
      const Data = await fetchdata.json()
      setcurrData(Data.main)
      
    }

    fetchcity()
  },[search])
  return (
      <div className="container">
        <div className="box">
          <div className="inputBox">
            <input  onChange={(event)=>{
                setsearch(event.target.value)
            }} type="search" value={search}className="search"/>
          </div>

        {!currData ? <h4 className='notFound'>Data not found</h4>:
        
        (<div className="bottom">
          <h2 className="logo">
            <i className="fa-solid fa-street-view"> { search } </i>
          </h2>
          <h1 className="temp">
               {currData.temp}  °Cel
          </h1>
          <h3 className="tempMinMax">
            Min:{currData.temp_min} °Cel | max :{currData.temp_max} °Cel
          </h3>
        </div>)
}



        </div>
      </div>
  );
}

export default App;
