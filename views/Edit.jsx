const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1>Edit Log Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action={`/logs/${this.props.log.id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.log.title}></input>
          <br />
          Entry: <input type="textarea" name="entry" defaultValue={this.props.log.entry}></input>
          <br />
          Ship is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

module.exports = Edit;
