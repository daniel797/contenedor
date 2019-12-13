

export interface directorio{
    r:any;
    n:string;
    H:directorio[];
}

export class Contendor{
    estruc:directorio;
    constructor (estrutura: directorio  ){
        
        this.estruc=estrutura
    }
    set(r?:directorio){
        if(!r){
            
            var root =   new this.estruc.r()
            console.log(root)
            this.estruc.H.forEach((element:directorio) => {
                root[element.n]=this.set(element)
            });
            return root;
            
        }else{
            var root =   new r.r()
            r.H.forEach((element:directorio) => {
                root[element.n]=this.set(element)
            });
            return root;
            
        }
        
    }

}
