namespace Bricks4Kidz {
    /** Bricks4Kidz handler */

    //% blockId=dcmotora
    //% block="DC Motor A $apwr"
    //% apwr.min=-100 apwr.max=100
    export function motorA(apwr: number) {
        if (apwr < 0) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P15, pins.map(apwr * -1, 0, 100, 0, 1023))
        } else if (apwr > 0) {
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.analogWritePin(AnalogPin.P15, pins.map(apwr, 0, 100, 0, 1023))
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
    }

    //% blockId=dcmotorb
    //% block="DC Motor B $bpwr"
    //% bpwr.min=-100 bpwr.max=100
    export function motorB(bpwr: number) {
        if(bpwr<0){
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P12, pins.map(bpwr*-1, 0, 100, 0, 1023))
        }else if(bpwr>0){
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P12, pins.map(bpwr, 0, 100, 0, 1023))
        }else{
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
    }

    //% blockId=servoOne
    //% block="Servo 1 $ang1"
    //% ang1.min=-180 ang1.max=180
    export function servo1(ang1: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(ang1, -180, 180, 0, 180))
    }

    //% blockId=servoTwo
    //% block="Servo 2 $ang2"
    //% ang2.min=-180 ang2.max=180
    export function servo2(ang2: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(ang2, -180, 180, 0, 180))
    }

}

