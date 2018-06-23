h1 Обучение автотестами
=====================
* установка Protractor - **$ npm install -g protractor**
* обновление webdriver - **$ ./node_modules/protractor/bin/webdriver-manager update**
* запуск webdriver - **$ ./node_modules/protractor/bin/webdriver-manager start**
* установка html-reporter - **$ npm install protractor-jasmine2-html-reporter --save-dev**
* запуск html-reporter - **$ npm i jasmine-allure-reporter**
* установка allure-reporter - 
* **$ sudo apt-add-repository ppa:qameta/allure **
* **$ sudo apt-get update **
* **$ sudo apt-get install allure** 
* или **$ npm i jasmine-allure-reporter**
* установка командной строки - 
* **$ sudo apt-add-repository ppa:yandex-qatools/allure-framework**
* **$ sudo apt-get update**
* **$ sudo apt-get install allure-commandline**   
* запуск allure-reporter - **$ allure generate**   // перед запуском генерации нужно перейтив папку где лежит отчет например ~/Test/UIAutomationTest/e2e/reporter $
* поиск локатора в консоли - **document.querySelectorAll("input.d-input__field")[0].value='sdfsd'**

h1 Установка проекта
=====================
1. - склонировать проект - git clone https://github.com/HelenYanushevskaya/UIAutomationTest.git
2. - установить зависимости - npm install
3. - запуск тестов - npm run e2e
4. - генерация отчета - allure generate
