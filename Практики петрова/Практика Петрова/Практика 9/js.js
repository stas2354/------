
let user = {
    name: "Джон",
    age: 30
  };
  user.sayHi = function() {
    console.log("Привет!");
  };
  user.sayHi();
  
  

  let customer = {
    firstName: "Станислав",
    lastName: "Иванов",
    address: "ул. Ленина, 1",
    phone: "8 919 646 78",
    email: "ivanovstas2345@gmail.com"
  };
  
  displayOutput("Имя покупателя: " + customer.firstName);
  displayOutput("Фамилия покупателя: " + customer.lastName);
  displayOutput("Адрес покупателя: " + customer.address);
  displayOutput("Номер телефона: " + customer.phone);
  displayOutput("Email: " + customer.email);
  
  
 
  let users = [
    { id: 1, name: "Петр", orders: [1, 2] },
    { id: 2, name: "Мария", orders: [3] }
  ];
  
  let orders = [
    { id: 1, restaurantId: 101, items: ["Пицца", "Кола"] },
    { id: 2, restaurantId: 102, items: ["Суши", "Роллы"] },
    { id: 3, restaurantId: 101, items: ["Бургер", "Картофель фри"] }
  ];
  
  let restaurants = [
    { id: 101, name: "Пиццерия" },
    { id: 102, name: "Суши-бар" }
  ];
  
  
  let userOrders = users.find(user => user.id === 1).orders;
  let orderInfo = userOrders.map(orderId => orders.find(order => order.id === orderId));
  
  let outputString = "Заказы пользователя Петр:\n";
  orderInfo.forEach(order => {
    let restaurantName = restaurants.find(restaurant => restaurant.id === order.restaurantId).name;
    outputString += `Заказ №${order.id} из ${restaurantName}: ${order.items.join(", ")}\n`;
  });
  displayOutput(outputString);
  
  
  

  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let groupMembers = ["Исп-309"];
  let users4 = groupMembers.map(name => new User(name));
  
  let names = users4.map(user => user.name).join(", ");
  displayOutput("Номер группы: " + names);
  
  

  function Student(name, group, grades) {
    this.name = name;
    this.group = group;
    this.grades = grades;
  
    this.getAverageGrade = function() {
      if (this.grades.length === 0) return 0;
      return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    };
  
    this.sayHi = function() {
      console.log("Меня зовут: " + this.name + ", я из группы: " + this.group);
    };
  }
  
  let student1 = new Student("Иванов", "Исп-309", [4, 5, 4, 3, 5]);
  student1.sayHi();
  displayOutput(`Средний балл Иваново: ${student1.getAverageGrade()}`);
  
  
  function displayOutput(message) {
    let outputDiv = document.getElementById("output");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    outputDiv.appendChild(newParagraph);
  }
  
  