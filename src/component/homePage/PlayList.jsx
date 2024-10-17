function PlayList(){

    return(

        <div className="playlist">
            <h2>playlists for you</h2>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

function Card(){

    return (
        <div className="card">
            <div className="img">
                <img src="" alt=""/>
            </div>
            <div className="description">
                <h5>slow motion</h5>
            </div>
        </div>
    )
}
export default PlayList