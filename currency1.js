function sivamtime() {
  now=new Date();
  hour=now.getHours();
  min=now.getMinutes();
  sec=now.getSeconds();
  if (min<=9) { min="0"+min; }
  if (sec<=9) { sec="0"+sec; }
  if (hour>12) { hour=hour-12; add="PM"; } else { hour=hour; add="AM"; }
  if (hour==12) { add="PM"; }
  document.getElementById("field").innerHTML = ((hour<=9) ? "0"+hour : hour) + ":" + min + " " + add;
  setTimeout("sivamtime()", 1000);
}
window.onload = sivamtime;
