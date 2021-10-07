import './App.css';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];

function Food({ name, picture }) {
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} alt={name} />
  </div>
}
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
export default App;
