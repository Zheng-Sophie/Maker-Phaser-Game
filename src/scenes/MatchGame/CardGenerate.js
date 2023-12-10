//import Phaser from "phaser"
export default class CardGenerate{
    constructor(scene, card_front, card_back){
        this.scene = scene
        this.card_back = card_back.item[0].img
        this.card_front = card_front
        // [
        //     {card_front: card_front.card_front.item[0].img},
        //     {card_front: card_front.card_front.item[0].img},
        //     {card_front: card_front.card_front.item[1].img},
        //     {card_front: card_front.card_front.item[1].img},
        //     {card_front: card_front.card_front.item[2].img},
        //     {card_front: card_front.card_front.item[2].img},
        //     {card_front: card_front.card_front.item[3].img},
        //     {card_front: card_front.card_front.item[3].img},
        //     {card_front: card_front.card_front.item[4].img},
        //     {card_front: card_front.card_front.item[4].img},
        //     {card_front: card_front.card_front.item[5].img},
        //     {card_front: card_front.card_front.item[5].img},
        //     {card_front: card_front.card_front.item[6].img},
        //     {card_front: card_front.card_front.item[6].img},
        //     {card_front: card_front.card_front.item[7].img},
        //     {card_front: card_front.card_front.item[7].img},
        // ]
    }
    // createCard(x, y, backKey, frontKey) { //單張正反配對
    //     const card = this.add.image(x, y, backKey).setInteractive();
    //     card.data.set('frontKey', frontKey);
    //     card.data.set('isFlipped', false);
    //     return card;
    // }
    createCards(){ //生成並打亂
        let cards = [];
        let x = 100;
        let y = 100;

        for (let i = 0; i < 16; i++) {
            const card = this.add.image(x, y, this.card_back[0].img).setInteractive();
            card.data.set('frontKey', this.card_front[i/2].name);
            card.data.set('isFlipped', false);
            cards.push(card);

            //牌位置，待調整
            x += 150;
            if (x > 600) {
                x = 100;
                y += 150;
            }
        }
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }
    
}