export default class GameoverMessage{
    constructor(scene,score, message){
        this.scene = scene
        this.score = score
        this.messages = [
            {message: message.gameoverMessage.message[0], scoreCondition: message.gameoverMessage.score[0]},
            {message: message.gameoverMessage.message[1], scoreCondition: message.gameoverMessage.score[1]},
            {message: message.gameoverMessage.message[2], scoreCondition: message.gameoverMessage.score[2]}
        ]
        this.messages.sort(function(a, b) {
            return b.scoreCondition - a.scoreCondition;
        })
    }

    create(score){
        let gameoverLabel = this.scene.add.image(180,325,'gameoverLabel').setScale(0.52,0.52).setDepth(30);
        let playAgainButton = this.scene.add.image(180,550,'playAgainButton').setScale(0.4,0.4).setDepth(30);
        const scoreTextStyle = {
            fontSize: 26,
            fill: "#000",
            wordWrap: { width: 320, useAdvancedWrap: true }
        }

        let scoreText = this.scene.add.text(35,105,"\n你的得分是：" + score , scoreTextStyle).setDepth(30);

        const messageStyle = {
            fontSize: 26,
            fill: "#000",
            wordWrap: { width: 280, useAdvancedWrap: true }
        }
        let messageHeader = this.scene.add.text(35,150,"\n你的評價是：",messageStyle).setDepth(30);
        
        const gameoverMessageStyle = {
            fontSize: 32,
            fill: "#000",
            wordWrap: { width: 240, useAdvancedWrap: true }
        }
        let gameoverMessage;
        if(score > this.messages[0].scoreCondition){
            gameoverMessage = this.scene.add.text(65,220,"\n" + this.messages[0].message,gameoverMessageStyle).setDepth(30);
        }else if(score > this.messages[1].scoreCondition){
            gameoverMessage = this.scene.add.text(65,220,"\n" + this.messages[1].message,gameoverMessageStyle).setDepth(30);
        }else{
            gameoverMessage = this.scene.add.text(65,220,"\n" + this.messages[2].message,gameoverMessageStyle).setDepth(30);
        }

        playAgainButton.setInteractive().on('pointerdown',function(){
            scoreText.destroy()
            gameoverLabel.destroy()
            playAgainButton.destroy()
            messageHeader.destroy()
            this.scene.scene.restart()
        },this)
    }
} 

