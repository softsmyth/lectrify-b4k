// tests go here; this will not be compiled when this package is used as an extension.
//The following will test that both DC motors A and B rotate in both directions at full power
bricks4kidz.motorA(100);
bricks4kidz.motorB(100);
bricks4kidz.motorA(-100);
bricks4kidz.motorB(-100);
//The following will test the DC motors A and B stop
bricks4kidz.motorA(0);
bricks4kidz.motorB(0);
//Position 360 degree servo 1 to 0 degrees
bricks4kidz.servo3601(0);
basic.pause(1000);
//Rotate 360 degree servo 1 to 180 degrees
bricks4kidz.servo3601(180);
basic.pause(1000);
//Rotate 360 degree servo 1 to 360 degrees
bricks4kidz.servo3601(360);
basic.pause(1000);
//Position 180 degree servo 2 to 0 degrees
bricks4kidz.servo1802(0);
basic.pause(1000);
//Rotate 180 degree servo 2 to 90 degrees
bricks4kidz.servo1802(90);
basic.pause(1000);
//Rotate 180 degree servo 2 to 180 degrees
bricks4kidz.servo1802(180);