class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.player = new Player(this.game, "default")
        this.game.addEntity(this.player);
        this.x = 0
        this.y = 0;
    };

    update() {

    }
};
