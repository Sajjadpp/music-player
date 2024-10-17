import Featured from "../component/homePage/Featured"
import PlayList from "../component/homePage/PlayList"
import "../component/homePage/homePage.scss"
function Home(){

    return(
        <div className="home">
            
            <Featured/>
            <PlayList/>
        </div>
    )
}

export default Home 