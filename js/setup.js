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

// Функция генерирующая один объект
var wizardItem = function () {
  var wizard = {};
  wizard.name = getRandomItem(names) + ' ' + getRandomItem(surname);
  wizard.mantle = getRandomItem(coatColor);
  wizard.eyes = getRandomItem(eyesColor);
  return wizard;
};


// Функция генерирующая персонажей игры
var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = wizardItem(i);
  }
  return wizards;
};

var wizardsHero = getWizards();

// Функция отрисовки сказочных героев
var renderWizard = function (array) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = array.name;
  wizardElement.querySelector('.wizard-coat').style.fill = array.mantle;
  wizardElement.querySelector('.wizard-eyes').style.fill = array.eyes;
  return wizardElement;
};

// Отрисовка сгенерированных DOM елементов
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsHero.length; i++) {
  fragment.appendChild(renderWizard(wizardsHero[i]));
}
similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
