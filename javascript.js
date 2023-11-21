
    function calculateCalories() {
      const orijenCalories = 4.12;
      const kitcatCalories = 0.47;
      const royalCaninCalories = 1;

      const food1Grams = parseFloat(document.getElementById('food1Input').value) || 0;
      const food2Grams = parseFloat(document.getElementById('food2Input').value) || 0;
      const food3Grams = parseFloat(document.getElementById('food3Input').value) || 0;

      const totalCalories = (food1Grams * orijenCalories) + (food2Grams * kitcatCalories) + (food3Grams * royalCaninCalories);

      document.getElementById('totalCalories').textContent = totalCalories.toFixed(2);

      const statusBox = document.getElementById('statusBox');
      if (totalCalories < 180) {
        statusBox.className = 'statusHungry';
        statusBox.innerHTML = '<h2>Bonnie is Still Hungry</h2>';
      } else if (totalCalories >= 180 && totalCalories <= 220) {
        statusBox.className = 'statusMaybe';
        statusBox.innerHTML = '<h2>Bonnie Maybe Hungry</h2>';
      } else {
        statusBox.className = 'statusFull';
        statusBox.innerHTML = '<h2>Bonnie is Full</h2>';
      }
    }
