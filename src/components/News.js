import React, { useState,useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
const News=(props)=> {
 
  const [state, setState] = useState({
    articles:[],
   
    loading:false
  })
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
   const d=document.title=props.category
  // }
  
  // ${props.apiKey}
  const allinOne=async ()=>{
    props.setprogress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setState({loading:true})
    const data=await fetch(url)
    props.setprogress(40)
    const parseData=await data.json()
    props.setprogress(100)
    setState({
    articles:parseData.articles,
    loading:false
    })
    settotalResults(parseData.totalResults)
  }
 useEffect( ()=>{
  //   props.setprogress(10)
  //   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
  //   setState({loading:true})
  //  const data=await fetch(url)
  //  props.setprogress(40)
  //  const parseData=await data.json()
  //  props.setprogress(100)
  // //  console.log(data)
  // //  console.log(parseData)
  //  setState({articles:parseData.articles,
  // totalResults:parseData.totalResults,loading:false})
  // console.log(page+" hello use effect" )
  // setState({(page)=>{}})
  allinOne()

   }, [])
  


 const previous=async ()=>{
    
    setpage(
      page - 1 )
      allinOne()
 }
 const next= async ()=>{
    
    setpage(
        page + 1)
        allinOne()
 }
    return (
    <>
   { console.log(page+" hello" )}
    {state.loading && <Spinner></Spinner>} 
     {!state.loading&&
      <div className="container my-3" >     
      <h1  style={{textAlign:"center",marginTop:"100px",marginBottom:"20px"}}>News - On  {props.category} Headline </h1>
   
    <div className="row" style={{textAlign:"center",border:"3px solid black"}}>
    {state.articles.map((element)=>{
     return <div className="col-md-4 my-5" key={element.url} >
        <Newsitem title={element.title?element.title.slice(0,30):""}  description={element.description?element.description.slice(0,60):""} urlToImage={
      element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem></div>
      })}
       <div className="container">
    <button type="button" disabled={page<=1} className="btn btn-dark mb-3 " style={{float:"left"}} onClick={previous}>&larr; Previous</button>
      <button type="button" disabled={page>=(Math.ceil(totalResults/props.pageSize))} className="btn btn-dark mb-3 " style={{float:"right"}} onClick={next}>Next &rarr;</button>
    </div>
    </div>
   
    </div>}
    </>
    )
  }


export default News
