import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as ham from './clases'
//import { element } from 'prop-types';

interface Istate {
	pedido: ham.Hamburguesa

}
class App extends React.Component<{}, Istate>{

	constructor(props: any) {
		super(props)
		var pan = new ham.Pan(new ham.normalPan())
		var carne = new ham.Carnes()
		var vegetales = new ham.Vegetales()
		var hamburguesa = new ham.Hamburguesa(pan, carne, vegetales)
		this.state = {
			pedido: hamburguesa
		}
	}
	setCarne(carne: ham.carne) {
		var Carnes = this.state.pedido.getCarnes()
		Carnes.setCarne(carne)
		this.setState({})
	}
	setVegetales(veg: ham.vegetal) {
		var vegetal = this.state.pedido.getVegetales()
		vegetal.setVegetales(veg)
		this.setState({})
	}
	setPan(pan: ham.pan) {
		this.state.pedido.setPane(pan)
		this.setState({})
	}

	render() {
		//var b: ham.Pan = new ham.Pan(new ham.normalPan())
		//console.log(b)
		var listPanes: ham.pan[] = [new ham.frances(), new ham.integral(), new ham.normalPan()]
		var listVegetales: ham.vegetal[] = [new ham.lechuga(), new ham.tomate(), new ham.cebolla(), new ham.none()]
		var listCarne: ham.carne[] = [new ham.pollo(), new ham.res(), new ham.cordero(), new ham.tocino(), new ham.cerdo(), new ham.none()]
		//console.log(this.state.pedido)

		return (
			<div className="App">
				<div>
					pan
        			<div>        			
        				<br></br>
						<img src="http://www.buenasdicas.com/wp-content/uploads/2013/10/PAN_FELIPE_PAO_FRANCES.jpg" width="80px"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://media.istockphoto.com/photos/multi-grain-bread-with-slices-picture-id843541200" width="80px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="http://bocadogourmet.com/tienda/1659-large_default/pan-hamburguesa-sesamo-125cm-x-89gr-x-48und.jpg" width="60px" />
						<br></br>
						{listPanes.map((ele: ham.pan) => {
							return (
							<button key={ele.nombre} onClick={() => this.setPan(ele)}  >

									{ele.nombre + " $" + ele.precio / 10}

								</button>)
						})}
					</div>
				</div>
				<div>
					carne
        			<div>
        				<br></br>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPaNVJd_mAfXWjS27fIZ2cSSstpRwQbRhY60c_TBfbqbnZ-Oqb" width="70px"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0kpZdxy0GU91XcPLaMJqKwNDlKcZ2rlYz7qXAWu1cvihuRGqf" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6I0dzivkMVV2FlJe579HIv4XMjfmpMuP9gJO6fWjBWYWi5ofC" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://static.wixstatic.com/media/f1e20e_03195525ceb1466faa222c4262d6ea8c~mv2_d_3300_1869_s_2.jpg/v1/fill/w_996,h_664,al_c,q_85,usm_0.66_1.00_0.01/f1e20e_03195525ceb1466faa222c4262d6ea8c~mv2_d_3300_1869_s_2.jpg" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://static6.depositphotos.com/1081688/579/i/950/depositphotos_5799699-stock-photo-raw-pork.jpg" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;																		
						<img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/154/math-mathematical-expression-empty-set-512.png" width="60px" />
						<br></br>
						{listCarne.map((ele: ham.carne) => {
							return (
							<button key={ele.nombre} onClick={() => this.setCarne(ele)}>
								{ele.nombre + " $" + ele.precio / 10}
							</button>)
						})}
					</div>
				</div>
				<div>
					vegetales
        			<div>
        				<br></br>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoie3Zg6A0JqUwPcgoFAsFrW8VgUds624x08iE6ByXW9YXHdbC" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfNEiFqVidGoWAlj2QsXIRIy1bv0OabyyxT_MpmPWp1r9JwWHy" width="70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://static.elcorreo.com/www/multimedia/201906/28/media/cortadas/despensa28-kfAE-U806333285241gG-624x385@El%20Correo.jpg" width="80px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/154/math-mathematical-expression-empty-set-512.png" width="60px" />
						<br></br>
						{listVegetales.map((ele: ham.vegetal) => {
							return (
							<button key={ele.nombre} onClick={() => this.setVegetales(ele)}>
								{ele.nombre + " $" + ele.precio / 10}
							</button>)
						})}
					</div>
				</div>

				<div>
					contenido



        			<div>
						<div className={"pan"}  >pan {this.state.pedido.getPan().getName()}</div>
						{this.state.pedido.getCarnes().getList().map(element => {
							return (
								<div className={"carne"} key={element.nombre + "out"}>
									{element.nombre+ " $"+element.precio/10 }
								</div>
							)
						})}
						{this.state.pedido.getVegetales().getList().map(element => {
							return (
								<div className={"vegetal"} key={element.nombre + "out"} >
									{element.nombre+ " $"+element.precio/10 }
								</div>
							)
						})}
						<div className={"pan"} >pan {this.state.pedido.getPan().getName()+ " $"+this.state.pedido.getPan().getPrecio()/10 }</div>
					<div className={"plato"} > precio total ${this.state.pedido.getPrecio()/10}</div>
					</div>
				</div>

			</div>
		);
	}
}




export default App;
