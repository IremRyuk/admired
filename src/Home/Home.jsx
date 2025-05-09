import '../SCSS/Home/home.css'
import Latest from './Latest'
import SlideShow from './SlideShow'
export default function Home () {
    return(
        <center><div className="home">
            <SlideShow />
            <Latest />
        </div></center>
    )
} 