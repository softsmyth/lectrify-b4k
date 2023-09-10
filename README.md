
> Open this page at [https://softsmyth.github.io/lectrify-b4k/](https://softsmyth.github.io/lectrify-b4k/)
## Usage
### DC motor control
* supply direction as Fwd, Rev, or Stop followed by speed 0 to 1023
```blocks
input.onButtonPressed(Button.B, function () {
    b4k.motorA(Scrolls.Fwd, 1023)
    b4k.motorB(Scrolls.Fwd, 1023)
    basic.pause(2000)
    b4k.motorA(Scrolls.Rev, 1023)
    b4k.motorB(Scrolls.Rev, 1023)
    basic.pause(2000)
    b4k.motorA(Scrolls.Fwd, 512)
    b4k.motorB(Scrolls.Rev, 512)
    basic.pause(2000)
    b4k.motorA(Scrolls.Rev, 256)
    b4k.motorB(Scrolls.Fwd, 256)
    basic.pause(2000)
    b4k.motorA(Scrolls.Stop, 256)
    b4k.motorB(Scrolls.Stop, 256)
})
```
### Servo control
* supply an angle of 0 to 360
* note this block is specifically written to use 360 degree servos
```blocks
input.onButtonPressed(Button.A, function () {
    b4k.servo1(360)
    basic.pause(2000)
    b4k.servo1(180)
    basic.pause(2000)
    b4k.servo1(90)
    basic.pause(2000)
    b4k.servo1(0)
    basic.pause(2000)
    b4k.servo2(360)
    basic.pause(2000)
    b4k.servo2(180)
    basic.pause(2000)
    b4k.servo2(90)
    basic.pause(2000)
    b4k.servo2(0)
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/softsmyth/lectrify-b4k** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/softsmyth/lectrify-b4k** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
