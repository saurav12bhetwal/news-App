
import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=>{
  const apiKey=process.env.REACT_APP_NEWSAPI
 
 const [progress, setprogress] = useState(0)
    return (
<>

<BrowserRouter>
<Navbar></Navbar>
<LoadingBar
height={3}
 color="red" progress={progress}
    />
{/* <News apiKey={apiKey} setprogress={setprogress} key="" pageSize="12"country="in" category="" ></News> */}
      <Routes>
        <Route exact path="/" element={<News  apiKey={apiKey} setprogress={setprogress} key="home" pageSize="12"country="in" category="" ></News>}/>
        <Route exact path="/home" element={<News apiKey={apiKey} setprogress={setprogress} key="home" pageSize="12"country="in" category="" ></News>}/>
        <Route exact  path="/business" element={<News apiKey={apiKey} setprogress={setprogress} key="business" pageSize="12"country="in" category="business" ></News>} />
        <Route exact  path="entertainment" element={<News apiKey={apiKey} setprogress={setprogress} key="entertainment" pageSize="12"country="in" category="entertainment" ></News>} />
        <Route exact  path="/general" element={<News apiKey={apiKey} setprogress={setprogress} key="general" pageSize="12"country="in" category="general" ></News>} />
        <Route exact  path="/health" element={<News apiKey={apiKey} setprogress={setprogress} key="health" pageSize="12"country="in" category="health" ></News>} />
        <Route exact  path="/science" element={<News apiKey={apiKey} setprogress={setprogress} key="science" pageSize="12"country="in" category="science" ></News>} />
        <Route exact  path="/sports" element={<News apiKey={apiKey} setprogress={setprogress} key="sports" pageSize="12"country="in" category="sports" ></News>} />
        <Route exact  path="/technology" element={<News apiKey={apiKey} setprogress={setprogress} key="technology" pageSize="12"country="in" category="technology" ></News>} />
       
      </Routes>
    </BrowserRouter>


</>
    )
  }
export default App;

