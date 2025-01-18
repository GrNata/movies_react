
export const Movie = ({Title, Year, Type, Poster, ImdbID}) => {
    const urlPoster = "http://img.omdbapi.com/?apikey=7450963b&i=" + ImdbID;

    console.log('URL Movie urlPoster = ' + urlPoster);
    
    return  (
          <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            {Poster === 'N/A' ? (
                                <img src="https://via.placeholder.com/300x400?text=No+Image" alt={Title}></img>
                            ) : (
                                <img src={Poster} alt={Title} />
                            )}
                        
                        </div>
                        <div class="card-content">
                            <p>{Title}</p>
                            <p>{Year}</p>
                            <p>{Type}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};