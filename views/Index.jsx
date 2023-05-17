const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Logs Index Page</h1>
        <ul>
          {this.props.logs.map((log, i) => {
            return (
              <li key={i}>
                Title: <a href={`/logs/${log.id}`}>{log.title}</a>
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
      </div>
    );
  }
}

module.exports = Index;
