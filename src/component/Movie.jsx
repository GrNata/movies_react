function Movie(props) {
    const {
        Title: title,   //  переименование Title в title
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return  <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' ?
                            <img 
                                className="activator" src={`https://placehold.jp/24/cccccc/ffffff/300x500.png?text=${title}`}

                                alt={title} />      // заглушака, если нет poster
                            :
                            <img className="activator" src={poster} alt={title} />
                    }
                    
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}</span>
                    <p>
                        {year} 
                        <span className="right">{type}</span>
                    </p>
                    <p><a href="!#">This is a link (пока оставила)</a></p>
                </div>
            </div>
    
};

export {Movie}


// export const Movie = ({Title, Year, Type, Poster, ImdbID}) => {
//     const urlPoster = "http://img.omdbapi.com/?apikey=7450963b&i=" + ImdbID;

//     console.log('URL Movie urlPoster = ' + urlPoster);
    
//     return  (
//           <div className="row">
//                 <div className="col s12 m7">
//                     <div className="card">
//                         <div className="card-image">
//                             {Poster === 'N/A' ? (
//                                 <img src="https://via.placeholder.com/300x400?text=No+Image" alt={Title}></img>
//                             ) : (
//                                 <img src={Poster} alt={Title} />
//                             )}
                        
//                         </div>
//                         <div className="card-content">
//                             <p>{Title}</p>
//                             <p>{Year}</p>
//                             <p>{Type}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     );
// };