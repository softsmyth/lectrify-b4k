
> Open this page at [https://softsmyth.github.io/lectrify-b4k/](https://softsmyth.github.io/lectrify-b4k/)
## Usage
### DC motor control
* supply direction as Fwd, Rev, or Stop followed by speed 0 to 100
```blocks
input.onButtonPressed(Button.B, function () {
    Bricks4Kidz.motorA(Scrolls.Fwd, 100)
    Bricks4Kidz.motorB(Scrolls.Fwd, 100)
    basic.pause(2000)
    Bricks4Kidz.motorA(Scrolls.Rev, 100)
    Bricks4Kidz.motorB(Scrolls.Rev, 100)
    basic.pause(2000)
    Bricks4Kidz.motorA(Scrolls.Fwd, 50)
    Bricks4Kidz.motorB(Scrolls.Rev, 50)
    basic.pause(2000)
    Bricks4Kidz.motorA(Scrolls.Rev, 25)
    Bricks4Kidz.motorB(Scrolls.Fwd, 25)
    basic.pause(2000)
    Bricks4Kidz.motorA(Scrolls.Stop, 25)
    Bricks4Kidz.motorB(Scrolls.Stop, 25)
})
```
### Servo control
* supply an angle of 0 to 360
* note this block is specifically written to use 360 degree servos
```blocks
input.onButtonPressed(Button.A, function () {
    Bricks4Kidz.servo1(360)
    basic.pause(2000)
    Bricks4Kidz.servo1(180)
    basic.pause(2000)
    Bricks4Kidz.servo1(90)
    basic.pause(2000)
    Bricks4Kidz.servo1(0)
    basic.pause(2000)
    Bricks4Kidz.servo2(360)
    basic.pause(2000)
    Bricks4Kidz.servo2(180)
    basic.pause(2000)
    Bricks4Kidz.servo2(90)
    basic.pause(2000)
    Bricks4Kidz.servo2(0)
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
