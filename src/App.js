import logo from './logo.svg';
import './App.css';

const HeaderLink = ({ children = "ItemX", href = "#" }) =>
  <li><a href={href}>{children}</a></li>

const BoxComponent = ({ imgSrc = "https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg", heading = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", children = "Lorem ipsum", linkText }) =>{
  return (
    <div className="box1">
      <img src={imgSrc}/>
      <h2>{heading}</h2>
      <span>{children}</span>
      <div className="a-container">
        <a href="#">{linkText}</a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div class="cite">
        <header class="header">
          <div id="alevel"><img src="https://ao-pub-files.s3.eu-central-1.amazonaws.com/public/academy/yiJfIcGZLumJRnanW1yTjTxIDaznfo5u3UR84FlM.png"/></div>
          <ol class="topic-items">
            {/* <li><a href="#">Our team</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Partnership</a></li>
            <li><a href="#">Credits</a></li> */}
            <HeaderLink>Item_1</HeaderLink>
            <HeaderLink>Item_2</HeaderLink>
            <HeaderLink>Item_3</HeaderLink>
            <HeaderLink>Item_4</HeaderLink>
            <HeaderLink>Item_5</HeaderLink>
          </ol>
        </header>
        <main class="main-box">
          <section class="aside1">Aside1</section>
          <div class="main-page">
            <article id="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, obcaecati magni! Sit vero fugiat tempora, dicta nemo molestias modi, exercitationem quam nobis, vel iste hic dolor quaerat expedita esse explicabo.</article>
            <div class="box-container">
              {/* <div class="box1">
                <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis atque saepe aspernatur quos rerum perferendis unde non assumenda harum dicta.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div> */}
                <BoxComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis atque saepe aspernatur quos rerum perferendis unde non assumenda harum dicta.</BoxComponent>
              {/* </div> */}
              {/* <div class="box1"> */}
                {/* <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div> */}
                <BoxComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BoxComponent>
              {/* </div> */}
              {/* <div class="box1"> */}
                {/* <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis dolore ex laborum ratione id.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div> */}
              {/* </div> */}
              <BoxComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis dolore ex laborum ratione id.</BoxComponent>
              {/* <div class="box1">
                <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis dolore ex laborum ratione id.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div>
              </div> */}
              <BoxComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error praesentium officiis dolore ex laborum ratione id.</BoxComponent>
              {/* <div class="box1">
                <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas laudantium error.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div>
              </div> */}
              <BoxComponent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.</BoxComponent>
              {/* <div class="box1">
                <img src="https://i.pinimg.com/474x/03/27/03/0327031490aec922afe9182175673a27.jpg"/>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.</span>
                  <div class="a-container">
                    <a href="#">Go</a>
                  </div>
              </div> */}
            </div>
          </div>
          <section class="aside2">Aside2</section>
        </main>
      </div>
    </div>
  );
}

export default App;