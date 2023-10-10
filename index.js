
class Car {
    constructor(name,img,model,color,year,price) {
        this.name = name
        this.img = img;
        this.model = model
        this.color = color
        this.year = year
        this.price = price
    }
}

let cars = [
  new Car("BMW", "./img/bmw.jpg", "M4-competition", "Grey", "2018", "2€"),
  new Car("Mercedes", "./img/mercedes.jpg", "AMG", "Black", "2020", "40€"),
  new Car("Lada", "./img/lada.jpg", "1500", "red", "1954", "30_000€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
  new Car("Nissan", "./img/nissan.jpg", "GTR", "Black", "2015", "1€"),
];
    
cars.map((item) => {
    //create div container for car maybe yes?
    let carContainer = document.createElement('div');
    carContainer.style.display = 'flex';
    carContainer.style.flexDirection = 'column';
    carContainer.style.justifyContent = 'center';
    carContainer.style.alignItems = 'center';

    //CarName
    let carName = document.createElement('h1');
    carName.textContent = item.name;

    //carImg
    let carImg = document.createElement('img');
    carImg.src = item.img;
    carImg.style.width = '50%';

    //carModel
    let carModel = document.createElement('h1');
    carModel.textContent = item.model;

    //carColor
    let carColor = document.createElement('h1');
    carColor.textContent = item.color;

    //carYear
    let carYear = document.createElement('h1');
    carYear.textContent = item.year;

    //carPrice
    let carPrice = document.createElement('h1');
    carPrice.textContent = item.price;

    carContainer.appendChild(carImg);
    carContainer.appendChild(carImg);
    carContainer.appendChild(carModel);
    carContainer.appendChild(carColor);
    carContainer.appendChild(carYear);
    carContainer.appendChild(carPrice);
    document.body.appendChild(carContainer);
    

})
    


console.log(cars)
