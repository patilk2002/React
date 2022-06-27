import logo from './logo.svg';
import './App.css';
let name="Kiran";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello{name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem debitis vitae sunt ab similique facilis perspiciatis ipsa corrupti consectetur rem, animi unde quis velit quo, hic tempore aperiam excepturi.</p>
    </div>

    </>
  );
}

export default App;
