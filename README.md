
> Open this page at [https://softsmyth.github.io/lectrify-b4k/](https://softsmyth.github.io/lectrify-b4k/)
## Where to obtain
### BrickBit
* Can be ordered here: [https://www.lectrify.it/products/brickbit](https://www.lectrify.it/products/brickbit)
## Usage
### DC motor control #bricks4kidz-motora
* supply direction and power as -100 to 100 where negative speed is reverse
```blocks
input.onButtonPressed(Button.B, function () {
    bricks4kidz.motorA(-100)
    bricks4kidz.motorB(-100)
    basic.pause(2000)
    bricks4kidz.motorA(100)
    bricks4kidz.motorB(100)
    basic.pause(2000)
    bricks4kidz.motorA(-50)
    bricks4kidz.motorB(50)
    basic.pause(2000)
    bricks4kidz.motorA(25)
    bricks4kidz.motorB(-25)
    basic.pause(2000)
    bricks4kidz.motorA(0)
    bricks4kidz.motorB(0)
})
```
### Servo control
* supply an angle of 0 to 360 for servo 360
* supply an angle of 0 to 180 for servo 180
* note servo 360 block is specifically written to use 360 degree servos
```blocks
input.onButtonPressed(Button.A, function () {
    bricks4kidz.servo3601(0)
    basic.pause(2000)
    bricks4kidz.servo3601(180)
    basic.pause(2000)
    bricks4kidz.servo3601(360)
    basic.pause(2000)
    bricks4kidz.servo3601(0)
    basic.pause(5000)
    bricks4kidz.servo1802(0)
    basic.pause(2000)
    bricks4kidz.servo1802(90)
    basic.pause(2000)
    bricks4kidz.servo1802(180)
    basic.pause(2000)
    bricks4kidz.servo1802(0)
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
