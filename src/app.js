console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Make a decision",
  options: []
};

const onFormSubmit = event => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
  }
  render();
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeChoice = () => {
  const randomNum = Math.floor(Math.random() * app.options.lenth);
  let option = app.options[randonNum];
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button disabled={app.options.length == 0} onClick={onMakeChoice}> What Should I do </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
};

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
