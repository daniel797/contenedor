import { Contendor, directorio } from './Contendor';
import * as clases from "./clases";




export var ejemplo: directorio = {
    r: clases.Hamburguesa,
    n: "Hamburgesa",
    H: [
        {
            r: clases.Carnes, n: "Carnes", H: [
                {
                    r: clases.none,
                    n: "tipo",
                    H: []
                }
            ]
        },
        {
            r: clases.Pan, n: "Pan", H: [{
                r: clases.normalPan,
                n: "tipo",
                H: []
            }]
        },
        {
            r: clases.Vegetales, n: "Vegetales", H: [
                {
                    r: clases.lechuga,
                    n: "tipo",
                    H: []
                }
            ]
        },

    ]

}

export var c = new Contendor(ejemplo)
//console.log(c.set())
