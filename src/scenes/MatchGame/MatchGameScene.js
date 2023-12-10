import Phaser from "phaser"

//Common System Scripts
import Score from "../CommonSystem/Score"
import ShowMessage from "../CommonSystem/ShowMessage"
import DropTimeCounter from "../CommonSystem/DropTimeCounter"
import GameTimer from "../CommonSystem/GameTimer"
import GameoverMessage from "../CommonSystem/GameOverMessage"
import GameAchievement from "../CommonSystem/GameAchievement"

//CatchFruit Game Scripts
import GameTutorial from "./GameTutorial"
import CardGenerate from "./CardGenerate"

export default class MatchGameScene extends Phaser.Scene{

    constructor(){
        super("Match")
        this.flippedCards = [];
        this.canFlip = true;
        this.pairsFound = 0;
        this.timerText=[];
        //this.timer;
    }
    //第一步，預先載入圖片
    preload(){
        this.modifyDatas = this.scene.settings.data
        // console.log(this.modifyDatas);
        //load image
        Object.keys(this.modifyDatas).forEach((key)=>{
            this.modifyDatas[key].items.forEach((itemObj)=>{
                if( itemObj.img ) {
                    if(this.textures.list[itemObj.name]){
                        // console.log("remove");
                        this.textures.remove(itemObj.name)
                    }
                    // console.log("add", itemObj);
                    this.load.image( itemObj.name, itemObj.img.src )
                }
            })
        })

        this.load.image('startGameLabel','/img/Games/Common/gameover/startGameLabel.png')
        this.load.image('startGameButton', '/img/Games/Common/gameover/startGameButton.png')
        this.load.image('gameoverLabel','/img/Games/Common/gameover/gameoverLabel.png')
        this.load.image('playAgainButton', '/img/Games/Common/gameover/playAgainButton.png')
        const {card_back} = this.modifyDatas
        this.load.image('card_back', card_back.items[0].img)
        //this.load.image('player','/img/Games/CatchFruitGame/boy.png');
        // this.load.spritesheet('dude','/img/Games/CatchFruitGame/dude.png',{
        //     frameWidth: 32, frameHeight:48
        // });

        //console.log("preload");
    }
    // 第五步，開始遊戲
    startGame = () => {

        
        //星星落下的時間間隔
        this.starCoolDown = new DropTimeCounter(this,"")
        this.starCoolDown.start(this.handleCountDownFinished.bind(this),500) //5s 隨機叫星星
        
        // 遊戲時間 timeText,gameTimer custom OK.
        // const {gameTimer} = this.modifyDatas
        // this.createGameTimer(gameTimer.items[0])
        console.log("startgame");
    }

    createGameTimer(gameTimer){ //第四步，第 65 行
        //Timer
        const style = {
            fontSize: 32,
            fill: "#fff",
            stroke: "#000",
            strokeThickness: 2
        }
        const gameTimerLabel = this.add.text(16, 34, "時間", style).setDepth(20)
        this.gameTimer = new GameTimer(this, gameTimerLabel, "\n時間")
        this.gameTimer.start(this.gameover.bind(this),gameTimer.text.content * 1000)//5s
    }

    create(){ //第三步
        
        this.isGameStart = false

        // this.playerMoveSpeed = 400
        // this.cursor = this.input.keyboard.createCursorKeys()

        //background custom OK.
        const {background} = this.modifyDatas
        this.add.image(background.items[0].img.position.x, background.items[0].img.position.y ,'background').setScale(background.items[0].img.size/100)

        //gameStart Tutorial
        const {gameTutorialText} = this.modifyDatas
        const {gameEndTimer} = this.modifyDatas
        this.gameTutorialMessage = new GameTutorial(this, gameTutorialText.items[0], gameEndTimer.items[0])
        this.gameTutorialMessage.create()

        //gameoverMessage
        const {gameoverMessage} = this.modifyDatas
        this.gameoverMessage = new GameoverMessage(this, this.scoreText.getScore(), gameoverMessage.items[0])
        this.gameAchievement = new GameAchievement(this, 0, gameoverMessage.items[1])

        const {card_back} = this.modifyDatas
        const {card_front} = this.modifyDatas
        this.cardgenerate = new CardGenerate(this, card_back.items[0], card_front.items)
        this.cards = this.cardgenerate.createCards()

        this.timerText = this.add.text(16, 16, 'Time: 0', { fontSize: '32px', fill: '#fff' });
        this.timer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimerText,
            callbackScope: this,
            loop: true
        });
    }

    updateTimerText() {
        this.timerText.setText(`Time: ${this.timer.elapsedSeconds.toFixed(0)}`);
    }

    gameover(){ //第 78 行
        this.physics.pause()
        this.starCoolDown.stop()
        this.player.setTint(0xff0000)
        this.player.anims.play('stop')
        this.gameoverMessage.create(this.scoreText.getScore())
        this.gameAchievement.create()
    }

    flipCard(pointer, card) {
        if (!this.canFlip || card.data.get('isFlipped')) {
            return;
        }

        card.setTexture(card.data.get('frontKey'));
        card.data.set('isFlipped', true);
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
            this.canFlip = false;
            this.time.delayedCall(1000, this.checkMatch(), null, this);
        }
    }

    checkMatch() {
        const [card1, card2] = this.flippedCards;
        if (card1.data.get('frontKey') === card2.data.get('frontKey')) {
            this.pairsFound++;
            if (this.pairsFound === 8) { //遊戲結束
                this.timer.remove(false);
                alert('Congratulations! You won!');
            }
        } else {
            card1.setTexture('card_back');
            card2.setTexture('card_back');
            card1.data.set('isFlipped', false);
            card2.data.set('isFlipped', false);
        }

        this.flippedCards = [];
        this.canFlip = true;
    }
    
    update(){
        if(this.isGameStart){
            this.starCoolDown.update()
            this.gameTimer.update()
        }
        
    }

    
}


