const React = require('react')

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Log Show Page</h1>
                <h2>{this.props.log.title}</h2>
                <p>{this.props.log.entry}</p>
                <div>{this.props.log.shipIsBroken? "This ship broke" : "This ship ain't broke"}</div><br/>
                <div>{this.props.log.createdAt.toLocaleDateString()}</div>
            </div>
        )
    }
}

module.exports = Show