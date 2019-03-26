( () => {
  var a, b = new TextEncoder;
  document.addEventListener("DOMContentLoaded", function(k) {
    function c() {
      console.log("Connecting to " + a.device_.productName + "...");
      tsSubtext.classList.remove('dialog');
      a.connect().then(function() {
        console.log(a);
        console.log("Connected.");
        e.classList.add("enabled");
        f.innerHTML = "print some text";
        g = !0;
        a.onReceive = function(a) {
          var l = new TextDecoder;
          l.decode(a).includes("#") ? (h.innerHTML = "printed", d.classList.remove("printing")) : console.log(l.decode(a));
        };
        a.onReceiveError = function(a) {
          e.classList.remove("enabled");
          f.innerHTML = "click to connect device";
          g = !1;
          console.log("Receive error: " + a);
        };
      }, function(a) {
        console.log("Connection error: " + a);
        tsSubtext.classList.remove('dialog');
      });
    }
    var f = document.querySelectorAll(".tsSubtext"), g = !1, d = document.querySelector("#text"), e = document.querySelector("#print"), h = document.querySelector("#textStatus");
    e.addEventListener("click", function() {
      !0 === g ? (d.classList.add("printing"), h.innerHTML = "printing", console.log(b.encode(d.value)), a.send(b.encode(d.value.split(/(?:\r\n|\r|\n)/g).join("/n")))["catch"](function(a) {
        console.log("Send error: " + a);
        h.innerHTML = "failed";
        d.classList.remove("printing");
      })) : console.log("Can't print; not connected");
    });
    f.forEach(function(b) {
      b.addEventListener("click", function() {
        tsSubtext.classList.add('dialog');
        a ? (a.disconnect(), e.classList.remove("enabled"), f.innerHTML = "click to connect device", g = !1, a = null) : serial.requestPort().then(function(b) {
          a = b;
          c();
        })["catch"](function(a) {
          console.log("Connection error: " + a);
          tsSubtext.classList.remove('dialog');
        });
      });
    });
    serial.getPorts().then(function(b) {
      0 !== b.length && (a = b[0], c());
    });
  });
})();
var serial = {};
(function() {
  serial.getPorts = function() {
    return navigator.usb.getDevices().then(function(a) {
      return a.map(function(a) {
        return new serial.Port(a);
      });
    });
  };
  serial.requestPort = function() {
    return navigator.usb.requestDevice({filters:[{vendorId:9114, productId:32780}]}).then(function(a) {
      return new serial.Port(a);
    });
  };
  serial.Port = function(a) {
    this.device_ = a;
    this.interfaceNumber_ = 2;
    this.endpointIn_ = 5;
    this.endpointOut_ = 4;
  };
  serial.Port.prototype.connect = function() {
    var a = this, b = function() {
      a.device_.transferIn(a.endpointIn_, 64).then(function(k) {
        a.onReceive(k.data);
        b();
      }, function(b) {
        a.onReceiveError(b);
      });
    };
    return this.device_.open().then(function() {
      if (null === a.device_.configuration) {
        return a.device_.selectConfiguration(1);
      }
    }).then(function() {
      a.device_.configuration.interfaces.forEach(function(b) {
        b.alternates.forEach(function(c) {
          255 == c.interfaceClass && (a.interfaceNumber_ = b.interfaceNumber, c.endpoints.forEach(function(b) {
            "out" == b.direction && (a.endpointOut_ = b.endpointNumber);
            "in" == b.direction && (a.endpointIn_ = b.endpointNumber);
          }));
        });
      });
    }).then(function() {
      return a.device_.claimInterface(a.interfaceNumber_);
    }).then(function() {
      return a.device_.selectAlternateInterface(a.interfaceNumber_, 0);
    }).then(function() {
      return a.device_.controlTransferOut({requestType:"class", recipient:"interface", request:34, value:1, index:a.interfaceNumber_});
    }).then(function() {
      b();
    });
  };
  serial.Port.prototype.disconnect = function() {
    var a = this;
    return this.device_.controlTransferOut({requestType:"class", recipient:"interface", request:34, value:0, index:this.interfaceNumber_}).then(function() {
      return a.device_.close();
    });
  };
  serial.Port.prototype.send = function(a) {
    return this.device_.transferOut(this.endpointOut_, a);
  };
})();