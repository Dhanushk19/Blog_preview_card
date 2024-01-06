
import './App.css'
import Blog_Image from "../src/assets/images/illustration-article.svg";
import dp from "../src/assets/images/image-avatar.webp";
function App() {


  return (
    <>
    <div className='full_card'><main class="card">
          <img src={Blog_Image} className='image'></img>
          <div className='para'>
          <p className='learn'>Learning</p>
          <p className='pub'>Published 21 Dec 2023</p>
          <h2 className='heading'>HTML & CSS foundations</h2>
          <p className='sub_para'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className='author'><img src={dp} className='imagedp'></img><span className='name'>Greg Cooper</span></div>
          </div>
      </main></div>
      
    </>
  )
}

export default App
