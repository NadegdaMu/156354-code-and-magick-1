'use strict';

document.querySelector('.setup').classList.remove('hidden');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция возвращающая случайный елемент массива
var getRandomItem = function (array) {
  var randomIndex = array[Math.floor(Math.random() * (array.length))];
  return randomIndex;
};

// Функция генерирующая персонажей игры
var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomItem(names) + ' ' + getRandomItem(surname);
    wizards[i].mantle = getRandomItem(coatColor);
    wizards[i].eyes = getRandomItem(eyesColor);
  }
  return wizards;
};

var wizardsHero = getWizards();

// Функция отрисовки скажочных героев
var renderWizard = function (array) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = array.name;
  wizardElement.querySelector('.wizard-coat').style.fill = array.mantle;
  wizardElement.querySelector('.wizard-eyes').style.fill = array.eyes;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsHero.length; i++) {
  fragment.appendChild(renderWizard(wizardsHero[i]));
}
similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
