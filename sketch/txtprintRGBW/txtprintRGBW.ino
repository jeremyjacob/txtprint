#include <WebUSB.h>

/**
 * Creating an instance of WebUSBSerial will add an additional USB interface to
 * the device that is marked as vendor-specific (rather than USB CDC-ACM) and
 * is therefore accessible to the browser.
 *
 * The URL here provides a hint to the browser about what page the user should
 * navigate to to interact with the device.
 */
WebUSB WebUSBSerial(1 /* https:// */, "txtprint.us");

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN            6
#define NUMPIXELS      16


#define Serial WebUSBSerial

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRBW + NEO_KHZ800);

int delayval = 50;


void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n> ");
  Serial.flush();
  pixels.begin();
}

void loop() {
  if (Serial && Serial.available()) {
    String incoming = Serial.readString();
    Serial.println(incoming);
    if (incoming == "red") {setStrip(255,0,0,0);}
    else if (incoming == "green") {setStrip(0,255,0,0);}
    else if (incoming == "blue") {setStrip(0,0,255,0);}
    else if (incoming == "yellow") {setStrip(255,255,0,0);}
    else if (incoming == "cyan") {setStrip(0,255,255,0);}
    else if (incoming == "purple") {setStrip(255,0,255,0);}
    else if (incoming == "pink") {setStrip(255,0,255,200);}
    else if (incoming == "white") {setStrip(0,0,0,255);}
    else {setStrip(0,0,0,0);}
    
    Serial.write('#');
    Serial.flush();
  }
}

void setStrip(int red, int green, int blue, int white) {
    for(int i=0;i<NUMPIXELS;i++){
    pixels.setPixelColor(i, red, green, blue, white);
    pixels.show(); // This sends the updated pixel color to the hardware.
    delay(delayval); // Delay for a period of time (in milliseconds).
  }
}
bool StartsWith(const char *a, const char *b)
{
   if(strncmp(a, b, strlen(b)) == 0) return 1;
   return 0;
}
