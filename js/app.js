$(document).foundation()

const $offCanvas = $("#offCanvas")
$offCanvas.find("li").click(function(ev) {
  $offCanvas.foundation("close")
})