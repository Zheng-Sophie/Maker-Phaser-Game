export default class GameAchievement{
    constructor(scene, starType, message){
        this.scene = scene
        this.starType = starType
        this.star1 = 0
        this.star2 = 0
        this.star3 = 0
        this.star4 = 0
        this.star5 = 0
        this.messages = [
            {message: message.gameachievement.message[0], starAmount: this.star1},
            {message: message.gameachievement.message[1], starAmount: this.star2},
            {message: message.gameachievement.message[2], starAmount: this.star3},
            {message: message.gameachievement.message[3], starAmount: this.star4},
            {message: message.gameachievement.message[4], starAmount: this.star5}
        ]
        
    }
    create(){
        console.log(this.star1, this.star2, this.star3, this.star4, this.star5)
        this.messages.sort(function(a, b) {
            return b.starAmount - a.starAmount;
        })
        const gameAchievementStyle = {
            fontSize: 32,
            fill: "#000",
            wordWrap: { width: 240, useAdvancedWrap: true }
        }
        //let gameAchievement;
        for (let i = 0; i < 4; i++){
            console.log(i)
            this.scene.add.text(65,220,"\n\n" + this.messages[i].message,gameAchievementStyle).setDepth(30);
            if(this.messages[i].starAmount === this.messages[i + 1].starAmount) {
                continue;
            } else {
                break;
            }
        }
        // else if (this.messages[0].starAmount === this.messages[1].starAmount === this.messages[2].starAmount === this.messages[3].starAmount === this.messages[4].starAmount){
        //     this.scene.add.text(65,220,"\n\n" + this.messages[5].message,gameAchievementStyle).setDepth(30);
        // }
        
        console.log(this.messages[0].starAmount)
    }
    countStar(starType){
        if(starType === "star1") {
            this.star1 += 1;
            this.messages[0].starAmount = this.star1;
        } else if (starType === "star2") {
            this.star2 += 1;
            this.messages[1].starAmount = this.star2;
        } else if (starType === "star3") {
            this.star3 += 1;
            this.messages[2].starAmount = this.star3;
        } else if (starType === "star4") {
            this.star4 += 1;
            this.messages[3].starAmount = this.star4;
        } else if (starType === "star5") {
            this.star5 += 1;
            this.messages[4].starAmount = this.star5;
        }
    }
}