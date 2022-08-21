import './App.css';
import Typewriter from "typewriter-effect"; 

function App() {
  return (
    <div className="App">
      <div className='content' id='content-1'>
        <div className='navbar'>
          <h1>Gratis NFT</h1>

          <ul>
            <li><a href="#top">Test</a></li>
            <li><a href="#top">Test</a></li>
            <li><a href="#top">Test</a></li>
          </ul>
        </div>

        <div className='welcome-text'>
          <h1>Welcome to the Gratis NFT Website</h1>
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString("Hello Youtube")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Subscribe")
              .start();
            }}
          />
        </div>
      </div>
      
      <div className='content' id='content-2'>
        <h1>Content Setion 2</h1>
      </div>

      <div className='content' id='content-3'>
        <h1>Content Section 3</h1>
      </div>

      <div className='content' id='content-4'>
        <h1>Content Section 4</h1>
      </div>

      <div className='content' id='content-5'>
        <h1>Content Section 5</h1>
      </div>
    </div>
  );
}

export default App;
