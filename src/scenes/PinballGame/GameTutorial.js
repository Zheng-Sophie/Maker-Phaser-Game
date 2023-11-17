import GameEndTimer from "../CommonSystem/GameEndTimer";
export default class GameTutorial{
    constructor(scene,text, days){
        this.scene = scene
        this.text = text
        this.days = days
    }

    create(){
        const style = {
            fontSize: this.text.text.size,
            fill: "#000",
            wordWrap: { width: 280, useAdvancedWrap: true }
        }

        let startGameLabel = this.scene.add.image(180,325,'startGameLabel').setScale(0.52,0.52).setDepth(29);
        let startGameButton = this.scene.add.image(180,550,'startGameButton').setScale(0.4,0.4).setDepth(29);

        let description = this.scene.add.text(50, 80, "\n"+ this.text.text.content, style).setDepth(30)

        this.gameEndTimer = new GameEndTimer(this.days)
        let countDown = this.scene.add.text(73, 570, "\n剩餘"+ this.gameEndTimer.create("month") + "月" + this.gameEndTimer.create("day") + "日" + this.gameEndTimer.create("hours") + "時" + this.gameEndTimer.create("minutes") + "分", style).setDepth(30)

        if(!this.gameEndTimer.create("wrong")){
            startGameButton.setInteractive().on('pointerdown',function(){
                this.scene.isGameStart = true;
                this.scene.startGame();

                startGameLabel.destroy()
                startGameButton.destroy()
                description.destroy()
                countDown.destroy()

                startGameLabel = null;
                startGameButton = null;
            },this)
        } else {
            window.alert('超出時間')
            startGameButton.destroy()
        }
        
    }

}