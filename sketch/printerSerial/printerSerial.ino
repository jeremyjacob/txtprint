#include <WebUSB.h>
WebUSB WebUSBSerial(1 /* https:// */, "txtprint.us");
#define Serial WebUSBSerial

#include "Adafruit_Thermal.h"

// Here's the new syntax when using SoftwareSerial (e.g. Arduino Uno) ----
// If using hardware serial instead, comment out or remove these lines:

#include "SoftwareSerial.h"
#define TX_PIN 5 // Arduino transmit  YELLOW WIRE  labeled RX on printer
#define RX_PIN 9 // Arduino receive   GREEN WIRE   labeled TX on printer

SoftwareSerial mySerial(RX_PIN, TX_PIN); // Declare SoftwareSerial obj first
Adafruit_Thermal printer(&mySerial);     // Pass addr to printer constructor


void setup() {
  mySerial.begin(9600);  // Initialize SoftwareSerial
  printer.begin();
  Serial.begin(9600);
}

void loop() {
    if (Serial && Serial.available()) {
    String incoming = Serial.readString();
    Serial.println(incoming);
    if (incoming.startsWith("*")) {
      incoming.remove(0,1);
      printer.boldOn();
      printer.println(incoming);
      printer.boldOff();
    } else if (incoming.startsWith("_")) {
      incoming.remove(0,1);
      printer.underlineOn();
      printer.println(incoming);
      printer.underlineOff();
    } else if (incoming.startsWith("?")) {
      incoming.remove(0,1);
      printer.inverseOn();
      printer.println(incoming);
      printer.inverseOff();
    } else if (incoming.startsWith("!")) {
      incoming.remove(0,1);
      printer.doubleHeightOn();
      printer.println(incoming);
      printer.doubleHeightOff();
    } else if (incoming.startsWith("|")) {
      incoming.remove(0,1);
      printer.justify('C');
      printer.println(incoming);
      printer.justify('L');
    } else if (incoming.startsWith("/")) {
      incoming.remove(0,1);
      printer.justify('R');
      printer.println(incoming);
      printer.justify('L');
    } else if (incoming.startsWith("@L")) {
      incoming.remove(0,2);
      printer.setSize('L');
      printer.println(incoming);
      printer.setSize('S');
    } else if (incoming.startsWith("@M")) {
      incoming.remove(0,2);
      printer.setSize('M');
      printer.println(incoming);
      printer.setSize('S');
    }
    else {printer.println(incoming);}
    Serial.write('#');
    Serial.flush();
  }

}
