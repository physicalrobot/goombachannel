class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "Images/Pallet.png";



        //shadow 

        /*
                const shadow = new Image();
                shadow.onload = () => {
                    this.ctx.drawImage(
                        shadow,
                        16,
                        5,
                        16,
                        5,
                        x * 16 - 12,
                        y * 16 - 18,
                        16,
                        5
        
        
                    );
                }
                shadow.src = "Images/shadow.png";
      


        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                16,
                8,
                16,
                32,
                x * 16 - 12,
                y * 16 - 18,
                16,
                32


            );
        }
        hero.src = "Images/Hero.png";

          */

        //place some game objects!

        const hero = new GameObject({
            x: 3,
            y: 5,
        })


        setTimeout(() => {
            hero.sprite.draw(this.ctx);
        }, 200)




    }

}