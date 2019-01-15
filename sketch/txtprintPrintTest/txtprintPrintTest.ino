#include "SoftwareSerial.h"
#define TX_PIN 6 // Arduino transmit  YELLOW WIRE  labeled RX on printer
#define RX_PIN 5 // Arduino receive   GREEN WIRE   labeled TX on printer
#include "Adafruit_Thermal.h"
//#include <WebUSB.h>
//WebUSB WebUSBSerial(1 /* https:// */, "txtprint.us");
#define Serial WebUSBSerial
SoftwareSerial pSerial(RX_PIN, TX_PIN); // Declare SoftwareSerial obj first
Adafruit_Thermal printer(&pSerial);

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  pSerial.begin(19200);
  Serial.write("Sketch begins.\r\n> ");
  Serial.flush();
  printer.begin();
  printer.println(F("Sketch started!"));
}

void loop() {
  if (Serial && Serial.available()) {
    String incoming = Serial.readString();
    Serial.println(incoming);
    
    
    
    
    Serial.write('#');
    Serial.flush();
  }
  
}
