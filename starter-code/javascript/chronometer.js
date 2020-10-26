
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
            printTime(this.minutes, this.seconds);
        }, 1000);
    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        return Math.floor(this.currentTime % 60);
    }

    twoDigitsNumber(number) {
        if(number >= 10){
            return ""+number;
        }else{
            return '0'.concat(number);
        }
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());

    }

    setMilliseconds() {
        
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime= 0;
    }

    splitClick() {

    }
}

let crono = new Chronometer();

