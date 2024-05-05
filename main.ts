namespace Bricks4Kidz {
    /** Bricks4Kidz handler */

    //% blockId=dcmotora
    //% block="DC Motor A $power"
    //% power.min=-100 power.max=100
    export function motorA(power: number) {
        if (power < 0) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P15, pins.map(power * -1, 0, 100, 0, 1023))
        } else if (power > 0) {
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.analogWritePin(AnalogPin.P15, pins.map(power, 0, 100, 0, 1023))
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
    }

    //% blockId=dcmotorb
    //% block="DC Motor B $power"
    //% bpwr.min=-100 bpwr.max=100
    export function motorB(power: number) {
        if (power<0){
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P12, pins.map(power*-1, 0, 100, 0, 1023))
        } else if (power>0){
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P12, pins.map(power, 0, 100, 0, 1023))
        }else{
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
    }

    //% blockId=servoOne
    //% block="Servo 1 $angle"
    //% angle.min=-180 angle.max=180
    export function servo1(angle: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(angle, -180, 180, 0, 180))
    }

    //% blockId=servoTwo
    //% block="Servo 2 $angle"
    //% angle.min=-180 angle.max=180
    export function servo2(angle: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(angle, -180, 180, 0, 180))
    }

}

