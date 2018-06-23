Обучение автотестами
=====================
* установка Protractor - **$ npm install -g protractor**
* обновление webdriver - **$ ./node_modules/protractor/bin/webdriver-manager update**
* запуск webdriver - **$ ./node_modules/protractor/bin/webdriver-manager start**
* установка html-reporter - **$ npm install protractor-jasmine2-html-reporter --save-dev**
* запуск html-reporter - **$ npm i jasmine-allure-reporter**
* установка allure-reporter: 
1. **$ sudo apt-add-repository ppa:qameta/allure**
2. **$ sudo apt-get update**
3. **$ sudo apt-get install allure** 
4. или **$ npm i jasmine-allure-reporter**
* установка командной строки:
1. **$ sudo apt-add-repository ppa:yandex-qatools/allure-framework**
2. **$ sudo apt-get update**
3. **$ sudo apt-get install allure-commandline**   
* запуск allure-reporter - **$ allure generate**   // перед запуском генерации нужно перейтив папку где лежит отчет например _~/Test/UIAutomationTest/e2e/reporter $_
* поиск локатора в консоли - _document.querySelectorAll("input.d-input__field")[0].value='sdfsd'_

Установка проекта
=====================
1. склонировать проект - **$ git clone https://github.com/HelenYanushevskaya/UIAutomationTest.git**
2. установить зависимости - **$ npm install**
3. запуск тестов - **$ npm run e2e**
4. генерация отчета - **$ allure generate**
