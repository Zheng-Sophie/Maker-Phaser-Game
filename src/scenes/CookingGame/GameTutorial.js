import GameEndTimer from "../CommonSystem/GameEndTimer"
export default class GameTutorial{
    constructor(scene, food, text, days){
        this.scene = scene
        this.food = food
        this.text = text
        this.days = days
    }

    create(){
        let startGameLabel = this.scene.add.image(180,325,'startGameLabel').setScale(0.52,0.52).setDepth(29);
        let startGameButton = this.scene.add.image(180,550,'startGameButton').setScale(0.4,0.4).setDepth(29);

        let foodArr = []
        let scoreTextArr = []
        // for(let i=1;i< 5;i++){
        let scoreTextStyle = {
            "fontSize": 24,
            "fill": "#000"
        }
        const style = {
            fontSize: this.text.text.size,
            fill: "#000",
            wordWrap: { width: 280, useAdvancedWrap: true }
        }
        foodArr.push(this.scene.add.image(75,405, this.food[1].name).setScale(this.food[1].img.size/100).setDepth(30));
        foodArr.push(this.scene.add.image(225,405, this.food[1].name).setScale(this.food[1].img.size/100).setDepth(30).setTint(0xe3c0ad));
        foodArr.push(this.scene.add.image(225,470, this.food[3].name).setScale(this.food[3].img.size/100).setDepth(30).setTint(0x5C4033));
        foodArr.push(this.scene.add.image(75,470, this.food[3].name).setScale(this.food[3].img.size/100).setDepth(30));

        scoreTextArr.push(this.scene.add.text(115,395, this.food[1].score.content, scoreTextStyle).setDepth(30))
        scoreTextArr.push(this.scene.add.text(115,460, this.food[3].score.content, scoreTextStyle).setDepth(30))
        scoreTextArr.push(this.scene.add.text(255,460, this.food[4].score.content, scoreTextStyle).setDepth(30))
        scoreTextArr.push(this.scene.add.text(255,395, this.food[2].score.content, scoreTextStyle).setDepth(30))
        
        let description = this.scene.add.text(50, 80, "\n"+ this.text.text.content, style).setDepth(30)
        this.gameEndTimer = new GameEndTimer(this.days)
        let countDown = this.scene.add.text(73, 570, "\n剩餘"+ this.gameEndTimer.create("month") + "月" + this.gameEndTimer.create("day") + "日" + this.gameEndTimer.create("hours") + "時" + this.gameEndTimer.create("minutes") + "分", style).setDepth(30)

        if(!this.gameEndTimer.create("wrong")){
            startGameButton.setInteractive().on('pointerdown',function(){
                // console.log('startGame!')
                this.scene.isGameStart = true;
                this.scene.startGame();
                for(let i=0;i< 4;i++){
                    foodArr[i].destroy()
                    scoreTextArr[i].destroy()
                }
                foodArr = null
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