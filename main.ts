namespace b4k{
    /*
    *   b4k handler
    */
    //% blockId=dcmotora
    //% block="DC Motor A $adir, $apwr"
    //% adir.min=0 adir.max=2
    //% apwr.min=0 apwr.max=1023
    export function motorA(adir: number, apwr: number){
        pins.digitalWritePin(DigitalPin.P13, adir);
        if (adir<2){
            pins.analogWritePin(AnalogPin.P12, apwr);
        }else{
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        
    }
    //% blockId=dcmotorb
    //% block="DC Motor B $bdir, $bpwr"
    //% bdir.min=0 bdir.max=2
    //% bpwr.min=0 bpwr.max=1023
    export function rightDCmotor(bdir: number, bpwr: number) {
        pins.digitalWritePin(DigitalPin.P14, bdir);
        if (bdir<2){
            pins.analogWritePin(AnalogPin.P15, bpwr);
        }else{
            pins.digitalWritePin(DigitalPin.P15, 0)
        }      
    }

    //% blockId=servo1
    //% block="Servo 1 $ang1"
    //% ang1.min=0 ang1.max=360
    export function leftServo(ang1: number) {
        pins.servoWritePin(AnalogPin.P1, ang1 / 2)
    }

    //% blockId=servo2
    //% block="Servo 2 $ang2"
    //% ang2.min=0 ang2.max=360
    export function rightServo(ang2: number) {
        pins.servoWritePin(AnalogPin.P2, ang2 / 2)
    }
}