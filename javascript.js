
function calculateCalories() {
    const orijenCalories = 4.12;
    const kitcatCalories = 0.47;
    const royalCaninCalories = 0.952;

    const food1Grams = parseFloat(document.getElementById('food1Input').value) || 0;
    const food2Grams = parseFloat(document.getElementById('food2Input').value) || 0;
    const food3Grams = parseFloat(document.getElementById('food3Input').value) || 0;

    const totalCalories = (food1Grams * orijenCalories) + (food2Grams * kitcatCalories) + (food3Grams * royalCaninCalories);

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

  
    document.getElementById('remainingFood1').textContent = remainingFood1Grams.toFixed().toString();
    document.getElementById('remainingFood2').textContent = remainingFood2Grams.toFixed().toString();
    document.getElementById('remainingFood3').textContent = remainingFood3Grams.toFixed().toString();
}


