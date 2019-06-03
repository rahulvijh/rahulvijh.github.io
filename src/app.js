const obj = {
  name: "Rahul",
  getName() {
    return this.name;
  }
};

// const getName2 = obj.getName;  // Passing function reference. typeof getName2 here will be function.

const getName2 = obj.getName.bind(obj);

console.log(getName2());



class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of React";
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Button clicked');
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeHandleAll = this.removeHandleAll.bind(this);
  }
  removeHandleAll() {
    console.log(this.props.options)
    //alert("remove all clicked");
  }
  render() {
    return (
      <div>
      <button onClick={this.removeHandleAll}>Remove All</button>
        {
          // this.props.options.map((opt) => <p key={opt}>{opt}</p>)
          this.props.options.map((opt) => <Option key={opt} optionsText={opt} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionsText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.optionName.value.trim();

    if(option) {
      alert(option);
    }
    
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionName"></input>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

/* const jsx = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
) */

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));