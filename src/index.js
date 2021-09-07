'use strict';

import { valid, valid2, valid3 } from './modules/formValidator';
import maskPhone from './modules/maskPhone';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import toggleImageCommand from './modules/toggleImageCommand';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import carousel from './modules/myCarouselSlider';


//Валидация формы
valid.init();
valid2.init();
valid3.init();
//Маска для телефона
maskPhone('#form1-phone', '+7__________');
maskPhone('#form2-phone', '+7__________');
maskPhone('#form3-phone', '+7__________');
// Таймер
countTimer('13 Sep 2021');
// Меню
toggleMenu();
//Табы
tabs();
//Слайдер
slider();
//Переключение фотографий "Наша команда"
toggleImageCommand();
//Калькулятор
calc(100);
//Отправка формы
sendForm();
//Карусель слайдер
carousel.init();
//Модальное окно
togglePopup();