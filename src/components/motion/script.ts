/* Runs in <head> before the first paint and sets html[data-motion]: "on",
   "off" when the visitor has paused motion, or "reduced" when the operating
   system asks for less motion. syncMotion() in ./state keeps it current. */
export const motionScript = `(function(){var m="on";try{if(localStorage.getItem("motion")==="off")m="off"}catch(e){}if(matchMedia("(prefers-reduced-motion: reduce)").matches)m="reduced";document.documentElement.dataset.motion=m})()`;
