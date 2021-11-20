function getresult(num) {
    var screen = document.getElementById("result")
    result.value += num 
}
function getremove() {
    var screen = document.getElementById("result")
    result.value = ""
}
function getanswer() {
    var screen = document.getElementById("result")
    result.value = eval(result.value)
}