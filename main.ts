namespace b4k{
    /*
    *   b4k handler
    */
    //% blockId=leftdcmotor
    //% block="Left DC Motor $ldir, $lpwr"
    //% ldir.min=0 ldir.max=2
    //% lpwr.min=0 lpwr.max=1023
    export function leftDCmotor(ldir: number,lpwr: number){
        pins.digitalWritePin(DigitalPin.P13, ldir);
        if(ldir<2){
            pins.analogWritePin(AnalogPin.P12, lpwr);
        }else{
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        
    }
    //% blockId=rightDCmotor
    //% block="Right DC Motor $rdir, $rpwr"
    //% rdir.min=0 rdir.max=2
    //% rpwr.min=0 rpwr.max=1023
    export function rightDCmotor(rdir: number, rpwr: number) {
        pins.digitalWritePin(DigitalPin.P14, rdir);
        if(rdir<2){
        pins.analogWritePin(AnalogPin.P15, rpwr);  
        }else{
            pins.digitalWritePin(DigitalPin.P15, 0)
        }      
    }

    //% blockId=servo1
    //% block="Servo 1 $ang1"
    //% ang1.min=0 ang1.max=359
    export function leftServo(ang1: number) {
        pins.servoWritePin(AnalogPin.P1, ang1)
    }

    //% blockId=servo2
    //% block="Servo 2 $ang2"
    //% ang2.min=0 ang2.max=359
    export function rightServo(ang2: number) {
        pins.servoWritePin(AnalogPin.P2, ang2)
    }
}