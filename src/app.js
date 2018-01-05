console.log("App.js is running!");

const app = {
  title: 'Indecision App',
  subtitle: 'Make a decision'
} 

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>1. List 1</li>
      <li>2. List 2</li>
    </ol>
  </div>
);



var user = {
  name: 'daron',
  age: 29,
  location: 'somewhere'
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)


const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
