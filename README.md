# Tamagotchi

## Technologies Used
1. HTML5, CSS, JavaScript
2. SASS 0.5.0: All customized styling
3. Webpack: For creation of modules

## Description
Use this application to play with and update the status of the Tamagotchi displayed within the application. By clicking on the buttons in the Eat, Play, Fight & Sleep categories, you can change the levels of the Tamagotchi's bar for each respective category. Click the buttons for yourself to see how it affects the Tamagotchi!

* Eat
The Eat component has 2 buttons that change the green Full bar level. The Full level starts at 100 and when you click the "Pie" Button, 3 will be subtracted from Full, and when you click the "Kale" Button, 10 is added to the "Full" bar level.

* Play
The Play component has 2 buttons that change the green Fun bar level. The Fun level starts at 50 and when you click the "Dab" Button, 50 will be added to Fun, and when you click the "Dab" Button, only 2 is added to the Fun bar level.

* Fight
The Fight component has 2 buttons that change the green Strength bar level. The Strength level starts at 50 and when you click the "Flee" Button, 1 will be added to Strength, and when you click the "Jab" Button, 10 is subtracted from the Strength bar level.

* Sleep
The Fight component has 2 buttons that change the Energy bar level. The Energy level starts at 100 and when you click the "Nap" Button, 50 will be added to Energy, and when you click the "Coma" Button, 60 is added to the Energy bar level.

## Screenshots
![Tamagotchi Preview](https://raw.githubusercontent.com/ConnorSullivan10/tamagotchi/master/screenshots/baseTamagotchiScreenshot.png)

## How to run
1. Clone down this project.
2. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8888`  
3. This will show at: `http://localhost:8888` in your internet browser.  
