
> Open this page at [https://softsmyth.github.io/lectrify-b4k/](https://softsmyth.github.io/lectrify-b4k/)
## Usage
### DC motor control
* supply direction (0 or 1) and 2 to stop followed by speed 0 to 1023
```blocks
input.onButtonPressed(Button.A, function () {
    b4k.leftDCmotor(0, 1023)
    b4k.rightDCmotor(0, 1023)
    basic.pause(1000)
    b4k.leftDCmotor(1, 1023)
    b4k.rightDCmotor(1, 1023)
    basic.pause(1000)
    b4k.leftDCmotor(0, 1023)
    b4k.rightDCmotor(1, 1023)
    basic.pause(1000)
    b4k.leftDCmotor(1, 1023)
    b4k.rightDCmotor(0, 1023)
    basic.pause(1000)
    b4k.leftDCmotor(2, 1023)
    b4k.rightDCmotor(2, 1023)
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
