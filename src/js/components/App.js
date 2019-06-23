import React, {Fragment} from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		response: ""
	}
	handleClick = () => {
		axios.get("/api/ping")
		.then(res => {
			this.setState({
				response: res.data
			})
		});
	}

	render() {
		return (
			<div className="content">
				<h1>You are now using the <b>Full-Stack React, Node, MongoDB and SASS</b> starter kit!</h1>
				<p>If you are reading this then you have got everything set up correctly and are ready to get building!</p>
				<button onClick={this.handleClick}>Click me to query the server!</button>
				<p>{this.state.response}</p>
			</div>
		);
	}
}

export default App;
