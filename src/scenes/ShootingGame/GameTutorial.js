import GameEndTimer from "../CommonSystem/GameEndTimer";
export default class GameTutorial{
    constructor(scene, balloons,text, days){
        this.scene = scene
        this.balloons = balloons
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

        let balloonArr = []
        let scoreTextArr = []
        for(let i=1;i< 6;i++){
            balloonArr.push(this.scene.add.image(85,130 + (i * 65),'balloon' + i).setScale(this.balloons[i - 1].img.size/100).setDepth(30));
            scoreTextArr.push(this.scene.add.text(200,120 + (i * 65), this.balloons[i - 1].score.content, {
                "fontSize": 24,
                "fill": "#000"
            }).setDepth(30))
        }

        
        let description = this.scene.add.text(50, 80, "\n"+ this.text.text.content, style).setDepth(30)
        this.gameEndTimer = new GameEndTimer(this.days)
        let countDown = this.scene.add.text(73, 570, "\n剩餘"+ this.gameEndTimer.create("month") + "月" + this.gameEndTimer.create("day") + "日" + this.gameEndTimer.create("hours") + "時" + this.gameEndTimer.create("minutes") + "分", style).setDepth(30)

        if(!this.gameEndTimer.create("wrong")){
            startGameButton.setInteractive().on('pointerdown',function(){
                // console.log('startGame!')
                this.scene.isGameStart = true;
                this.scene.startGame();
                for(let i=0;i< 5;i++){
                    balloonArr[i].destroy()
                    scoreTextArr[i].destroy()
                }
                balloonArr = null
                scoreTextArr = null

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