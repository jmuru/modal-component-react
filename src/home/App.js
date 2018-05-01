import React, { Component } from "react";
import Modal from "../modal/modal";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalBaseActive: false,
			modalWarningActive: false
		};
	}

	toggleModalBase = () => {
		this.setState({
			modalBaseActive: !this.state.modalBaseActive
		});
	};

	toggleModalWarning = () => {
		this.setState({
			modalWarningActive: !this.state.modalWarningActive
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Modal Example</h1>
				<div>
					<h2>Base Modal</h2>
					<button className="modal-base-toggle" onClick={this.toggleModalBase}>
						this will activate base modal
					</button>
					{this.state.modalBaseActive ? (
						<Modal
							title={"test modal"}
							subtitle={"test subtitle"}
							modalBody={<div>hello world</div>}
							closeModal={this.toggleModalBase}
						/>
					) : null}
				</div>
				<div>
					<h2>Warning Modal</h2>
					<button
						className="modal-warning-toggle"
						onClick={this.toggleModalWarning}
					>
						this will activate warning modal
					</button>
					{this.state.modalWarningActive ? (
						<Modal
							title={"Warning Modal"}
							subtitle={"warning subtitle"}
							modalBody={<div>this is a warning</div>}
							modalType={"warning"}
							closeModal={this.toggleModalWarning}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
