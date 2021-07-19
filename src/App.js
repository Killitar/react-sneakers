import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const Arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'sneakers/1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: 'sneakers/2.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'sneakers/3.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: 'sneakers/4.jpg' },
  { name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: 'sneakers/5.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: 'sneakers/6.jpg' },
  { name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: 'sneakers/7.jpg' },
  { name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: 'sneakers/8.jpg' },
  { name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: 'sneakers/9.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 8499, imageUrl: 'sneakers/10.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: 'sneakers/4.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie 7', price: 11999, imageUrl: 'sneakers/6.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap ">
          {Arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
