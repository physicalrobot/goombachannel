class GameObject {
    constuctor(config) {
        this.x = config.x || 3;
        this.y = config.y || 3;

        this.sprite = new Sprite({
            gameObject: this,
            src: "Images/Hero.png",



        });

    }
}