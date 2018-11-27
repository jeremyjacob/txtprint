// I basically have no idea what half the shit in here does (even though I wrote it), but all you need to know is it handles printing and WebUSB

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
        Object.assign(printButton.style,{'background-color':'#6AC761EE'});
        printButton.style.cursor = "pointer";
        document.getElementById('tsDisconnected').style.opacity = '0';
        document.getElementById('tsConnected').style.opacity = '1';
        connected = true;
        port.onReceive = data => {
          var textDecoder = new TextDecoder();
          if (textDecoder.decode(data).includes('#')) {
            typing.innerHTML = "printed";
            box.classList.remove('printing');
          } else {console.log(textDecoder.decode(data));}
          
          
        };
        port.onReceiveError = error => {
            document.getElementById('tsDisconnected').style.opacity = '1';
            document.getElementById('tsConnected').style.opacity = '0';
            Object.assign(printButton.style,{'background-color':'#6e6e6e'});
            printButton.style.cursor = "not-allowed";
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
      port.send(textEncoder.encode(box.value)).catch(error => {
        console.log('Send error: ' + error);
        typing.innerHTML = "failed";
        box.classList.remove('printing');
      });
    }});
    
    Mousetrap.bind('mod+enter', function(e) {
      box.click();
      return false;
    });
    
    connectButtons.forEach(function(elem) {
        elem.addEventListener('click', function() {
          if (port) {
            port.disconnect();
            document.getElementById('tsDisconnected').style.opacity = '1';
            document.getElementById('tsConnected').style.opacity = '0';
            Object.assign(printButton.style,{'background-color':'#6e6e6e'});
            printButton.style.cursor = "not-allowed";
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
        console.log('No devices found.');
      } else {
        port = ports[0];
        connect();
      }
    });
  });
})();
