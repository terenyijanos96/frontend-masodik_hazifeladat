class Elem {
    #htmlTartalom
    constructor(szuloElem){

        this.szuloElem = szuloElem

        this.#htmlTartalom = this.htmlLetrehozasa()

        this.szuloElem.append(this.#htmlTartalom)

        this.kattintasEsemenyHozzaadasa($(".keret"))

    }

    htmlLetrehozasa(){
        return `<div class="keret">
            <p></p>
        </div>`
    }

    kattintasEsemenyHozzaadasa(target){
        target.click(function(){
            $("p").text("X")
        })
    }

}

export default Elem