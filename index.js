var calculation = function () {
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var numberOfPeople = document.getElementById('numberOfPeople').value;
  var totalBill = 0;

  switch (serviceQuality) {
    case 'Excelent.':
      totalBill = billAmount * 1.5;
      break;
    case 'Very Good.':
      totalBill = billAmount * 1.4;
      break;
    case 'Good.':
      totalBill = billAmount * 1.3;
      break;
    case 'Bad.':
      totalBill = billAmount * 1.2;
      break;
    case 'Very Bad.':
      totalBill = billAmount * 1.1;
      break;
    default:
      totalBill = billAmount;
      break;
  }
  var tip = totalBill - billAmount;
  var each = tip / numberOfPeople;
  var space = '                    ';
  var text2 = 'each:     ' + each + "$";
  var text1 = 'The tip is:      ' + tip + "$";
  document.getElementById('result1').innerHTML = text1 + space + text2;

  var text = 'In total each one pays:      ';
  document.getElementById('result').innerHTML =
    text + totalBill / numberOfPeople + '$     ';
};
document.getElementById('calculate').addEventListener('click', function () {
  calculation();
});
