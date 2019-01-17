// Handles WebUSB connection

(function() {
  var port;
  var textEncoder = new TextEncoder();
  document.addEventListener('DOMContentLoaded', event => {
    var connectButtons = document.querySelectorAll('.tsStatus');
    var connected = false;
    var box = document.querySelector('#text');
    var printButton = document.querySelector('#print');
    var typing = document.querySelector('#textStatus');
    function connect() {
      console.log('Connecting to ' + port.device_.productName + '...');
      port.connect().then(() => {
        console.log(port);
        console.log('Connected.');
        printButton.classList.add('enabled');
        document.getElementById('tsDisconnected').style.visibility = 'hidden';
        document.getElementById('tsConnected').style.visibility = 'visible';
        connected = true;
        port.onReceive = data => {
          var textDecoder = new TextDecoder();
          if (textDecoder.decode(data).includes('#')) {
            typing.innerHTML = "printed";
            box.classList.remove('printing');
          } else {console.log(textDecoder.decode(data));}
          
          
        };
        port.onReceiveError = error => {
            document.getElementById('tsDisconnected').style.visibility = 'visible';
            document.getElementById('tsConnected').style.visibility = 'hidden';
            printButton.classList.remove('enabled');
            connected = false;
          console.log('Receive error: ' + error);
        };
      }, error => {
        console.log('Connection error: ' + error);
        
      });
      
    }
    //Listen for button press and send textInput.value to arduino
    printButton.addEventListener('click', function  () {
    if (connected === true) {
      box.classList.add('printing');
      typing.innerHTML = "printing";
      console.log(textEncoder.encode(box.value));
      //console.log(box.value);
      port.send(textEncoder.encode(box.value.split(/(?:\r\n|\r|\n)/g).join('/n'))).catch(error => {
        console.log('Send error: ' + error);
        typing.innerHTML = "failed";
        box.classList.remove('printing');
      });
    } else {console.log("Can't print; not connected");}
  });

    connectButtons.forEach(function(elem) {
        elem.addEventListener('click', function() {
          if (port) {
            port.disconnect();
            document.getElementById('tsDisconnected').style.visibility = 'visible';
            document.getElementById('tsConnected').style.visibility = 'hidden';
            printButton.classList.remove('enabled');
            connected = false;
            port = null;
          } else {
            serial.requestPort().then(selectedPort => {
              port = selectedPort;
              connect();
            }).catch(error => {
              
              console.log('Connection error: ' + error);
            });
          }
          
        });
    });
    serial.getPorts().then(ports => {
      if (ports.length === 0) {
        // console.log('No devices found.');
      } else {
        port = ports[0];
        connect();
      }
    });
  });
})();

var serial={};
(function(){serial.getPorts=function(){return navigator.usb.getDevices().then(function(a){return a.map(function(a){return new serial.Port(a)})})};serial.requestPort=function(){return navigator.usb.requestDevice({filters:[{vendorId:9114,productId:32780}]}).then(function(a){return new serial.Port(a)})};serial.Port=function(a){this.device_=a;this.interfaceNumber_=2;this.endpointIn_=5;this.endpointOut_=4};serial.Port.prototype.connect=function(){var a=this,c=function(){a.device_.transferIn(a.endpointIn_,64).then(function(b){a.onReceive(b.data);
c()},function(b){a.onReceiveError(b)})};return this.device_.open().then(function(){if(null===a.device_.configuration)return a.device_.selectConfiguration(1)}).then(function(){a.device_.configuration.interfaces.forEach(function(b){b.alternates.forEach(function(c){255==c.interfaceClass&&(a.interfaceNumber_=b.interfaceNumber,c.endpoints.forEach(function(b){"out"==b.direction&&(a.endpointOut_=b.endpointNumber);"in"==b.direction&&(a.endpointIn_=b.endpointNumber)}))})})}).then(function(){return a.device_.claimInterface(a.interfaceNumber_)}).then(function(){return a.device_.selectAlternateInterface(a.interfaceNumber_,
0)}).then(function(){return a.device_.controlTransferOut({requestType:"class",recipient:"interface",request:34,value:1,index:a.interfaceNumber_})}).then(function(){c()})};serial.Port.prototype.disconnect=function(){var a=this;return this.device_.controlTransferOut({requestType:"class",recipient:"interface",request:34,value:0,index:this.interfaceNumber_}).then(function(){return a.device_.close()})};serial.Port.prototype.send=function(a){return this.device_.transferOut(this.endpointOut_,a)}})();