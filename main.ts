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
     * DC motor A direction and power.
     * @param power from 0 to 100 with - sign indicating reverse direction
     */
    //% blockId=b4kdcmotorb
    //% block="DC motor B direction and power $power"
    //% power.min=-100 power.max=100
    //% help=github:softsmyth.github.io/lectrify-b4k/README.md
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
     * 360 degree Servo 1 position.
     * @param angle from -180 to 180
     */
    //% blockId=b4k360servoOne
    //% block="360 servo 1 relative angle $angle"
    //% angle.min=-180 angle.max=180
    export function servo3601(angle: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(angle, -180, 180, 0, 180))
    }

    /**
     * 360 degree Servo 2 position.
     * @param angle from -180 to 180
     */
    //% blockId=b4k360servoTwo
    //% block="360 servo 2 relative angle $angle"
    //% angle.min=-180 angle.max=180
    export function servo3602(angle: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(angle, -180, 180, 0, 180))
    }

    /**
     * 180 degree Servo 1 position.
     * @param angle from -90 to 90
     */
    //% blockId=b4k180servoOne
    //% block="180 servo 1 relative angle $angle"
    //% angle.min=-90 angle.max=90
    export function servo1801(angle: number) {
        pins.servoWritePin(AnalogPin.P1, pins.map(angle, -90, 90, 0, 180))
    }

    /**
     * 180 degree Servo 2 position.
     * @param angle from -90 to 90
     */
     //% blockId=b4k180servoTwo
    //% block="180 servo 2 relative angle $angle"
    //% angle.min=-90 angle.max=90
    export function servo1802(angle: number) {
        pins.servoWritePin(AnalogPin.P2, pins.map(angle, -90, 90, 0, 180))
    }

}

