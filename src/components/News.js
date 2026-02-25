import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spin from './Spin';

const News = ({category, apikey, setProgress }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = useCallback(async () => {
    setProgress(10);
    setLoading(true);

    let url = `https://newsapi.org/v2/everything?q=${category} india&sortBy=publishedAt&apiKey=${apikey}&page=${page}&pageSize=20`;

    let data = await fetch(url);
    setProgress(30);

    let parsedData = await data.json();
    setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults > 100 ? 100 : parsedData.totalResults);
    setLoading(false);

    setProgress(100);
  }, [page, category, apikey, setProgress]);

  useEffect(() => {
    updateNews();
  }, [updateNews]);

  const handlePrevClick = () => {
    setPage(prev => prev - 1);
  };

  const handleNextClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='container my-3'>
      <h1 className="text-center" style={{ margin: '35px 0px' }}>
        NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
      </h1>

      {loading && <Spin />}

      <div className="row">
        {!loading && articles?.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description ? element.description.slice(0, 88) : ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={new Date(element.publishedAt).toGMTString()}
              source={element.source.name}
            />
          </div>
        ))}

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={page + 1 > Math.ceil(totalResults / 20)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

News.defaultProps = {
  category: "general"
};

News.propTypes = {
  category: PropTypes.string,
};

export default News;








// import React, { useCallback,useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import NewsItem from './NewsItem'
// import Spin from './Spin';

// const News =(props)=> {
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)
  
// const capitalizeFirstLetter=(string)=> {
//   if (!string) return ""; 
//   return string.charAt(0).toUpperCase()+string.slice(1);
// }
// // document.title=`NewsMokney-${this.capitalizeFirstLetter(this.category)}`;
//   // constructor(props){
//   //   super(props);
//   //   console.log("hiii m ");
//   //   this.state = {
//   //     articles:[],
//   //     loading:true,
//   //     page:1,
//   //   }
//   //   document.title=`NewsMokney-${this.capitalizeFirstLetter(this.category)}`;
//   // }
//   const updateNews=useCallback(async()=>{
//     setProgress(10);
//     let url =`https://newsapi.org/v2/everything?q=${category} india&sortBy=publishedAt&apiKey=${apikey}&page=${page}&pageSize=20`;
//    let data =await fetch(url); //wait to resolve promise
//     setProgress(30);
//     let parsedData = await data.json()
//     setProgress(70);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults > 100 ? 100 : parsedData.totalResults);
//     setLoading(false)
//     // this.setState({articles : parsedData.articles,
//     // totalResults:parsedData.totalResults > 100 ? 100 : parsedData.totalResults,
//     //   loading:false})
//       setProgress(100);
//   });
//   // async componentDidMount(){
//   //   this.updateNews();
//   // }
//   useEffect(()=>{
//     updateNews();
//   },[updateNews]);
//  const handlePrevClick=async ()=>{
//       setPage(page-1)
//       updateNews();
//   }
//  const handleNextClick=async()=>{
// setPage(page+1)
//       updateNews();
// }
  
//     return (
//       <div className='container my-3'>
//         <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines</h1>
//        {loading && <Spin/>}
//         <div className="row" >
//            {!loading && articles?.map((element)=>{
//           return <div className="col-md-4"  key={element.url}>
// <NewsItem title={element.title} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name}></NewsItem>
//             </div>
//         })}
//         <div className="container d-flex justify-content-between">
//           <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
//           <button disabled={page+1> Math.ceil(totalResults/20)}type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
//         </div>
//         </div>
//       </div>
//     )
  
// }
// News.defaultProps = {
//     category :  " general"
//   }
// News.propTypes = {
//     category : PropTypes.string,
//   }
// export default News
