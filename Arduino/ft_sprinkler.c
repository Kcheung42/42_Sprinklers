#include <FirebaseArduino.h>
#include <SPI.h>		//included with Arduino IDE (www.arduino.cc)
#include <FirebaseArduinio.h>

#define LATCHPIN		5
#define CLOCKPIN		6
#define DATAPIN			7
#define REGISTERCOUNT	2 //Moteino IOShield has 2 daisy chained registers, if you have more adjust this number
#define SERIAL_BAUD		115200
#define FIREBASE_HOST	"https://sprink-3680f.firebaseio.com"
#define FIREBASE_AUTH	"aAxhPEhI5yKEcsQJ1AXjufYehiZ7Nm0RwdpCCBIn"

#define WIFI_SSID "SSID"
#define WIFI_PASSWORD "Password"

#ifdef SERIAL_EN
	#define DEBUG(input)	Serial.print(input)
	#define DEBUGln(input)	Serial.println(input)
#else
	#define DEBUG(input)
	#define DEBUGln(input)
#endif

typedef struct prog_t
{
	byte	programZone[32];
	byte	pogramPointer=0;
	byte	pogramSeconds[32];
} prog_s;

String str;					//String is a Data class in provided by Arduinio
String substr;
prog_s prog[7];

// get the program for the day
char *getProg(int day, prog_s schedule)
{
	char *prog;
	return (prog);
}

void setup(void)
{
	serial.begin(SERIAL_BAUD);
	pinMode(LATCHPIN, OUTPUT);
	pinMode(DATAPIN, OUTPUT);
	pinMode(CLOCKPIN, OUTPUT);

	WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
	Serial.print("connecting");
	while (WiFi.status() != WL_CONNECTED) {
		Serial.print(".");
		delay(500);
	}
	Serial.println();
	Serial.print("connected: ");
	Serial.println(WiFi.localIP());
	
	// Firebase.begin("publicdata-cryptocurrency.firebaseio.com");
	Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
	Firebase.stream("/Schedule");
}
void loop()
{
	if (Firebase.available()) //check if there are new events available from stream
	{
		FirebaseObject event = Firebase.readEvent(); // reads the next event in the stream, returns FirebaseObject

		String eventType = event.getString("type");
		eventType.tolowerCase();
		/* Serial.print("event :") */
		/* Serial.println(eventType) */

		String eventPath = event.getString("path");
		eventPath.tolowerCase();

		
	}

	whichZone=0;
	str = String(char *)
}
