const React = require('react')

class New extends React.Component {
    render(){
        return(
            <div>
                <form action='/logs' method="POST">
                    Title: <input type='text' name="title"></input><br/>
                    Entry: <input type='textarea'name="entry"></input><br/>
                    Ship is Broken?: <input type='checkbox' name="shipIsBroken"></input><br/>
                    <input type='submit' name="" value="Submit"></input>
                </form>
            </div>
        )
    }
}

module.exports = New