import React from 'react'

const Newsitem=(props)=> {
   
    let {title,description,urlToImage,url,date,author,source}=props;
    return (
   <>
   
      <div className="card" >
      <div><span className=" badge rounded-pill bg-danger" style={{
            position: "absolute",
            right: "-1px",
            top: "-10px"
      }} >
{source}
  </span></div>
  <img src={urlToImage?urlToImage:"https://etimg.etb2bimg.com/thumb/msid-101429545,imgsize-18114,width-1200,height=765,overlay-ethealth/medical-devices/minimal-invasive-surgery-boon-for-localised-kidney-cancer.jpg"} className="card-img-top" alt=""/>
  <div className="card-body">
    
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
    <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read Full</a>
  </div>
</div>
</>
    )
  }


export default Newsitem
