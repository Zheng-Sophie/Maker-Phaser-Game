export default class GameEndTimer{
    constructor(days){
        this.days = [
            {days: days.gameEndTimer.days[0]},
            {days: days.gameEndTimer.days[1]},
            {days: days.gameEndTimer.days[2]},
            {days: days.gameEndTimer.days[3]},
            {days: days.gameEndTimer.days[4]}
        ]
    }
    
    create(word){
        const currentDate = new Date();
        let year = currentDate.getFullYear();
        let month,day; // 月份从0开始，需要加1
        let hours = Number(this.days[3].days) - currentDate.getHours();
        let minutes = Number(this.days[4].days) - currentDate.getMinutes();
        
        let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let daysCheck = monthDays[currentDate.getMonth() + 1] - currentDate.getDate() + Number(this.days[2].days);
        let wrong1 = Boolean(((currentDate.getMonth() + 1) > Number(this.days[1].days)) || (((currentDate.getMonth() + 1) === Number(this.days[1].days)) && (currentDate.getDate() > Number(this.days[2].days)))) //月份或日期錯
        let wrong2 = Boolean(((currentDate.getMonth() + 1) === Number(this.days[1].days)) && (currentDate.getDate() === Number(this.days[2].days)) && (currentDate.getHours() > Number(this.days[3].days))) //小時錯
        let wrong3 = Boolean((currentDate.getMonth() + 1) === Number(this.days[1].days) && currentDate.getDate() === Number(this.days[2].days) && currentDate.getHours() === Number(this.days[3].days) && currentDate.getMinutes() > Number(this.days[4].days)) //分鐘錯
        if(year === Number(this.days[0].days)){
            if(wrong1 || wrong2 || wrong3){
                year = month = day = hours = minutes = 0;
            } else if(daysCheck < 30){
                month  = Number(this.days[1].days) - currentDate.getMonth();
                day = daysCheck;
            } else{
                month = Number(this.days[1].days) - (currentDate.getMonth() + 1);
                day = Number(this.days[2].days) - currentDate.getDate();
            }
        } else if (year < Number(this.days[0].days)){
            if (daysCheck < 30)
                month = 12 - currentDate.getMonth() + Number(this.days[1].days);
            else
                month = 12 - (currentDate.getMonth() + 1) + Number(this.days[1].days);
        } else {
            year = month = day = hours = minutes = 0;
        }
        //(!wrong1 && !wrong2 && !wrong3)
        if(word === "month"){
            return month
        } else if(word === "day"){
            return day
        } else if(word === "hours"){
            return hours
        } else if(word === "minutes"){
            return minutes
        } else if(word === "wrong"){
            return ((wrong1 || wrong2 || wrong3) && (currentDate.getSeconds() >= 0))
        }
    }
}