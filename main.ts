enum Scrolls {
    //% block="Fwd"
    Fwd = 0,
    //% block="Rev"
    Rev = 1,
    //% block="Stop"
    Stop = 2
}

namespace Bricks4Kidz {
    /** Bricks4Kidz handler */

    //% blockId=dcmotora
    //% block="DC Motor A $adir, $apwr"
    //% adir.min=0 adir.max=2
    //% apwr.min=0 apwr.max=1023
    export function motorA(adir: Scrolls, apwr: number) {
        pins.digitalWritePin(DigitalPin.P14, adir)
        if (adir < 2) {
            pins.analogWritePin(AnalogPin.P15, apwr)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
        }

    }

    //% blockId=dcmotorb
    //% block="DC Motor B $bdir, $bpwr"
    //% bdir.min=0 bdir.max=2
    //% bpwr.min=0 bpwr.max=1023
    export function motorB(bdir: Scrolls, bpwr: number) {
        pins.digitalWritePin(DigitalPin.P13, bdir)
        if (bdir < 2) {
            pins.analogWritePin(AnalogPin.P12, bpwr)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        
    }
    
    //% blockId=servoOne
    //% block="Servo 1 $ang1"
    //% ang1.min=0 ang1.max=360
    export function servo1(ang1: number) {
        pins.servoWritePin(AnalogPin.P1, ang1 / 2)
    }
    
    //% blockId=servoTwo
    //% block="Servo 2 $ang2"
    //% ang2.min=0 ang2.max=360
    export function servo2(ang2: number) {
        pins.servoWritePin(AnalogPin.P2, ang2 / 2)
    }
    
}

