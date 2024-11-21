import  { useEffect } from "react";
import  React,{ useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category,mode}) => {
    const[articles,setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cb5d7253fe624f3893d030fdae7c56cb`
        fetch(url).then((response)=>response.json()).then((data)=>setArticles(data.articles))
    },[category])
  return (
    <div>
      <h2 className={`text-center ${mode === "light" ? "text-dark" : "text-light"}`}>Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src = {news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
