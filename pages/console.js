// I basically have no idea what half the shit in here does (even though I wrote it), but all you need to know is it handles printing and WebUSB

(function() {
  var port;
  let textEncoder = new TextEncoder();
  document.addEventListener('DOMContentLoaded', event => {
    var connectButtons = document.querySelectorAll('.tsStatus');
    var connected = false;
    let tsCover = document.querySelector('#tsCover');
    let box = document.querySelector('#text');
    let printButton = document.querySelector('#print');
    let typing = document.querySelector('#textStatus');
    function connect() {
      console.log('Connecting to ' + port.device_.productName + '...');
      port.connect().then(() => {
        console.log(port);
        console.log('Connected.');
        tsCover.classList.remove('down');
        Object.assign(printButton.style,{'background-color':'#6AC761EE'});
        printButton.style.cursor = "pointer";
        document.getElementById('tsDisconnected').style.opacity = '0';
        document.getElementById('tsConnected').style.opacity = '1';
        console.log("1");
        connected = true;
        port.onReceive = data => {
          let textDecoder = new TextDecoder();
          if (textDecoder.decode(data).includes('#')) {
            typing.innerHTML = "printed";
            box.classList.remove('printing');
          } else {console.log(textDecoder.decode(data));}
          
          
        };
        port.onReceiveError = error => {
            tsCover.classList.remove('down');
            document.getElementById('tsDisconnected').style.opacity = '1';
            document.getElementById('tsConnected').style.opacity = '0';
            console.log("2");
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
      console.log(box.value);
      port.send(textEncoder.encode(box.value)).catch(error => {
        console.log('Send error: ' + error);
        typing.innerHTML = "failed";
        box.classList.remove('printing');
      });
    }});
    
    connectButtons.forEach(function(elem) {
        elem.addEventListener('click', function() {
          tsCover.classList.add('down');
          if (port) {
            port.disconnect();
            tsCover.classList.remove('down');
            console.log("3");
            document.getElementById('tsDisconnected').style.opacity = '1';
            document.getElementById('tsConnected').style.opacity = '0';
            console.log("3.5");
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
              tsCover.classList.remove('down');
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