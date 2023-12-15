document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numOffspring').addEventListener('input', validateNumOffspring);
});

function validateNumOffspring() {
    var numOffspring = document.getElementById('numOffspring').value;
    if (numOffspring < 1) {
        document.getElementById('numOffspring').value = 1;
    }
}

function generateOffspring() {
    var parent1Trait1 = document.getElementById('parent1Trait1').value;
    var parent1Trait2 = document.getElementById('parent1Trait2').value;
    var parent2Trait1 = document.getElementById('parent2Trait1').value;
    var parent2Trait2 = document.getElementById('parent2Trait2').value;
    var numOffspring = parseInt(document.getElementById('numOffspring').value) || 1;

    var offspringResults = document.getElementById('offspringResults');
    offspringResults.innerHTML = '';

    var totalOffspring = 0;
    var traitCombinationCount = {};

    for (var i = 1; i <= numOffspring; i++) {
        var offspringTrait1 = getRandomTrait(parent1Trait1, parent2Trait1);
        var offspringTrait2 = getRandomTrait(parent1Trait2, parent2Trait2);

        var traitCombination = `${offspringTrait1} - ${offspringTrait2}`;
        traitCombinationCount[traitCombination] = (traitCombinationCount[traitCombination] || 0) + 1;
        totalOffspring++;
    }

    Object.keys(traitCombinationCount).forEach(function (combination) {
        var percentage = (traitCombinationCount[combination] / totalOffspring) * 100;
        var resultText = `Kombinasi ${combination}: ${traitCombinationCount[combination]} anak (${percentage.toFixed(2)}%)`;
        var resultElement = document.createElement('p');
        resultElement.textContent = resultText;
        offspringResults.appendChild(resultElement);
    });
}

function getRandomTrait(trait1, trait2) {
    var traits = [trait1, trait2];
    var randomIndex = Math.floor(Math.random() * traits.length);
    return traits[randomIndex];
}
