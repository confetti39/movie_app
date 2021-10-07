import './App.css';

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name: "bulgogi",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  },
  {
    name: "kimbap",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];

function Food({ name, picture }) {
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} />
  </div>
}
function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food name={dish.name} pciture={dish.image} />
      ))}
    </div>
  );
}
export default App;
