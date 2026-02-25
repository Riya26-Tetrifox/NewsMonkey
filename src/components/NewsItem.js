const NewsItem =(props)=>{
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div className='my-3'>

        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
              {source}
            </span>
          <img src={imageUrl ? imageUrl : "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/5/0/3/2/4/6/9/studiodispl-677e91cd9f9447d3.png"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/5/0/3/2/4/6/9/studiodispl-677e91cd9f9447d3.png";
            }}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}
             
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
