/** bricks4kidz handler */
//% icon="\uf1b3" color=#0000FF
namespace bricks4kidz {
    /**
     * DC motor A direction and power. 
     * @param power from 0 to 100 with - sign indicating reverse direction
     */
    //% blockId=b4kdcmotora
    //% block="DC motor A direction and power $power"
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

    /**
     * DC motor B direction and power.
     * @param power from 0 to 100 with - sign indicating reverse direction
     */
    //% blockId=b4kdcmotorb
    //% block="DC motor B direction and power $power"
    //% power.min=-100 power.max=100
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

    /**
     * 360 degree Servo 1 positioning. 
     * @param angle from 0 to 360
     */
    //% blockId=b4k360servoOne
    //% block="360 servo 1 angle $angle"
    //% angle.min=0 angle.max=360
    export function servo3601(angle: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(angle, 0, 360, 0, 180))
    }

    /**
     * 360 degree Servo 2 positioning.
     * @param angle from 0 to 360
     */
    //% blockId=b4k360servoTwo
    //% block="360 servo 2 angle $angle"
    //% angle.min=0 angle.max=360
    export function servo3602(angle: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(angle, 0, 360, 0, 180))
    }

    /**
     * 180 degree Servo 1 positioning.
     * @param angle from 0 to 180
     */
    //% blockId=b4k180servoOne
    //% block="180 servo 1 angle $angle"
    //% angle.min=0 angle.max=180
    export function servo1801(angle: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(angle, 0, 180, 0, 180))
    }

    /**
     * 180 degree Servo 2 positioning.
     * @param angle from 0 to 180
     */
     //% blockId=b4k180servoTwo
    //% block="180 servo 2 angle $angle"
    //% angle.min=0 angle.max=180
    export function servo1802(angle: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(angle, 0, 180, 0, 180))
    }

}

