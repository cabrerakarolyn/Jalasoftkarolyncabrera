import React, {Component} from 'react';

class MiComponente extends Component{

	render(){

		let receta = {
			nombre: 'pizza',
			ingredientes:['tomate','queso', 'jamon'],
			calorias: 400

		};


		return(
			<React.Fragment>
				<h1> {'nombre: '+ receta.nombre} </h1>
				<h2> {'calorias: '+ receta.calorias} </h2>
				<ol>
					{
						receta.ingredientes.map((ingrediente, i) => {
							console.log(ingrediente)
							return(
								<li key={i}>
									{ingrediente}
								</li>

							);
						})
					}
				</ol>
				<hr/>
			</React.Fragment>
		);


	}


}

export default MiComponente;
