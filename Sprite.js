class Sprite {
    constuctor(config) {
        //set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;

        }

        //configuraing animation & initial state
        this.animations = config.animations || {
            idleDown: [
                [16, 32]
            ]
        }

        this.currentAimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;


        //reference game object
        this.gameObject = config.gameObject;


    }


    draw(ctx) {
        const x = this.gameObject.x * 16 - 12;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.image,
            16, 8,
            16, 32,
            x, y,
            16, 32

        )


    }
}