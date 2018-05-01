import React, { Component } from "react";
import "./modal.css";

/**
 * Modal Component
 *
 * Props:
 *  title: string
 *  subtitle: string
 *  modalBody: string or html element
 *  type: 'warning' | undefined
 *  closeModal: function
 *
 * approach: the modal is intended to be supplied a title, subtitle and body content,
 * and closeModal function as props.
 *
 *
 */

const Modal = function(props) {
	const renderModalTitle = function() {
		if (props.modalType === "warning") {
			return <h1  className="modal-title warning">{props.title}</h1>;
		}
		return <h1 className="modal-title">{props.title}</h1>;
	};
	const bodyContent = function() {
		if (typeof props.modalBody === "string") {
			return <p>{props.modalBody}</p>;
		}
		return props.modalBody;
	};

	return (
		<div onClick={props.closeModal} class="modal-shadow">
			<div className="modal-container">
				<div>
					<div className={"modal-title-container"}>
						{renderModalTitle()}
					</div>

					<div className={"modal-subtitle-container"}>
						<h4>{props.subtitle}</h4>
					</div>
					<div className={"modal-body-container"}>{bodyContent()}</div>
				</div>
				<button onClick={props.closeModal}>
					this is the close modal button
				</button>
			</div>
		</div>
	);
};

export default Modal;
