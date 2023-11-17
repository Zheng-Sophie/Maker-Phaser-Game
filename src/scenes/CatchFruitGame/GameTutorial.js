import GameEndTimer from "../CommonSystem/GameEndTimer"
export default class GameTutorial{
    constructor(scene, stars, text, days){
        this.scene = scene
        this.stars = stars
        this.text = text
        this.days = days
    }

    create(){
        const style = {
            fontSize: this.text.text.size,
            fill: "#000",
            wordWrap: { width: 280, useAdvancedWrap: true }
        }
        
        //圖片
        let startGameLabel = this.scene.add.image(180, 325,'startGameLabel').setScale(0.52, 0.52).setDepth(29);
        let startGameButton = this.scene.add.image(180, 550,'startGameButton').setScale(0.4, 0.4).setDepth(29);
        
        let description = this.scene.add.text(50, 80, "\n"+ this.text.text.content, style).setDepth(30)
        let scoreText = this.scene.add.text(50, 130, '\n得分:', style).setDepth(30)
        this.gameEndTimer = new GameEndTimer(this.days)
        let countDown = this.scene.add.text(73, 570, "\n剩餘"+ this.gameEndTimer.create("month") + "月" + this.gameEndTimer.create("day") + "日" + this.gameEndTimer.create("hours") + "時" + this.gameEndTimer.create("minutes") + "分", style).setDepth(30)

        let starArr = []
        let scoreTextArr = []
        for(let i = 1; i < 6; i++){ //i = 1 和 2 表示兩個掉落物
            starArr.push(this.scene.add.image(120, 150 + (i * 65), 'star' + i).setScale(this.stars[i - 1].img.size/100).setDepth(30)); //遊戲封面圖位置
            scoreTextArr.push(this.scene.add.text(230, 135 + (i * 65), this.stars[i - 1].score.content, {
                "fontSize": 24,
                "fill": "#000"
            }).setDepth(30)) //遊戲封面數字位置
        }
        //console.log(wrong1, wrong2, wrong3)
        if(!this.gameEndTimer.create("wrong")){
            startGameButton.setInteractive().on('pointerdown', function(){
                this.scene.isGameStart = true;
                this.scene.startGame();

                for(let i = 0; i < 5; i++){
                    starArr[i].destroy()
                    scoreTextArr[i].destroy()
                }
                starArr = null
                scoreTextArr = null

                startGameLabel.destroy()
                startGameButton.destroy()
                description.destroy()
                scoreText.destroy()
                countDown.destroy()

                scoreText = null;
                startGameLabel = null;
                startGameButton = null;
            },this)
        } else {
            window.alert('超出時間')
            startGameButton.destroy()
        }
    }
}