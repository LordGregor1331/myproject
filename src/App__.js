import logo from './logo.svg';
import './App.css';

const name = "Gabriel"

const Header = ({ children, size = "100px" }) =>
    <header className="App-header">
        <img style={{ minHeight: size }} src={logo} className="App-logo" alt="logo" />
        {children}
    </header>
const Add = ({ a, b }) =>
    <div>a+b={a}+{b}={a + b}</div>
const GoodCard = ({ title = 'NoName', url = '#', img = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }) => //title, url - объявление переменных. После `=` - значение по умолчанию
    <div className='GoodCard'>
        <h1>{title}</h1>
        <a href={url}>
            <img src={img} />
        </a> { /*title, url - підстановка в HTML*/}
    </div>


const Main = () => //використання
    <main>
        <GoodCard />
        <GoodCard title="Bosch" url='http://google.com' />
        <GoodCard title="eBosch" img='https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg' />
        <GoodCard title="Braun" />
        <GoodCard title="neBraun" />
    </main>
function App() {
    return (
        <div className="App">
            <input></input>
            <div />
            {/* Hello
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {2 + 2}<br/>
        {name}
      </header> */}
            <Header>Veni, Vidi, Vici.</Header>
            <Header size='200px'>Mater, pecavi</Header>
            <Add a={5} b={3} />
            <Add a={6} b={-2} />
            <Add a="Veni" b={5} />
            {<Main />}
        </div>
    );
}

export default App;