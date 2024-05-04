
function calculateCalories() {
    const orijenCalories = 3.98;
    const kitcatCalories = 0.47;
    const royalCaninCalories = 1;
    const fancyFeastClassic = 1.09;
    const fancyFeastGravyLovers = 0.775;

    const food1Grams = parseFloat(document.getElementById('food1Input').value) || 0;
    const food2Grams = parseFloat(document.getElementById('food2Input').value) || 0;
    const food3Grams = parseFloat(document.getElementById('food3Input').value) || 0;
    const food4Grams = parseFloat(document.getElementById('food4Input').value) || 0;
    const food5Grams = parseFloat(document.getElementById('food5Input').value) || 0;

    const totalCalories = ((food1Grams * orijenCalories) + (food2Grams * kitcatCalories) + (food3Grams * royalCaninCalories) + (food4Grams * fancyFeastClassic) + (food5Grams * fancyFeastGravyLovers));

    document.getElementById('totalCalories').textContent = totalCalories.toFixed();

    const statusBox = document.getElementById('statusBox');
    if (totalCalories < 180) {
      statusBox.className = 'statusRed';
      statusBox.innerHTML = '<h2>Bonnie is Still Hungry</h2>';
    } else if (totalCalories >= 180 && totalCalories <= 220) {
      statusBox.className = 'statusYellow';
      statusBox.innerHTML = '<h2>Bonnie Maybe Hungry</h2>';
    } else {
      statusBox.className = 'statusGreen';
      statusBox.innerHTML = '<h2>Bonnie is Full</h2>';
    }
 
    

   const remainingFood1Grams = (220 - totalCalories) / orijenCalories;
    const remainingFood2Grams = (220 - totalCalories) / kitcatCalories;
    const remainingFood3Grams = (220 - totalCalories) / royalCaninCalories;
    const remainingFood4Grams = (220 - totalCalories) / fancyFeastClassic;
    const remainingFood5Grams = (220 - totalCalories) / fancyFeastGravyLovers;

    document.getElementById('remainingFood1').textContent = remainingFood1Grams.toFixed();
    document.getElementById('remainingFood2').textContent = remainingFood2Grams.toFixed();
    document.getElementById('remainingFood3').textContent = remainingFood3Grams.toFixed();
    document.getElementById('remainingFood4').textContent = remainingFood4Grams.toFixed();
    document.getElementById('remainingFood5').textContent = remainingFood5Grams.toFixed();
}


