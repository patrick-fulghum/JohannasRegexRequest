
function genRegEx(x) {
  var myStr = "(";
  for (i = 0; i < 1000; i++) {
    var kappa = i + "";
    while (kappa.length < x) {
      kappa = "0" + kappa;
    }
    if (i !== 999) {
      kappa += "|";
    }
    myStr += kappa;
  }
  myStr
  return (myStr + ")");
}
var kappa = new RegExp(genRegEx(3), 'g');
var testString = "2349834958efgkjrjkbkhb3498348yy734fnkhbe377y37y34fvbdbhbkvre7y7833ri";
var m;

while (m = kappa.exec(testString)) {
  console.log(m[1]);
}
