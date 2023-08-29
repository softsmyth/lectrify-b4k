namespace b4k{
    /*
    *   b4k handler
    */
    //% blockId="Left DC Motor $ldir, $lpwr"
    //% ldir.min=0 ldir.max=1
    //% lpwr.min=0 lpwr.max=1023
    export function leftDCmotor(ldir: number,lpwr: number){
        pins.digitalWritePin(DigitalPin.P13, ldir);
        pins.analogWritePin(AnalogPin.P12, lpwr);
    }
    //% blockId="Right DC Motor $rdir, $rpwr"
    //% rdir.min=0 rdir.max=1
    //% rpwr.min=0 rpwr.max=1023
    export function rightDCmotor(rdir: number, rpwr: number) {
        pins.digitalWritePin(DigitalPin.P14, rdir);
        pins.analogWritePin(AnalogPin.P12, rpwr);
    }
    export function leftServo(angle: number) {
        
    }
    export function rightServo(angle: number) {

    }
}