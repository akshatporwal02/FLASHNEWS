
import image from '../assets/news.jpg'
const NewsItem = ({title,description,src,url}) => {
  return (
<div className="card bg-dark text-light mb-4 d-inline-block my-3 mx-5 px-2 py-2" style={{maxWidth:"350px"}}>
  <img src={src?src:image} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"my description"}</p>
    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
