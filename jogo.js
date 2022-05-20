class Jogo {
    constructor(){
        this.fase = 1;
        this.telaCheia = 0;
    }
    inicio(){
        var botao = createButton("INICIAR")
        botao.position(width/2 -100, height/2 -25)
        botao.size(200, 50)
        botao.mousePressed(
            ()=>{
                this.mostrarHistoria()
                this.hide()
            }
        )
    
    }
    mostrarHistoria(){
        fullScreen(!this.telaCheia)
        
    }
    fase1(){

    }
}