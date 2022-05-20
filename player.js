class Jogador{
    constructor(){
        this.pernas = createSprite(100, 100)
        this.corpo = createSprite(100, 100)
        
    }

    display(){
        this.pernas.addAnimation("andando", andando)
        this.pernas.addAnimation("parado", parado)
        //faca
        this.corpo.addAnimation("com Faca", comFaca)
        //pistola
        this.corpo.addAnimation("pistola", pistola)
        //rifle
        this.corpo.addAnimation("rifle", rifle)
        //escopeta
        this.corpo.addAnimation("escopeta",escopeta)
        
    }
    movimentacao(){
        if(keyDown("w")||keyDown("up") ){
            this.corpo.y -= 5
            this.pernas.changeAnimation("andando")
        }
        if(keyDown("s")||keyDown("down") ){
            this.corpo.y += 5
            this.pernas.changeAnimation("andando")
        }
        if(keyDown("a")||keyDown("left") ){
            this.corpo.x -= 5
            this.pernas.changeAnimation("andando")
        }
        if(keyDown("d")||keyDown("right") ){
            this.corpo.x += 5
            this.pernas.changeAnimation("andando")
        }
    }
    mirar(){
        if(mouseX >this.corpo.x + 100){
            this.corpo.pointTo(mouseX, mouseY)
            this.pernas.mirrorX(1)
        }else if(mouseX <this.corpo.x -100){
            this.corpo.pointTo(mouseX, mouseY)
            this.pernas.mirrorX(-1)
        }
        
    }
    trocarArma(gun){
        console.log(gun);
        switch(gun){
            
            case "faca":this.corpo.changeAnimation("com Faca");
            case "pistola":this.corpo.changeAnimation("pistola");
            case "escopeta":this.corpo.changeAnimation("escopeta");
            case "rifle":this.corpo.changeAnimation("rifle")
        }
    }
    acoes(){
        this.movimentacao()
        this.pernas.x = this.corpo.x;
        this.pernas.y = this.corpo.y;
        this.mirar()
    }
    
}