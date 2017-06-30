console.log('WE HAVE LIFTOFF');

const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {	
	// using native JavaScript to create HTML strings
	jsContainer.innerHTML = `
		<div class="demo">
			Hello JS
			<br>
			<input />
			<p>${new Date()}</p>
		</div>
	`
	// using React to create HTML objects
	ReactDOM.render(
		React.createElement(
			"div",
			{ className: "demo" },
			"Hello React",
			React.createElement("br"),
			React.createElement("input"),
			React.createElement(
				"p",
				null,
				new Date().toString()
			)
		),
		reactContainer
	);
}	

setInterval(render, 1000);