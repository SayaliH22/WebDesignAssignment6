var sw = {
    etime : null, 
    ereset : null, 
    estart : null,
    estop : null, 
    timer : null, 
    now : 0,
  
    init : () => {
      sw.etime = document.getElementById("timer");
      sw.ereset = document.getElementById("resetbtn");
      sw.estart = document.getElementById("startbtn");
      sw.estop = document.getElementById("stopbtn");
  
      sw.ereset.onclick = sw.reset;
      sw.estart.onclick = sw.start;
      sw.estop.onclick = sw.stop;
      sw.ereset.disabled = false;
      sw.estart.disabled = false;
      sw.estop.disabled = false;
    },
  
    start : () => {
      sw.timer = setInterval(sw.tick, 1000);
      sw.estart.value = "Start";
      sw.estart.onclick = sw.start;
      sw.estart.classList.add("disable");
    },
  
    stop : () => {
      clearInterval(sw.timer);
      sw.timer = null;
      sw.estop.value = "Stop";
      sw.estop.onclick = sw.stop;
      sw.estart.classList.remove("disable");
    },
  
    tick : () => {
      sw.now++;
      let hours = 0, mins = 0, secs = 0,
      remain = sw.now;
      hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      mins = Math.floor(remain / 60);
      remain -= mins * 60;
      secs = remain;
  
      if (hours<10) { hours = "0" + hours; }
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },
  
    reset : () => {
      if (sw.timer != null) { sw.stop(); }
      sw.now = -1;
      sw.tick();
    }
  };
  window.addEventListener("load", sw.init);