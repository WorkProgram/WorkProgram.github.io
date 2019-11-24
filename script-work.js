//tabs
function openTab(evt, tabName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}

//subtabs
function opensubTab(evt, subtabName) {
var j, subtabcontent, subtablinks;
subtabcontent = document.getElementsByClassName("subtabcontent");
for (j = 0; j < subtabcontent.length; j++) {
  subtabcontent[j].style.display = "none";
}
subtablinks = document.getElementsByClassName("subtablinks");
for (j = 0; j < subtablinks.length; j++) {
  subtablinks[j].className = subtablinks[j].className.replace(" active", "");
}
document.getElementById(subtabName).style.display = "block";
evt.currentTarget.className += " active";
}

//my scripts begin HERE
function compile(){

  //cut fruit variables
  const pineappleChunksSmVALUE = document.getElementById("Pineapple Chunks (Sm)").value
  const coredWholePineappleVALUE = document.getElementById("Cored Whole Pineapple").value
  const greekYogurtBowlStrawberryVALUE = document.getElementById("Greek Yogurt Bowl Strawberry").value
  const greekYogurtBowlBananaVALUE = document.getElementById("Greek Yogurt Bowl Banana").value
  const greekYogurtMixedBerryVALUE = document.getElementById("Greek Yogurt Mixed Berry").value
  const yogurtBowlStrawberryVALUE = document.getElementById("Yogurt Bowl Strawberry").value
  const yogurtBowlBananaVALUE = document.getElementById("Yogurt Bowl Banana").value
  const yogurtBowlMixedBerryVALUE = document.getElementById("Yogurt Bowl Mixed Berry").value

  const seedlessWatermelonChunksSmVALUE = document.getElementById("Seedless Watermelon Chunks (Sm)").value
  const mixedFruitSaladSmVALUE = document.getElementById("Mixed Fruit Salad (Sm)").value
  const melonManiaSmVALUE = document.getElementById("Melon Mania (Sm)").value
  const honeydewChunksSmVALUE = document.getElementById("Honeydew Chunks (Sm)").value
  const cantaloupeChunksSmVALUE = document.getElementById("Cantaloupe Chunks (Sm)").value
  const melonStrawberrySmVALUE = document.getElementById("Melon & Strawberry (Sm)").value
  const mixedBerryBowlSmVALUE = document.getElementById("Mixed Berry Bowl (Sm)").value
  const pineappleStrawberrySmVALUE = document.getElementById("Pineapple & Strawberry (Sm)").value
  const strawberriesSlicedSmVALUE = document.getElementById("Strawberries Sliced (Sm)").value

  const seedlessWatermelonChunksLgVALUE = document.getElementById("Seedless Watermelon Chunks (Lg)").value
  const melonManiaLgVALUE = document.getElementById("Melon Mania (Lg)").value
  const mixedFruitSaladLgVALUE = document.getElementById("Mixed Fruit Salad (Lg)").value
  const tropicalFruitSaladLgVALUE = document.getElementById("Tropical Fruit Salad (Lg)").value
  const pineappleStrawberryLgVALUE = document.getElementById("Pineapple & Strawberry (Lg)").value

  const watermelonSlicesVALUE = document.getElementById("Watermelon Slices").value
  const watermelonQuartersVALUE = document.getElementById("Watermelon Quarters").value
  const honeydewSlicesVALUE = document.getElementById("Honeydew Slices").value
  const cantaloupeSilcesVALUE = document.getElementById("Cantaloupe Silces").value
  const fruitTrayGrabNGoLrgstVALUE = document.getElementById("Fruit Tray Grab N Go (Lrgst)").value
  const celebrationFruitCarouselLgVALUE = document.getElementById("Celebration Fruit Carousel (Lg)").value


  //salad variables
  const eggBabySpinachLgVALUE = document.getElementById("Egg & Baby Spinach (Lg)").value
  const fruitBabySpinachLgVALUE = document.getElementById("Fruit & Baby Spinach (Lg)").value
  const babyKaleSaladwFruitLgVALUE = document.getElementById("Baby Kale Salad w/Fruit (Lg)").value
  const kaleCaesarSaladLgVALUE = document.getElementById("Kale Caesar Salad (Lg)").value

  const mangoSalsaSmVALUE = document.getElementById("Mango Salsa (Sm)").value
  const pineappleSalsaSmVALUE = document.getElementById("Pineapple Salsa (Sm)").value
  const guacamoleDipSmVALUE = document.getElementById("Guacamole Dip (Sm)").value
  const tacoDipSmVALUE = document.getElementById("Taco Dip (Sm)").value
  const celerySlicedSmVALUE = document.getElementById("Celery Sliced (Sm)").value
  const omletteMixSmVALUE = document.getElementById("Omlette Mix (Sm)").value
  const lunchPackLgVALUE = document.getElementById("Lunch Pack (Lg)").value

  const asianVegetableMixLgVALUE = document.getElementById("Asian Vegetable Mix (Lg)").value
  const veggieStirFryMixLgVALUE = document.getElementById("Veggie Stir Fry Mix (Lg)").value
  const chickenStirFryMixLgVALUE = document.getElementById("Chicken Stir Fry Mix (Lg)").value
  const slicedBellPepperMixLgVALUE = document.getElementById("Sliced Bell Pepper Mix (Lg)").value
  const tomatoCucumberSaladwFetaLgVALUE = document.getElementById("Tomato & Cucumber Salad w/Feta (Lg)").value
  const greekSaladLgVALUE = document.getElementById("Greek Salad (Lg)").value

  const ceasarSaladLrgstVALUE = document.getElementById("Ceasar Salad (Lrgst)").value
  const greekSaladLrgstVALUE = document.getElementById("Greek Salad (Lrgst)").value
  const gardenSaladLrgstVALUE = document.getElementById("Garden Salad (Lrgst)").value
  const saladSimplyGardenLrgstVALUE = document.getElementById("Salad Simply Garden (Lrgst)").value
  const fruitBabySpinachLrgstVALUE = document.getElementById("Fruit & Baby Spinach (Lrgst)").value

  const vegetableTrayGrabNGoLrgstVALUE = document.getElementById("Vegetable Tray Grab N Go (Lrgst)").value
  const celebrationVegetableCarouselLgVALUE = document.getElementById("Celebration Vegetable Carousel (Lg)").value

  const originalCrunchMixLgVALUE = document.getElementById("Original Crunch Mix (Lg)").value
  const carrotCeleryCrunchwDipLgVALUE = document.getElementById("Carrot & Celery Crunch w/Dip (Lg)").value
  const crunchMixDeluxeLgVALUE = document.getElementById("Crunch Mix Deluxe (Lg)").value
  const broccoliCauliflowerCarrotLgVALUE = document.getElementById("Broccoli/Cauliflower/Carrot (Lg)").value
  const arugulaBoccociniSaladLgVALUE = document.getElementById("Arugula & Boccocini Salad (Lg)").value
  const arugulaPearGoatCheeseLgVALUE = document.getElementById("Arugula Pear & Goat Cheese (Lg)").value

  const caeserSaladLgVALUE = document.getElementById("Caeser Salad (Lg)").value
  const simplyGardenSaladLgVALUE = document.getElementById("Simply Garden Salad (Lg)").value
  const gardenSaladLgVALUE = document.getElementById("Garden Salad (Lg)").value
  const cheddarGardenSaladLgVALUE = document.getElementById("Cheddar Garden Salad (Lg)").value
  const springMixSaladLgVALUE = document.getElementById("Spring Mix Salad (Lg)").value
  const mandarinChickenSaladLgVALUE = document.getElementById("Mandarin Chicken Salad (Lg)").value

  const chickenCaeserSaladLrgstVALUE = document.getElementById("Chicken Caeser Salad (Lrgst)").value
  const chickenCaeserSaladLgVALUE = document.getElementById("Chicken Caeser Salad (Lg)").value
  const chickenGreekSaladLgVALUE = document.getElementById("Chicken Greek Salad (Lg)").value
  const chickenSpringMixLgVALUE = document.getElementById("Chicken Spring Mix (Lg)").value
  const muskokaChickenSaladLgVALUE = document.getElementById("Muskoka Chicken Salad (Lg)").value
  const cobbSaladLgVALUE = document.getElementById("Cobb Salad (Lg)").value

  const butternutSquashCubesGrillVALUE = document.getElementById("Butternut Squash Cubes (Grill)").value
  const mixedPetitePotatoGrillVALUE = document.getElementById("Mixed Petite Potato (Grill)").value
  const yamMedallionGrillVALUE = document.getElementById("Yam Medallion (Grill)").value
  const mushroomGrillVALUE = document.getElementById("Mushroom (Grill)").value
  const bbqSautePepperMedleyGrillVALUE = document.getElementById("BBQ Saute Pepper Medley (Grill)").value
  const asparagusGrillVALUE = document.getElementById("Asparagus (Grill)").value

  //Recipe Sets as variables
  //SALADS HERE
  let butternutSquashCubesGrillRECIPE =
  `<li>Butternut Squash Griller</li>
  - Add butternut squash<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>//`;

  let mixedPetitePotatoGrillRECIPE =
  `<li>Mixed Petit Potato Griller</li>
  - Add petite red and yellow potatos (half on each side)<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>
  - Add sprig of rosemary<br>//`;

  let yamMedallionGrillRECIPE =
  `<li>Yam Medallion Griller</li>
  - Add cubed yams<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>//`;

  let mushroomGrillRECIPE =
  `<li>Mushroom Griller</li>
  - Add cremini mushrooms<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>
  - Add sprig of thyme<br>//`;

  let asparagusGrillRECIPE =
  `<li>Asparagus Griller</li>
  - Add asparagus with ends cut off<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>//`;

  let bbqSautePepperMedleyGrillRECIPE =
  `<li>BBQ/Saute Pepper Medley Griller</li>
  - Add zucchini slices(1/4") cut at an angle<br>
  - Add strips of red, orange and green pepper<br>
  - Add red onion, quartered<br>
  - Mix thoroughly<br>
  - Drizzle olive oil<br>
  - Sprinkle black pepper<br>//`;

  let slicedBellPepperMixLgRECIPE =
  `<li>Sliced Bell Pepper Mix</li>
  - Add green pepper strips (1/4 line-half)<br>
  - Add orange pepper strips (1/4 line-half)<br>
  - Add red pepper strips (1/4 line-half)<br>
  - Add yellow pepper strips (1/4 line-half)<br>//`;

  let omletteMixSmRECIPE =
  `<li>Omlette Mix</li>
  - Add diced red pepper (layer)<br>
  - Add diced green pepper (layer)<br>
  - Add diced red onion (layer)<br>
  - Add chunked white mushroom (layer)<br>//`;

  let mangoSalsaSmRECIPE =
  `<li>Mango Salsa</li>
  - Add diced red pepper (layer)<br>
  - Add diced green pepper (layer)<br>
  - Add diced white onion (layer)<br>
  - Add cilantro<br>
  - Add chunked mango (layer)<br>
  - Add lime juice<br>//`;

  let pineappleSalsaSmRECIPE =
  `<li>Pineapple Salsa</li>
  - Add diced red pepper (layer)<br>
  - Add diced white onion (layer)<br>
  - Add cilantro<br>
  - Add chunked pineapple (layer)<br>
  - Add lime juice<br>//`;

  let celerySlicedSmRECIPE =
  `<li>Celery Sliced</li>
  -Add sliced celery<br>//`;

  let carrotCeleryCrunchwDipLgRECIPE =
  `<li>Large Carrot & Celery Crunch with Dip</li>
  - Add small ranch dip to center<br>
  - Add celery sticks to top right and bottom left corner (3/4 fill)<br>
  - Add baby carrots to top left and bottom right (3/4 fill)<br>//`;

  let broccoliCauliflowerCarrotLgRECIPE =
  `<li>Broccoli, Cauliflower & Carrots</li>
  - Add baby carrots (base layer)<br>
  - Add broccoli to one half (level)<br>
  - Add cauliflower to one half (level)<br>//`

  let originalCrunchMixLgRECIPE =
  `<li>Original Crunch Mix</li>
  - Add sliced cucumber to top right corner (level)<br>
  - Add celery sticks to top left corner (level)<br>
  - Add baby carrots to middle right (level)<br>
  - Add small ranch dip to bottom right corner<br>
  - Add cauliflower to middle left (level)<br>
  - Add broccoli to bottom left corner (level)<br>
  - Add grape tomatoes x6<br>//`;

  let crunchMixDeluxeLgRECIPE =
  `<li>Deluxe Crunch Mix</li>
  - Add sliced cucumber to top right corner (level)<br>
  - Add celery sticks to top left corner (level)<br>
  - Add baby carrots to middle right (level)<br>
  - Add small ranch dip to bottom right corner<br>
  - Add cauliflower to middle left (level)<br>
  - Add broccoli to bottom left corner (level)<br>
  - Add grape tomatoes x6<br>
  - Add red and yellow pepper strips x2<br>//`;

  let lunchPackLgRECIPE =
  `<li>Lunch Packs</li>
  - Add sliced cucumber to top right corner (level)<br>
  - Add celery sticks to top left corner (level)<br>
  - Add baby carrots to middle right (level)<br>
  - Add small ranch dip to bottom right corner<br>
  - Add red grapes to middle left (level)<br>
  - Add grape tomatoes to bottom left corner (level)<br>
  - Add cracker barrel cheese and melba toast<br>//`;

  let vegetableTrayGrabNGoLrgstRECIPE =
  `<li>Vegetable Tray Grab N Go</li>
  - Add cauliflower to one portion<br>
  - Add grape tomatoes to one portion<br>
  - Add broccoli to one portion<br>
  - Add baby carrots to one portion<br>
  - Add large dip to center<br>//`;

  let celebrationVegetableCarouselLgRECIPE =
  `<li>Celebration Vegetable Carousel Tray</li>
  - Add cauliflower to one portion<br>
  - Add grape tomatoes to one portion<br>
  - Add broccoli to one portion<br>
  - Add baby carrots to one portion<br>
  - Add small dip to center<br>//`;

  let veggieStirFryMixLgRECIPE =
  `<li>Veggie Stir Fry Mix</li>
  - Add mixed cauliflower and broccoli (1/4 base)<br>
  - Add white mushroom slices (layer)<br>
  - Add matchstick carrots (layer)<br>
  - Add sliced, halved zucchini (layer)<br>
  - Add sliced red onion (layer)<br>
  - Add red and yellow pepper strips x3<br>//`;

  let chickenStirFryMixLgRECIPE =
  `<li>Chicken Stir Fry</li>
  - Add mixed cauliflower and broccoli (1/4 base)<br>
  - Add white mushroom slices (layer)<br>
  - Add matchstick carrots (layer)<br>
  - Add sliced, halved zucchini (layer)<br>
  - Add sliced red onion (layer)<br>
  - Add red and yellow pepper strips x3<br>
  - Add chicken breast (layer)<br>//`;

  let asianVegetableMixLgRECIPE =
  `<li>Asian Vegetable Mix</li>
  - Add red pepper strips(1/4 line-level)<br>
  - Add sliced white mushrooms (1/4 line-level)<br>
  - Add snow peas(1/4 line-level)<br>
  - Add bean sprouts(1/4 line-level)<br>
  - Sprinkle matchstrick carrots on top<br>//`;

  let eggBabySpinachLgRECIPE =
  `<li>Small Egg & Baby Spinach Salad</li>
  - Add spinach (level)<br>
  - Add sliced white mushroom (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add sliced red and yellow pepper x3 (line, front)<br>
  - Add sliced red onion (half line, front)<br>
  - Add bacon bits (half line, front)<br>
  - Add quartered egg (line, front)<br>//`;

  let cobbSaladLgRECIPE =
  `<li>Cobb Salad</li>
  - Add romaine (1/2 base)<br>
  - Add iceberg (1/2 level)<br>
  - Add grape tomatoes (line, front)<br>
  - Add chicken breast (line, front)<br>
  - Add bacon bits (line, front)<br>
  - Add whole kernal corn (line, front)<br>
  - Add 1 quartered hardboiled egg (line, front)<br>//`;

  let fruitBabySpinachLrgstRECIPE =
  `<li>Large Fruit & Baby Spinach Salad</li>
  - Add baby spinach (level)<br>
  - Add strawberry halves to 4 corners<br>
  - Add blueberries<br>
  - Add walnut halves<br>
  - Add dried cranberries<br>//`;

  let fruitBabySpinachLgRECIPE =
  `<li>Small Fruit & Baby Spinach Salad</li>
  - Add baby spinach (level)<br>
  - Add strawberry halves to 4 corners<br>
  - Add blueberries<br>
  - Add walnut halves<br>
  - Add dried cranberries<br>//`;

  let babyKaleSaladwFruitLgRECIPE =
  `<li>Baby Kale Salad With Fruit</li>
  - Add baby kale (level)<br>
  - Add strawberry halves to 4 corners<br>
  - Add blueberries<br>
  - Add walnut halves<br>
  - Add dried cranberries<br>//`;

  let muskokaChickenSaladLgRECIPE =
  `<li>Small Muskoka Chicken Salad</li>
  - Add romaine (1/2 base)<br>
  - Add spring mix (1/2 level)<br>
  - Add strawberry halves to bottom left corner<br>
  - Add chicken breast to bottom right corner<br>
  - Add blueberries to top left corner<br>
  - Add walnuts to top right corner (half)<br>
  - Add pine nuts to top right corner (half)<br>//`

  let mandarinChickenSaladLgRECIPE =
  `<li>Small Mandarin Chicken Salad</li>
  - Add romaine (level)<br>
  - Add mandarin orange to bottom left corner<br>
  - Add chicken breast to bottom right corner<br>
  - Add purple cabbage to top left corner<br>
  - Add sliced red onion to top right corner (half)<br>
  - Add dried cranberries to top right corner (half)<br>//`;

  let kaleCaesarSaladLgRECIPE =
  `<li>Kale Ceasar Salad</li>
  - Add kale (level)<br>
  - Add bacon bits (layer)<br>
  - Add parmesan cheese (layer)<br>
  - Add lemon wedge to bottom right corner<br>//`;

  let ceasarSaladLrgstRECIPE =
  `<li>Large Ceasar Salad</li>
  - Add romaine lettuce (level)<br>
  - Add bacon bits (layer)<br>
  - Add parmesan cheese (layer)<br>
  - Add lemon wedge to bottom right corner<br>//`;

  let caeserSaladLgRECIPE =
  `<li>Small Caesar Salad</li>
  - Add romaine lettuce (level)<br>
  - Add bacon bits (layer)<br>
  - Add parmesan cheese (layer)<br>
  - Add lemon wedge to bottom right corner<br>//`;

  let chickenCaeserSaladLrgstRECIPE =
  `<li>Large Chicken Caesar Salad</li>
  - Add romaine lettuce (level)<br>
  - Add bacon bits (layer)<br>
  - Add parmesan cheese (layer)<br>
  - Add chicken breast (layer)<br>
  - Add lemon wedge to bottom right corner<br>//`;

  let chickenCaeserSaladLgRECIPE =
  `<li>Small Chicken Caesar Salad</li>
  - Add romaine lettuce (level)<br>
  - Add bacon bits (layer)<br>
  - Add parmesan cheese (layer)<br>
  - Add chicken breast (layer)<br>
  - Add lemon wedge to bottom right corner<br>//`;

  let springMixSaladLgRECIPE =
  `<li>Small Spring Mix Salad</li>
  - Add spring mix (1/2 base)<br>
  - Add romaine (1/2 level)<br>
  - Add sliced cucumber (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add matchstick carrots (line, front)<br>
  - Add shredded cheddar (line, front)<br>
  - Add bacon bits top left corner<br>
  - Add sliced red onion top right corner<br>//`;

  let chickenSpringMixLgRECIPE =
  `<li>Small Chicken Spring Mix Salad</li>
  - Add spring mix (1/2 base)<br>
  - Add romaine (1/2 level)<br>
  - Add sliced cucumber (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add matchstick carrots (line, front)<br>
  - Add shredded cheddar (line, front)<br>
  - Add bacon bits top left corner<br>
  - Add sliced red onion top right corner<br>
  - Add chicken breast (layer)<br>//`;

  let chickenGreekSaladLgRECIPE  =
  `<li>Small Chicken Greek Salad</li>
  - Add romaine (1/2 base)<br>
  - Add iceberg (1/2 level)<br>
  - Add sliced cucumber (line, front)<br>
  - Add grape tomatoes (line, back)<br>
  - Add black olives middle<br>
  - Add feta cheese middle<br>
  - Add red onion middle, both sides<br>
  - Add chicken breast (layer)<br>//`;

  let greekSaladLrgstRECIPE =
  `<li>Large Greek Salad</li>
  - Add romaine (1/2 base)<br>
  - Add iceberg (1/2 level)<br>
  - Add sliced cucumber (line, front)<br>
  - Add grape tomatoes (line, back)<br>
  - Add black olives middle<br>
  - Add feta cheese middle<br>
  - Add red onion middle, both sides<br>//`;

  let greekSaladLgRECIPE =
  `<li>Small Greek Salad</li>
  - Add romaine (1/2 base)<br>
  - Add iceberg (1/2 level)<br>
  - Add sliced cucumber (line, front)<br>
  - Add grape tomatoes (line, back)<br>
  - Add black olives middle<br>
  - Add feta cheese middle<br>
  - Add red onion middle, both sides<br>//`;

  let tomatoCucumberSaladwFetaLgRECIPE =
  `<li>Small Tomato & Cucumber Salad with Feta</li>
  - Add 1 diced hot house tomato (layer)<br>
  - Add sliced, quartered cucumber (layer)<br>
  - Add 1/2 diced hot house tomato (layer)<br>
  - Add sliced red onion (layer)<br>
  - Add feta (layer)<br>
  - Sprinkle Oregano<br>//`

  let saladSimplyGardenLrgstRECIPE =
  `<li>Large Simply Garden Salad</li>
  - Add romaine (1/3 base)<br>
  - Add spring mix (1/3 base)<br>
  - Add iceberg (1/3 level)<br>
  - Add cucumber slices (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add purple cabbage (line, front)<br>
  - Add matchstick carrots (line, front)<br>//`;

  let simplyGardenSaladLgRECIPE =
  `<li>Small Simply Garden Salad</li>
  - Add romaine (1/3 base)<br>
  - Add spring mix (1/3 base)<br>
  - Add iceberg (1/3 level)<br>
  - Add cucumber slices (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add purple cabbage (line, front)<br>
  - Add matchstick carrots (line, front)<br>//`;

  let gardenSaladLrgstRECIPE =
  `<li>Large Garden Salad</li>
  - Add romaine (1/3 base)<br>
  - Add spring mix (1/3 base)<br>
  - Add iceberg (1/3 level)<br>
  - Add cucumber slices (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add purple cabbage to top right corner<br>
  - Add sliced red, yellow, green pepper to top middle<br>
  - Add sliced red onion to top left corner<br>//`;

  let gardenSaladLgRECIPE =
  `<li>Small Garden Salad</li>
  - Add romaine (1/3 base)<br>
  - Add spring mix (1/3 base)<br>
  - Add iceberg (1/3 level)<br>
  - Add cucumber slices (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add purple cabbage to top right corner<br>
  - Add sliced red, yellow, green pepper to top middle<br>
  - Add sliced red onion to top left corner<br>//`;

  let cheddarGardenSaladLgRECIPE =
  `<li>Small Cheddar Garden Salad</li>
  - Add romaine (1/3 base)<br>
  - Add spring mix (1/3 base)<br>
  - Add iceberg (1/3 level)<br>
  - Add cucumber slices (line, front)<br>
  - Add grape tomatoes (line, front)<br>
  - Add purple cabbage to top right corner<br>
  - Add sliced red, yellow, green pepper to top middle<br>
  - Add sliced red onion to top left corner<br>
  - Add shredded cheddar (layer)<br>//`;

  let arugulaBoccociniSaladLgRECIPE =
  `<li>Arugula and Boccocini Salad</li>
  - Add arugula (2/3 layer)<br>
  - Add halved grape tomatos (line, front)<br>
  - Add boccocini (line, front)<br>
  - Add shaved raddacio (line, back)<br>//`

  let arugulaPearGoatCheeseLgRECIPE =
  `<li>Arugula, Pear & Goat Cheese Salad</li>
  -UNKNOWN. REQUIRES RECIPE.`

  let tacoDipSmRECIPE =
  `<li>Taco Dip</li>
  - Add 2, 500 mL 14% sourcream containers to mixing bowl<br>
  - Add 1 package Old El Paso Taco Mix to mixing bowl<br>
  - Mix thoroughly and split between 4 containers<br>
  - Split 2 jars medium chunky salsa between 4 containers<br>
  - Add shredded cheddar to each container<br>//`;

  let guacamoleDipSmRECIPE =
  `<li>Guacamole Layered Dip</li>
  - Add 3 whole avacados to mixing bowl<br>
  - Add lime juice to mixing bowl<br>
  - Add diced roma tomato to mixing bowl<br>
  - Add 1 tsp minced garlic to mixing bowl<br>
  - Add 1/2 cup diced white onion to mixing bowl<br>
  - Add finely chopped cilantro to mixing bowl<br>
  - Mix thoroughly<br>
  - Evenly divide between 2 containers<br>//`;


  //cut fruit array
  const allCutFruit = [
    {
      Name: "Pineapple Chunks (Sm)",
      Recipes: [""],
      InitialValue: 16,
      ProduceValue: pineappleChunksSmVALUE,
      Selected: false
    },
    {
      Name: "Cored Whole Pineapple",
      Recipes: [""],
      InitialValue: 15,
      ProduceValue: coredWholePineappleVALUE,
      Selected: false
    },
    {
      Name: "Greek Yogurt Bowl Strawberry",
      Recipes: [""],
      InitialValue: 23,
      ProduceValue: greekYogurtBowlStrawberryVALUE,
      Selected: false
    },
    {
      Name: "Greek Yogurt Bowl Banana",
      Recipes: [""],
      InitialValue: 25,
      ProduceValue: greekYogurtBowlBananaVALUE,
      Selected: false
    },
    {
      Name: "Greek Yogurt Mixed Berry",
      Recipes: [""],
      InitialValue: 27,
      ProduceValue: greekYogurtMixedBerryVALUE,
      Selected: false
    },
    {
      Name: "Yogurt Bowl Strawberry",
      Recipes: [""],
      InitialValue: 24,
      ProduceValue: yogurtBowlStrawberryVALUE,
      Selected: false
    },
    {
      Name: "Yogurt Bowl Banana",
      Recipes: [""],
      InitialValue: 26,
      ProduceValue: yogurtBowlBananaVALUE,
      Selected: false
    },
    {
      Name: "Yogurt Bowl Mixed Berry",
      Recipes: [""],
      InitialValue: 28,
      ProduceValue: yogurtBowlMixedBerryVALUE,
      Selected: false
    },
    {
      Name: "Seedless Watermelon Chunks (Sm)",
      Recipes: [""],
      InitialValue: 4,
      ProduceValue: seedlessWatermelonChunksSmVALUE,
      Selected: false
    },
    {
      Name: "Mixed Fruit Salad (Sm)",
      Recipes: [""],
      InitialValue: 20,
      ProduceValue: mixedFruitSaladSmVALUE,
      Selected: false
    },
    {
      Name: "Melon Mania (Sm)",
      Recipes: [""],
      InitialValue: 10,
      ProduceValue: melonManiaSmVALUE,
      Selected: false
    },
    {
      Name: "Honeydew Chunks (Sm)",
      Recipes: [""],
      InitialValue: 6,
      ProduceValue: honeydewChunksSmVALUE,
      Selected: false
    },
    {
      Name: "Cantaloupe Chunks (Sm)",
      Recipes: [""],
      InitialValue: 8,
      ProduceValue: cantaloupeChunksSmVALUE,
      Selected: false
    },
    {
      Name: "Melon & Strawberry (Sm)",
      Recipes: [""],
      InitialValue: 11,
      ProduceValue: melonStrawberrySmVALUE,
      Selected: false
    },
    {
      Name: "Mixed Berry Bowl (Sm)",
      Recipes: [""],
      InitialValue: 21,
      ProduceValue: mixedBerryBowlSmVALUE,
      Selected: false
    },
    {
      Name: "Pineapple & Strawberry (Sm)",
      Recipes: [""],
      InitialValue: 14,
      ProduceValue: pineappleStrawberrySmVALUE,
      Selected: false
    },
    {
      Name: "Strawberries Sliced (Sm)",
      Recipes: [""],
      InitialValue: 12,
      ProduceValue: strawberriesSlicedSmVALUE,
      Selected: false
    },
    {
      Name: "Seedless Watermelon Chunks (Lg)",
      Recipes: [""],
      InitialValue: 3,
      ProduceValue: seedlessWatermelonChunksLgVALUE,
      Selected: false
    },
    {
      Name: "Melon Mania (Lg)",
      Recipes: [""],
      InitialValue: 9,
      ProduceValue: melonManiaLgVALUE,
      Selected: false
    },
    {
      Name: "Mixed Fruit Salad (Lg)",
      Recipes: [""],
      InitialValue: 19,
      ProduceValue: mixedFruitSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Tropical Fruit Salad (Lg)",
      Recipes: [""],
      InitialValue: 22,
      ProduceValue: tropicalFruitSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Pineapple & Strawberry (Lg)",
      Recipes: [""],
      InitialValue: 13,
      ProduceValue: pineappleStrawberryLgVALUE,
      Selected: false
    },
    {
      Name: "Watermelon Slices",
      Recipes: [""],
      InitialValue: 2,
      ProduceValue: watermelonSlicesVALUE,
      Selected: false
    },
    {
      Name: "Watermelon Quarters",
      Recipes: [""],
      InitialValue: 1,
      ProduceValue: watermelonQuartersVALUE,
      Selected: false
    },
    {
      Name: "Honeydew Slices",
      Recipes: [""],
      InitialValue: 5,
      ProduceValue: honeydewSlicesVALUE,
      Selected: false
    },
    {
      Name: "Cantaloupe Silces",
      Recipes: [""],
      InitialValue: 7,
      ProduceValue: cantaloupeSilcesVALUE,
      Selected: false
    },
    {
      Name: "Fruit Tray Grab N Go (Lrgst)",
      Recipes: [""],
      InitialValue: 17,
      ProduceValue: fruitTrayGrabNGoLrgstVALUE,
      Selected: false
    },
    {
      Name: "Celebration Fruit Carousel (Lg)",
      Recipes: [""],
      InitialValue: 18,
      ProduceValue: celebrationFruitCarouselLgVALUE,
      Selected: false
    },
  ]

  const allSalads = [
    {
      Name: "Butternut Squash Cubes",
      Recipes: butternutSquashCubesGrillRECIPE,
      InitialValue: 1,
      ProduceValue: butternutSquashCubesGrillVALUE,
      Selected: false
    },
    {
      Name: "Mixed Petit Potato Griller",
      Recipes: mixedPetitePotatoGrillRECIPE,
      InitialValue: 2,
      ProduceValue: mixedPetitePotatoGrillVALUE,
      Selected: false
    },
    {
      Name: "Yam Medallion Griller",
      Recipes: yamMedallionGrillRECIPE,
      InitialValue: 3,
      ProduceValue: yamMedallionGrillVALUE,
      Selected: false
    },
    {
      Name: "Mushroom Griller",
      Recipes: mushroomGrillRECIPE,
      InitialValue: 4,
      ProduceValue: mushroomGrillVALUE,
      Selected: false
    },
    {
      Name: "Asparagus Griller",
      Recipes: asparagusGrillRECIPE,
      InitialValue: 5,
      ProduceValue: asparagusGrillVALUE,
      Selected: false
    },
    {
      Name: "BBQ/Saute Pepper Medley Griller",
      Recipes: bbqSautePepperMedleyGrillRECIPE,
      InitialValue: 6,
      ProduceValue: bbqSautePepperMedleyGrillVALUE,
      Selected: false
    },
    {
      Name: "Sliced Bell Pepper Mix",
      Recipes: slicedBellPepperMixLgRECIPE,
      InitialValue: 7,
      ProduceValue: slicedBellPepperMixLgVALUE,
      Selected: false
    },
    {
      Name: "Omlette Mix",
      Recipes: omletteMixSmRECIPE,
      InitialValue: 8,
      ProduceValue: omletteMixSmVALUE,
      Selected: false
    },
    {
      Name: "Mango Salsa",
      Recipes: mangoSalsaSmRECIPE,
      InitialValue: 9,
      ProduceValue: mangoSalsaSmVALUE,
      Selected: false
    },
    {
      Name: "Pineapple Salsa",
      Recipes: pineappleSalsaSmRECIPE,
      InitialValue: 10,
      ProduceValue: pineappleSalsaSmVALUE,
      Selected: false
    },
    {
      Name: "Celery Sliced",
      Recipes: celerySlicedSmRECIPE,
      InitialValue: 11,
      ProduceValue: celerySlicedSmVALUE,
      Selected: false
    },
    {
      Name: "Large Carrot & Celery Crunch with Dip",
      Recipes: carrotCeleryCrunchwDipLgRECIPE,
      InitialValue: 12,
      ProduceValue: carrotCeleryCrunchwDipLgVALUE,
      Selected: false
    },
    {
      Name: "Broccoli, Cauliflower & Carrots",
      Recipes: broccoliCauliflowerCarrotLgRECIPE,
      InitialValue: 13,
      ProduceValue: broccoliCauliflowerCarrotLgVALUE,
      Selected: false
    },
    {
      Name: "Original Crunch Mix",
      Recipes: originalCrunchMixLgRECIPE,
      InitialValue: 14,
      ProduceValue: originalCrunchMixLgVALUE,
      Selected: false
    },
    {
      Name: "Deluxe Crunch Mix",
      Recipes: crunchMixDeluxeLgRECIPE,
      InitialValue: 15,
      ProduceValue: crunchMixDeluxeLgVALUE,
      Selected: false
    },
    {
      Name: "Lunch Packs",
      Recipes: lunchPackLgRECIPE,
      InitialValue: 16,
      ProduceValue: lunchPackLgVALUE,
      Selected: false
    },
    {
      Name: "Vegetable Tray Grab N Go",
      Recipes: vegetableTrayGrabNGoLrgstRECIPE,
      InitialValue: 17,
      ProduceValue: vegetableTrayGrabNGoLrgstVALUE,
      Selected: false
    },
    {
      Name: "Celebration Vegetable Carousel Tray",
      Recipes: celebrationVegetableCarouselLgRECIPE,
      InitialValue: 18,
      ProduceValue: celebrationVegetableCarouselLgVALUE,
      Selected: false
    },
    {
      Name: "Veggie Stir Fry Mix",
      Recipes: veggieStirFryMixLgRECIPE,
      InitialValue: 19,
      ProduceValue: veggieStirFryMixLgVALUE,
      Selected: false
    },
    {
      Name: "Chicken Stir Fry",
      Recipes: chickenStirFryMixLgRECIPE,
      InitialValue: 20,
      ProduceValue: chickenStirFryMixLgVALUE,
      Selected: false
    },
    {
      Name: "Asian Vegetable Mix",
      Recipes: asianVegetableMixLgRECIPE,
      InitialValue: 21,
      ProduceValue: asianVegetableMixLgVALUE,
      Selected: false
    },
    {
      Name: "Small Egg & Baby Spinach Salad",
      Recipes: eggBabySpinachLgRECIPE,
      InitialValue: 22,
      ProduceValue: eggBabySpinachLgVALUE,
      Selected: false
    },
    {
      Name: "Cobb Salad",
      Recipes: cobbSaladLgRECIPE,
      InitialValue: 23,
      ProduceValue: cobbSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Large Fruit & Baby Spinach Salad",
      Recipes: fruitBabySpinachLrgstRECIPE,
      InitialValue: 24,
      ProduceValue: fruitBabySpinachLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Fruit & Baby Spinach Salad",
      Recipes: fruitBabySpinachLgRECIPE,
      InitialValue: 25,
      ProduceValue: fruitBabySpinachLgVALUE,
      Selected: false
    },
    {
      Name: "Baby Kale Salad With Fruit",
      Recipes: babyKaleSaladwFruitLgRECIPE,
      InitialValue: 26,
      ProduceValue: babyKaleSaladwFruitLgVALUE,
      Selected: false
    },
    {
      Name: "Small Muskoka Chicken Salad",
      Recipes: muskokaChickenSaladLgRECIPE,
      InitialValue: 27,
      ProduceValue: muskokaChickenSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Small Mandarin Chicken Salad",
      Recipes: mandarinChickenSaladLgRECIPE,
      InitialValue: 28,
      ProduceValue: mandarinChickenSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Kale Ceasar Salad",
      Recipes: kaleCaesarSaladLgRECIPE,
      InitialValue: 29,
      ProduceValue: kaleCaesarSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Large Ceasar Salad",
      Recipes: ceasarSaladLrgstRECIPE,
      InitialValue: 30,
      ProduceValue: ceasarSaladLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Caesar Salad",
      Recipes: chickenCaeserSaladLgRECIPE,
      InitialValue: 31,
      ProduceValue: caeserSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Large Chicken Caesar Salad",
      Recipes: chickenCaeserSaladLrgstRECIPE,
      InitialValue: 32 ,
      ProduceValue: chickenCaeserSaladLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Chicken Caesar Salad",
      Recipes: chickenCaeserSaladLgRECIPE,
      InitialValue: 33,
      ProduceValue: chickenCaeserSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Small Spring Mix Salad",
      Recipes: springMixSaladLgRECIPE,
      InitialValue: 34,
      ProduceValue: springMixSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Small Chicken Spring Mix Salad",
      Recipes: chickenSpringMixLgRECIPE,
      InitialValue: 35,
      ProduceValue: chickenSpringMixLgVALUE,
      Selected: false
    },
    {
      Name: "Small Chicken Greek Salad",
      Recipes: chickenGreekSaladLgRECIPE,
      InitialValue: 36,
      ProduceValue: chickenGreekSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Large Greek Salad",
      Recipes: greekSaladLrgstRECIPE,
      InitialValue: 37,
      ProduceValue: greekSaladLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Greek Salad",
      Recipes: greekSaladLgRECIPE,
      InitialValue: 38,
      ProduceValue: greekSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Small Tomato & Cucumber Salad with Feta",
      Recipes: tomatoCucumberSaladwFetaLgRECIPE,
      InitialValue: 39,
      ProduceValue: tomatoCucumberSaladwFetaLgVALUE,
      Selected: false
    },
    {
      Name: "Large Simply Garden Salad",
      Recipes: saladSimplyGardenLrgstRECIPE,
      InitialValue: 40,
      ProduceValue: saladSimplyGardenLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Simply Garden Salad",
      Recipes: simplyGardenSaladLgRECIPE,
      InitialValue: 41,
      ProduceValue: simplyGardenSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Large Garden Salad",
      Recipes: gardenSaladLrgstRECIPE,
      InitialValue: 42,
      ProduceValue: gardenSaladLrgstVALUE,
      Selected: false
    },
    {
      Name: "Small Garden Salad",
      Recipes: gardenSaladLgRECIPE,
      InitialValue: 43,
      ProduceValue: gardenSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Small Cheddar Garden Salad",
      Recipes: cheddarGardenSaladLgRECIPE,
      InitialValue: 44,
      ProduceValue: cheddarGardenSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Arugula and Boccocini Salad",
      Recipes: arugulaBoccociniSaladLgRECIPE,
      InitialValue: 45,
      ProduceValue: arugulaBoccociniSaladLgVALUE,
      Selected: false
    },
    {
      Name: "Arugula, Pear & Goat Cheese Salad",
      Recipes: arugulaPearGoatCheeseLgRECIPE,
      InitialValue: 46,
      ProduceValue: arugulaPearGoatCheeseLgVALUE,
      Selected: false
    },
    {
      Name: "Taco Dip",
      Recipes: tacoDipSmRECIPE,
      InitialValue: 47,
      ProduceValue: tacoDipSmVALUE,
      Selected: false
    },
    {
      Name: "Guacamole Layered Dip",
      Recipes: guacamoleDipSmRECIPE,
      InitialValue: 48,
      ProduceValue: guacamoleDipSmVALUE,
      Selected: false
    }
  ]
//declared the initial number selected set up for array methodology
  let numSelectedFruit = -1
  let numSelectedSalads = -1

//ingredient variable declarations
  //Fruit
  let banana = 0
  let blackberry = 0
  let blueberry = 0
  let cantaloupe = 0
  let grape = 0
  let honeydew = 0
  let kiwi = 0
  let mango = 0
  let papaya = 0
  let pineapple = 0
  let raspberry = 0
  let strawberry = 0
  let watermelon = 0
  let yogurt = 0
  //Misc Fruit Side
  let granola = 0
  let greekyogurt = 0

  //Veggie
  let arugula = 0
  let asparagus = 0
  let avacado = 0
  let babyspinach = 0
  let beansprout = 0
  let blackolive = 0
  let broccoli = 0
  let carrot = 0
  let cauliflower = 0
  let celery = 0
  let cherrytomato = 0
  let cilantro = 0
  let creminimushroom = 0
  let cubedbutternutsquash = 0
  let cubedyam = 0
  let cucumber = 0
  let greenpepper = 0
  let hothousetomato = 0
  let iceberglettuce = 0
  let kale = 0
  let matchstickcarrot = 0
  let onion = 0
  let orangepepper = 0
  let raddicio = 0
  let redcabbage = 0
  let redonion = 0
  let redpepper = 0
  let redpetitepotato = 0
  let romatomato = 0
  let romainelettuce = 0
  let rosemary = 0
  let snowpea = 0
  let springmix = 0
  let thyme = 0
  let whitemushroom = 0
  let whiteonion = 0
  let wholekernalcorn = 0
  let yellowpepper = 0
  let yellowpetitepotato = 0
  let zucchini = 0
  //Misc Veggie Side
  let baconbits = 0
  let blackpepper = 0
  let boccocini = 0
  let chickenbreast = 0
  let crackerbarrelcheese = 0
  let cranberry = 0
  let feta = 0
  let garlic = 0
  let hardboiledegg = 0
  let largedip = 0
  let lemonwedge = 0
  let limejuice = 0
  let mandarinorange = 0
  let sourcream = 0
  let mediumchunkysalsa = 0
  let melbatoast = 0
  let oldelpasotacomix = 0
  let oliveoil = 0
  let oreganoflakes = 0
  let pinenut = 0
  let shreddedcheddar = 0
  let shreddedparmesan = 0
  let smalldip = 0
  let walnut = 0



//math for how many of each ingredient to get
  FILLDATA = 1 //temp value for filling later

  if (pineappleChunksSmVALUE > 0) {
    pineapple += (pineappleChunksSmVALUE*FILLDATA)
    allCutFruit[0].Selected = true
    numSelectedFruit += 1
  }
  if (coredWholePineappleVALUE > 0) {
    pineapple += (coredWholePineappleVALUE*1)
    allCutFruit[1].Selected = true
    numSelectedFruit += 1
  }
  if (greekYogurtBowlStrawberryVALUE > 0) {
    granola += (greekYogurtBowlStrawberryVALUE*FILLDATA)
    greekyogurt += (greekYogurtBowlStrawberryVALUE*FILLDATA)
    strawberry += (greekYogurtBowlStrawberryVALUE*FILLDATA)
    allCutFruit[2].Selected = true
    numSelectedFruit += 1
  }
  if (greekYogurtBowlBananaVALUE > 0) {
    granola += (greekYogurtBowlBananaVALUE*FILLDATA)
    greekyogurt += (greekYogurtBowlBananaVALUE*FILLDATA)
    banana += (greekYogurtBowlBananaVALUE*0.33)
    strawberry += (greekYogurtBowlBananaVALUE*FILLDATA)
    allCutFruit[3].Selected = true
    numSelectedFruit += 1
  }
  if (greekYogurtMixedBerryVALUE > 0) {
    granola += (greekYogurtMixedBerryVALUE*FILLDATA)
    greekyogurt += (greekYogurtMixedBerryVALUE*FILLDATA)
    strawberry += (greekYogurtMixedBerryVALUE*FILLDATA)
    blueberry += (greekYogurtMixedBerryVALUE*FILLDATA)
    allCutFruit[4].Selected = true
    numSelectedFruit += 1
  }
  if (yogurtBowlStrawberryVALUE > 0) {
    granola += (yogurtBowlStrawberryVALUE*FILLDATA)
    yogurt += (yogurtBowlStrawberryVALUE*FILLDATA)
    strawberry += (yogurtBowlStrawberryVALUE*FILLDATA)
    allCutFruit[5].Selected = true
    numSelectedFruit += 1
  }
  if (yogurtBowlBananaVALUE > 0) {
    granola += (yogurtBowlBananaVALUE*FILLDATA)
    yogurt += (yogurtBowlBananaVALUE*FILLDATA)
    banana += (yogurtBowlBananaVALUE*0.33)
    strawberry += (yogurtBowlBananaVALUE*FILLDATA)
    allCutFruit[6].Selected = true
    numSelectedFruit += 1
  }
  if (yogurtBowlMixedBerryVALUE > 0) {
    granola += (yogurtBowlMixedBerryVALUE*FILLDATA)
    yogurt += (yogurtBowlMixedBerryVALUE*FILLDATA)
    strawberry += (yogurtBowlMixedBerryVALUE*FILLDATA)
    blueberry += (yogurtBowlMixedBerryVALUE*FILLDATA)
    allCutFruit[7].Selected = true
    numSelectedFruit += 1
  }



  if (seedlessWatermelonChunksSmVALUE > 0) {
    watermelon += (seedlessWatermelonChunksSmVALUE*FILLDATA)
    allCutFruit[8].Selected = true
    numSelectedFruit += 1
  }
  if (mixedFruitSaladSmVALUE > 0) {
    watermelon += (mixedFruitSaladSmVALUE*FILLDATA)
    honeydew += (mixedFruitSaladSmVALUE*FILLDATA)
    cantaloupe += (mixedFruitSaladSmVALUE*FILLDATA)
    pineapple += (mixedFruitSaladSmVALUE*FILLDATA)
    strawberry += (mixedFruitSaladSmVALUE*FILLDATA)
    blueberry += (mixedFruitSaladSmVALUE*FILLDATA)
    allCutFruit[9].Selected = true
    numSelectedFruit += 1
  }
  if (melonManiaSmVALUE > 0) {
    cantaloupe += (melonManiaSmVALUE*FILLDATA)
    honeydew += (melonManiaSmVALUE*FILLDATA)
    watermelon += (melonManiaSmVALUE*FILLDATA)
    allCutFruit[10].Selected = true
    numSelectedFruit += 1
  }
  if (honeydewChunksSmVALUE > 0) {
    honeydew += (honeydewChunksSmVALUE*FILLDATA)
    allCutFruit[11].Selected = true
    numSelectedFruit += 1
  }
  if (cantaloupeChunksSmVALUE > 0) {
    cantaloupe += (cantaloupeChunksSmVALUE*FILLDATA)
    allCutFruit[12].Selected = true
    numSelectedFruit += 1
  }
  if (melonStrawberrySmVALUE > 0) {
    watermelon += (melonStrawberrySmVALUE*FILLDATA)
    honeydew += (melonStrawberrySmVALUE*FILLDATA)
    cantaloupe += (melonStrawberrySmVALUE*FILLDATA)
    strawberry += (melonStrawberrySmVALUE*FILLDATA)
    allCutFruit[13].Selected = true
    numSelectedFruit += 1
  }
  if (mixedBerryBowlSmVALUE > 0) {
    strawberry += (mixedBerryBowlSmVALUE*FILLDATA)
    blueberry += (mixedBerryBowlSmVALUE*FILLDATA)
    blackberry += (mixedBerryBowlSmVALUE*FILLDATA)
    raspberry += (mixedBerryBowlSmVALUE*FILLDATA)
    allCutFruit[14].Selected = true
    numSelectedFruit += 1
  }
  if (pineappleStrawberrySmVALUE > 0) {
    pineapple += (pineappleStrawberrySmVALUE*FILLDATA)
    strawberry += (pineappleStrawberrySmVALUE*FILLDATA)
    allCutFruit[15].Selected = true
    numSelectedFruit += 1
  }
  if (strawberriesSlicedSmVALUE > 0) {
    strawberry += (strawberriesSlicedSmVALUE*FILLDATA)
    allCutFruit[16].Selected = true
    numSelectedFruit += 1
  }



  if (seedlessWatermelonChunksLgVALUE > 0) {
    watermelon += (seedlessWatermelonChunksLgVALUE*FILLDATA)
    allCutFruit[17].Selected = true
    numSelectedFruit += 1
  }
  if (melonManiaLgVALUE > 0) {
    cantaloupe += (melonManiaLgVALUE*FILLDATA)
    honeydew += (melonManiaLgVALUE*FILLDATA)
    watermelon += (melonManiaLgVALUE*FILLDATA)
    allCutFruit[18].Selected = true
    numSelectedFruit += 1
  }
  if (mixedFruitSaladLgVALUE> 0) {
    watermelon += (mixedFruitSaladLgVALUE*FILLDATA)
    honeydew += (mixedFruitSaladLgVALUE*FILLDATA)
    cantaloupe += (mixedFruitSaladLgVALUE*FILLDATA)
    pineapple += (mixedFruitSaladLgVALUE*FILLDATA)
    strawberry += (mixedFruitSaladLgVALUE*FILLDATA)
    blueberry += (mixedFruitSaladLgVALUE*FILLDATA)
    allCutFruit[19].Selected = true
    numSelectedFruit += 1
  }
  if (tropicalFruitSaladLgVALUE > 0) {
    pineapple += (tropicalFruitSaladLgVALUE*FILLDATA)
    papaya += (tropicalFruitSaladLgVALUE*FILLDATA)
    mango += (tropicalFruitSaladLgVALUE*FILLDATA)
    kiwi += (tropicalFruitSaladLgVALUE*FILLDATA)
    allCutFruit[20].Selected = true
    numSelectedFruit += 1
  }
  if (pineappleStrawberryLgVALUE > 0) {
    pineapple += (tropicalFruitSaladLgVALUE*FILLDATA)
    strawberry += (tropicalFruitSaladLgVALUE*FILLDATA)
    allCutFruit[21].Selected = true
    numSelectedFruit += 1
  }



  if (watermelonSlicesVALUE > 0) {
    watermelon += (watermelonSlicesVALUE*FILLDATA)
    allCutFruit[22].Selected = true
    numSelectedFruit += 1
  }
  if (watermelonQuartersVALUE > 0) {
    watermelon += (watermelonQuartersVALUE*0.25)
    allCutFruit[23].Selected = true
    numSelectedFruit += 1
  }
  if (honeydewSlicesVALUE > 0) {
    honeydew += (honeydewSlicesVALUE*FILLDATA)
    allCutFruit[24].Selected = true
    numSelectedFruit += 1
  }
  if (cantaloupeSilcesVALUE > 0) {
    cantaloupe += (cantaloupeSilcesVALUE*FILLDATA)
    allCutFruit[25].Selected = true
    numSelectedFruit += 1
  }



  if (fruitTrayGrabNGoLrgstVALUE > 0) {
    watermelon += (fruitTrayGrabNGoLrgstVALUE*FILLDATA)
    cantaloupe += (fruitTrayGrabNGoLrgstVALUE*FILLDATA)
    honeydew += (fruitTrayGrabNGoLrgstVALUE*FILLDATA)
    pineapple += (fruitTrayGrabNGoLrgstVALUE*FILLDATA)
    grape += (fruitTrayGrabNGoLrgstVALUE*FILLDATA)
    allCutFruit[26].Selected = true
    numSelectedFruit += 1
  }
  if (celebrationFruitCarouselLgVALUE > 0) {
    watermelon += (celebrationFruitCarouselLgVALUE*FILLDATA)
    cantaloupe += (celebrationFruitCarouselLgVALUE*FILLDATA)
    honeydew += (celebrationFruitCarouselLgVALUE*FILLDATA)
    pineapple += (celebrationFruitCarouselLgVALUE*FILLDATA)
    grape += (celebrationFruitCarouselLgVALUE*FILLDATA)
    allCutFruit[27].Selected = true
    numSelectedFruit += 1
  }


//DIVIDE HERE REAL QUICK...


  if (eggBabySpinachLgVALUE > 0) {
    babyspinach += (eggBabySpinachLgVALUE*FILLDATA)
    whitemushroom += (eggBabySpinachLgVALUE*FILLDATA)
    cherrytomato += (eggBabySpinachLgVALUE*FILLDATA)
    yellowpepper += (eggBabySpinachLgVALUE*FILLDATA)
    redpepper += (eggBabySpinachLgVALUE*FILLDATA)
    redonion += (eggBabySpinachLgVALUE*FILLDATA)
    baconbits += (eggBabySpinachLgVALUE*FILLDATA)
    hardboiledegg += (eggBabySpinachLgVALUE*FILLDATA)
    allSalads[21].Selected = true
    numSelectedSalads += 1
  }
  if (fruitBabySpinachLgVALUE > 0) {
    babyspinach += (fruitBabySpinachLgVALUE*0.05)
    strawberry += (fruitBabySpinachLgVALUE*0.1125)
    blueberry += (fruitBabySpinachLgVALUE*0.20)
    walnut += (fruitBabySpinachLgVALUE*0.15)
    cranberry += (fruitBabySpinachLgVALUE*FILLDATA)
    allSalads[24].Selected = true
    numSelectedSalads += 1
  }
  if (babyKaleSaladwFruitLgVALUE > 0) {
    kale += (babyKaleSaladwFruitLgVALUE*FILLDATA)
    strawberry += (babyKaleSaladwFruitLgVALUE*FILLDATA)
    blueberry += (babyKaleSaladwFruitLgVALUE*FILLDATA)
    walnut += (babyKaleSaladwFruitLgVALUE*FILLDATA)
    cranberry += (babyKaleSaladwFruitLgVALUE*FILLDATA)
    allSalads[25].Selected = true
    numSelectedSalads += 1
  }
  if (kaleCaesarSaladLgVALUE > 0) {
    kale += (kaleCaesarSaladLgVALUE*FILLDATA)
    baconbits += (kaleCaesarSaladLgVALUE*FILLDATA)
    shreddedparmesan += (kaleCaesarSaladLgVALUE*FILLDATA)
    lemonwedge += (kaleCaesarSaladLgVALUE*FILLDATA)
    allSalads[28].Selected = true
    numSelectedSalads += 1
  }



  if (mangoSalsaSmVALUE > 0) {
    redpepper += (mangoSalsaSmVALUE*FILLDATA)
    greenpepper += (mangoSalsaSmVALUE*FILLDATA)
    whiteonion += (mangoSalsaSmVALUE*FILLDATA)
    cilantro += (mangoSalsaSmVALUE*FILLDATA)
    mango += (mangoSalsaSmVALUE*FILLDATA)
    limejuice += (mangoSalsaSmVALUE*FILLDATA)
    allSalads[8].Selected = true
    numSelectedSalads += 1
  }
  if (pineappleSalsaSmVALUE > 0) {
    redpepper += (pineappleSalsaSmVALUE*FILLDATA)
    whiteonion += (pineappleSalsaSmVALUE*FILLDATA)
    cilantro += (pineappleSalsaSmVALUE*FILLDATA)
    pineapple += (pineappleSalsaSmVALUE*FILLDATA)
    limejuice += (pineappleSalsaSmVALUE*FILLDATA)
    allSalads[9].Selected = true
    numSelectedSalads += 1
  }
  if (guacamoleDipSmVALUE > 0) {
    avacado += (guacamoleDipSmVALUE*FILLDATA)
    limejuice += (guacamoleDipSmVALUE*FILLDATA)
    romatomato += (guacamoleDipSmVALUE*FILLDATA)
    garlic += (guacamoleDipSmVALUE*FILLDATA)
    whiteonion += (guacamoleDipSmVALUE*FILLDATA)
    cilantro += (guacamoleDipSmVALUE*FILLDATA)
    allSalads[47].Selected = true
    numSelectedSalads += 1
  }
  if (tacoDipSmVALUE > 0) {
    sourcream += (tacoDipSmVALUE*FILLDATA)
    oldelpasotacomix += (tacoDipSmVALUE*FILLDATA)
    mediumchunkysalsa += (tacoDipSmVALUE*FILLDATA)
    shreddedcheddar += (tacoDipSmVALUE*FILLDATA)
    allSalads[46].Selected = true
    numSelectedSalads += 1
  }
  if (celerySlicedSmVALUE > 0) {
    celery += (celerySlicedSmVALUE*FILLDATA)
    allSalads[10].Selected = true
    numSelectedSalads += 1
  }
  if (omletteMixSmVALUE > 0) {
    redpepper += (omletteMixSmVALUE*0.5)
    greenpepper += (omletteMixSmVALUE*0.5)
    redonion += (omletteMixSmVALUE*0.25)
    whitemushroom += (omletteMixSmVALUE*FILLDATA)
    allSalads[7].Selected = true
    numSelectedSalads += 1
  }
  if (lunchPackLgVALUE > 0) {
    celery += (lunchPackLgVALUE*0.225)
    cucumber += (lunchPackLgVALUE*0.175)
    carrot += (lunchPackLgVALUE*FILLDATA)
    smalldip += (lunchPackLgVALUE*1)
    grape += (lunchPackLgVALUE*0.1)
    cherrytomato += (lunchPackLgVALUE*0.33)
    crackerbarrelcheese += (lunchPackLgVALUE*0.125)
    melbatoast += (lunchPackLgVALUE*1)
    allSalads[15].Selected = true
    numSelectedSalads += 1
  }



  if (asianVegetableMixLgVALUE > 0) {
    redpepper += (asianVegetableMixLgVALUE*FILLDATA)
    whitemushroom += (asianVegetableMixLgVALUE*FILLDATA)
    snowpea += (asianVegetableMixLgVALUE*FILLDATA)
    beansprout += (asianVegetableMixLgVALUE*FILLDATA)
    matchstickcarrot += (asianVegetableMixLgVALUE*FILLDATA)
    allSalads[20].Selected = true
    numSelectedSalads += 1
  }
  if (veggieStirFryMixLgVALUE > 0) {
    cauliflower += (veggieStirFryMixLgVALUE*FILLDATA)
    broccoli += (veggieStirFryMixLgVALUE*FILLDATA)
    whitemushroom += (veggieStirFryMixLgVALUE*FILLDATA)
    matchstickcarrot += (veggieStirFryMixLgVALUE*FILLDATA)
    zucchini += (veggieStirFryMixLgVALUE*FILLDATA)
    redonion += (veggieStirFryMixLgVALUE*FILLDATA)
    redpepper += (veggieStirFryMixLgVALUE*FILLDATA)
    yellowpepper += (veggieStirFryMixLgVALUE*FILLDATA)
    allSalads[18].Selected = true
    numSelectedSalads += 1
  }
  if (chickenStirFryMixLgVALUE > 0) {
    cauliflower += (chickenStirFryMixLgVALUE*FILLDATA)
    broccoli += (chickenStirFryMixLgVALUE*FILLDATA)
    whitemushroom += (chickenStirFryMixLgVALUE*FILLDATA)
    matchstickcarrot += (chickenStirFryMixLgVALUE*FILLDATA)
    zucchini += (chickenStirFryMixLgVALUE*FILLDATA)
    redonion += (chickenStirFryMixLgVALUE*FILLDATA)
    redpepper += (chickenStirFryMixLgVALUE*FILLDATA)
    yellowpepper += (chickenStirFryMixLgVALUE*FILLDATA)
    chickenbreast += (chickenStirFryMixLgVALUE*FILLDATA)
    allSalads[19].Selected = true
    numSelectedSalads += 1
  }
  if (slicedBellPepperMixLgVALUE > 0) {
    greenpepper += (slicedBellPepperMixLgVALUE*0.5)
    redpepper += (slicedBellPepperMixLgVALUE*0.5)
    orangepepper += (slicedBellPepperMixLgVALUE*0.5)
    yellowpepper += (slicedBellPepperMixLgVALUE*0.5)
    allSalads[6].Selected = true
    numSelectedSalads += 1
  }
  if (tomatoCucumberSaladwFetaLgVALUE > 0) {
    hothousetomato += (tomatoCucumberSaladwFetaLgVALUE*FILLDATA)
    cucumber += (tomatoCucumberSaladwFetaLgVALUE*FILLDATA)
    redonion += (tomatoCucumberSaladwFetaLgVALUE*FILLDATA)
    feta += (tomatoCucumberSaladwFetaLgVALUE*FILLDATA)
    oreganoflakes += (tomatoCucumberSaladwFetaLgVALUE*FILLDATA)
    allSalads[38].Selected = true
    numSelectedSalads += 1
  }
  if (greekSaladLgVALUE > 0) {
    romainelettuce += (greekSaladLgVALUE*FILLDATA)
    iceberglettuce += (greekSaladLgVALUE*FILLDATA)
    cucumber += (greekSaladLgVALUE*FILLDATA)
    cherrytomato += (greekSaladLgVALUE*0.2)
    blackolive += (greekSaladLgVALUE*0.25)
    feta += (greekSaladLgVALUE*FILLDATA)
    redonion += (greekSaladLgVALUE*FILLDATA)
    allSalads[37].Selected = true
    numSelectedSalads += 1
  }



  if (ceasarSaladLrgstVALUE > 0) {
    romainelettuce += (ceasarSaladLrgstVALUE*FILLDATA)
    baconbits += (ceasarSaladLrgstVALUE*FILLDATA)
    shreddedparmesan += (ceasarSaladLrgstVALUE*FILLDATA)
    lemonwedge += (ceasarSaladLrgstVALUE*FILLDATA)
    allSalads[29].Selected = true
    numSelectedSalads += 1
  }
  if (greekSaladLrgstVALUE > 0) {
    romainelettuce += (greekSaladLrgstVALUE*FILLDATA)
    iceberglettuce += (greekSaladLrgstVALUE*FILLDATA)
    cucumber += (greekSaladLrgstVALUE*FILLDATA)
    cherrytomato += (greekSaladLrgstVALUE*FILLDATA)
    blackolive += (greekSaladLrgstVALUE*FILLDATA)
    feta += (greekSaladLrgstVALUE*FILLDATA)
    redonion += (greekSaladLrgstVALUE*FILLDATA)
    allSalads[36].Selected = true
    numSelectedSalads += 1
  }
  if (gardenSaladLrgstVALUE > 0) {
    romainelettuce += (gardenSaladLrgstVALUE*0.15)
    springmix += (gardenSaladLrgstVALUE*FILLDATA)
    iceberglettuce += (gardenSaladLrgstVALUE*FILLDATA)
    cucumber += (gardenSaladLrgstVALUE*FILLDATA)
    cherrytomato += (gardenSaladLrgstVALUE*0.4)
    redpepper += (gardenSaladLrgstVALUE*0.125)
    yellowpepper += (gardenSaladLrgstVALUE*0.125)
    orangepepper += (gardenSaladLrgstVALUE*0.125)
    redcabbage += (gardenSaladLrgstVALUE*FILLDATA)
    redonion += (gardenSaladLrgstVALUE*FILLDATA)
    allSalads[41].Selected = true
    numSelectedSalads += 1
  }
  if (saladSimplyGardenLrgstVALUE > 0) {
    romainelettuce += (saladSimplyGardenLrgstVALUE*FILLDATA)
    springmix += (saladSimplyGardenLrgstVALUE*FILLDATA)
    iceberglettuce += (saladSimplyGardenLrgstVALUE*FILLDATA)
    cucumber += (saladSimplyGardenLrgstVALUE*FILLDATA)
    cherrytomato += (saladSimplyGardenLrgstVALUE*FILLDATA)
    redcabbage += (saladSimplyGardenLrgstVALUE*FILLDATA)
    matchstickcarrot += (saladSimplyGardenLrgstVALUE*FILLDATA)
    allSalads[39].Selected = true
    numSelectedSalads += 1
  }
  if (fruitBabySpinachLrgstVALUE > 0) {
    babyspinach += (fruitBabySpinachLrgstVALUE*0.1)
    strawberry += (fruitBabySpinachLrgstVALUE*0.25)
    blueberry += (fruitBabySpinachLrgstVALUE*0.33)
    walnut += (fruitBabySpinachLrgstVALUE*0.25)
    cranberry += (fruitBabySpinachLrgstVALUE*FILLDATA)
    allSalads[23].Selected = true
    numSelectedSalads += 1
  }



  if (vegetableTrayGrabNGoLrgstVALUE > 0) {
    carrot += (vegetableTrayGrabNGoLrgstVALUE*0.5)
    broccoli += (vegetableTrayGrabNGoLrgstVALUE*FILLDATA)
    cauliflower += (vegetableTrayGrabNGoLrgstVALUE*FILLDATA)
    cherrytomato += (vegetableTrayGrabNGoLrgstVALUE*2)
    largedip += (vegetableTrayGrabNGoLrgstVALUE*1)
    allSalads[16].Selected = true
    numSelectedSalads += 1
  }
  if (celebrationVegetableCarouselLgVALUE > 0) {
    carrot += (celebrationVegetableCarouselLgVALUE*0.3)
    broccoli += (celebrationVegetableCarouselLgVALUE*FILLDATA)
    cauliflower += (celebrationVegetableCarouselLgVALUE*FILLDATA)
    cherrytomato += (celebrationVegetableCarouselLgVALUE*FILLDATA)
    largedip += (celebrationVegetableCarouselLgVALUE*FILLDATA)
    allSalads[17].Selected = true
    numSelectedSalads += 1
  }



  if (originalCrunchMixLgVALUE > 0) {
    celery += (originalCrunchMixLgVALUE*FILLDATA)
    cucumber += (originalCrunchMixLgVALUE*FILLDATA)
    smalldip += (originalCrunchMixLgVALUE*1)
    cauliflower += (originalCrunchMixLgVALUE*FILLDATA)
    broccoli += (originalCrunchMixLgVALUE*FILLDATA)
    carrot += (originalCrunchMixLgVALUE*FILLDATA)
    cherrytomato += (originalCrunchMixLgVALUE*FILLDATA)
    allSalads[13].Selected = true
    numSelectedSalads += 1
  }
  if (carrotCeleryCrunchwDipLgVALUE > 0) {
    celery += (carrotCeleryCrunchwDipLgVALUE*FILLDATA)
    smalldip += (carrotCeleryCrunchwDipLgVALUE*FILLDATA)
    carrot += (carrotCeleryCrunchwDipLgVALUE*FILLDATA)
    allSalads[11].Selected = true
    numSelectedSalads += 1
  }
  if (crunchMixDeluxeLgVALUE > 0) {
    celery += (crunchMixDeluxeLgVALUE*FILLDATA)
    cucumber += (crunchMixDeluxeLgVALUE*FILLDATA)
    smalldip += (crunchMixDeluxeLgVALUE*1)
    cauliflower += (crunchMixDeluxeLgVALUE*FILLDATA)
    broccoli += (crunchMixDeluxeLgVALUE*FILLDATA)
    carrot += (crunchMixDeluxeLgVALUE*FILLDATA)
    cherrytomato += (crunchMixDeluxeLgVALUE*0.25)
    redpepper += (crunchMixDeluxeLgVALUE*0.125)
    yellowpepper += (crunchMixDeluxeLgVALUE*0.125)
    //FILL IN INGREDIENTS HERE
    allSalads[14].Selected = true
    numSelectedSalads += 1
  }
  if (broccoliCauliflowerCarrotLgVALUE > 0) {
    carrot += (broccoliCauliflowerCarrotLgVALUE*0.15)
    broccoli += (broccoliCauliflowerCarrotLgVALUE*FILLDATA)
    cauliflower += (broccoliCauliflowerCarrotLgVALUE*FILLDATA)
    allSalads[12].Selected = true
    numSelectedSalads += 1
  }
  if (arugulaBoccociniSaladLgVALUE > 0) {
    arugula += (arugulaBoccociniSaladLgVALUE*FILLDATA)
    cherrytomato += (arugulaBoccociniSaladLgVALUE*FILLDATA)
    boccocini += (arugulaBoccociniSaladLgVALUE*FILLDATA)
    raddicio += (arugulaBoccociniSaladLgVALUE*FILLDATA)
    allSalads[44].Selected = true
    numSelectedSalads += 1

  }
  if (arugulaPearGoatCheeseLgVALUE > 0) {
    //ADD HERE
    allSalads[45].Selected = true
    numSelectedSalads += 1
  }



  if (caeserSaladLgVALUE > 0) {
    romainelettuce += (caeserSaladLgVALUE*0.15)
    baconbits += (caeserSaladLgVALUE*FILLDATA)
    shreddedparmesan += (caeserSaladLgVALUE*FILLDATA)
    lemonwedge += (caeserSaladLgVALUE*FILLDATA)
    allSalads[30].Selected = true
    numSelectedSalads += 1
  }
  if (simplyGardenSaladLgVALUE > 0) {
    romainelettuce += (simplyGardenSaladLgVALUE*FILLDATA)
    springmix += (simplyGardenSaladLgVALUE*FILLDATA)
    iceberglettuce += (simplyGardenSaladLgVALUE*FILLDATA)
    cucumber += (simplyGardenSaladLgVALUE*FILLDATA)
    cherrytomato += (simplyGardenSaladLgVALUE*FILLDATA)
    redcabbage += (simplyGardenSaladLgVALUE*FILLDATA)
    matchstickcarrot += (simplyGardenSaladLgVALUE*FILLDATA)
    allSalads[40].Selected = true
    numSelectedSalads += 1
  }
  if (gardenSaladLgVALUE > 0) {
    romainelettuce += (gardenSaladLgVALUE*0.10)
    springmix += (gardenSaladLgVALUE*FILLDATA)
    iceberglettuce += (gardenSaladLgVALUE*FILLDATA)
    cucumber += (gardenSaladLgVALUE*FILLDATA)
    cherrytomato += (gardenSaladLgVALUE*FILLDATA)
    redpepper += (gardenSaladLgVALUE*0.083)
    yellowpepper += (gardenSaladLgVALUE*0.083)
    orangepepper += (gardenSaladLgVALUE*0.083)
    redcabbage += (gardenSaladLgVALUE*FILLDATA)
    redonion += (gardenSaladLgVALUE*FILLDATA)
    allSalads[42].Selected = true
    numSelectedSalads += 1
  }
  if (cheddarGardenSaladLgVALUE > 0) {
    romainelettuce += (cheddarGardenSaladLgVALUE*FILLDATA)
    springmix += (cheddarGardenSaladLgVALUE*FILLDATA)
    iceberglettuce += (cheddarGardenSaladLgVALUE*FILLDATA)
    cucumber += (cheddarGardenSaladLgVALUE*FILLDATA)
    cherrytomato += (cheddarGardenSaladLgVALUE*FILLDATA)
    redpepper += (cheddarGardenSaladLgVALUE*FILLDATA)
    yellowpepper += (cheddarGardenSaladLgVALUE*FILLDATA)
    orangepepper += (cheddarGardenSaladLgVALUE*FILLDATA)
    redcabbage += (cheddarGardenSaladLgVALUE*FILLDATA)
    redonion += (cheddarGardenSaladLgVALUE*FILLDATA)
    shreddedcheddar += (cheddarGardenSaladLgVALUE*FILLDATA)
    allSalads[43].Selected = true
    numSelectedSalads += 1
  }
  if (springMixSaladLgVALUE > 0) {
    springmix += (springMixSaladLgVALUE*FILLDATA)
    romainelettuce += (springMixSaladLgVALUE*FILLDATA)
    cucumber += (springMixSaladLgVALUE*FILLDATA)
    cherrytomato += (springMixSaladLgVALUE*FILLDATA)
    matchstickcarrot += (springMixSaladLgVALUE*FILLDATA)
    shreddedcheddar += (springMixSaladLgVALUE*FILLDATA)
    baconbits += (springMixSaladLgVALUE*FILLDATA)
    redonion += (springMixSaladLgVALUE*FILLDATA)
    allSalads[33].Selected = true
    numSelectedSalads += 1
  }
  if (mandarinChickenSaladLgVALUE > 0) {
    romainelettuce += (mandarinChickenSaladLgVALUE*FILLDATA)
    mandarinorange += (mandarinChickenSaladLgVALUE*FILLDATA)
    chickenbreast += (mandarinChickenSaladLgVALUE*FILLDATA)
    redcabbage += (mandarinChickenSaladLgVALUE*FILLDATA)
    redonion += (mandarinChickenSaladLgVALUE*FILLDATA)
    cranberry += (mandarinChickenSaladLgVALUE*FILLDATA)
    allSalads[27].Selected = true
    numSelectedSalads += 1
  }



  if (chickenCaeserSaladLrgstVALUE > 0) {
    romainelettuce += (chickenCaeserSaladLrgstVALUE*FILLDATA)
    baconbits += (chickenCaeserSaladLrgstVALUE*FILLDATA)
    shreddedparmesan += (chickenCaeserSaladLrgstVALUE*FILLDATA)
    lemonwedge += (chickenCaeserSaladLrgstVALUE*FILLDATA)
    chickenbreast += (chickenCaeserSaladLrgstVALUE*FILLDATA)
    allSalads[31].Selected = true
    numSelectedSalads += 1
  }
  if (chickenCaeserSaladLgVALUE > 0) {
    romainelettuce += (chickenCaeserSaladLgVALUE*FILLDATA)
    baconbits += (chickenCaeserSaladLgVALUE*FILLDATA)
    shreddedparmesan += (chickenCaeserSaladLgVALUE*FILLDATA)
    lemonwedge += (chickenCaeserSaladLgVALUE*FILLDATA)
    chickenbreast += (chickenCaeserSaladLgVALUE*FILLDATA)
    allSalads[32].Selected = true
    numSelectedSalads += 1
  }
  if (chickenGreekSaladLgVALUE > 0) {
    romainelettuce += (chickenGreekSaladLgVALUE*FILLDATA)
    iceberglettuce += (chickenGreekSaladLgVALUE*FILLDATA)
    cucumber += (chickenGreekSaladLgVALUE*FILLDATA)
    cherrytomato += (chickenGreekSaladLgVALUE*FILLDATA)
    blackolive += (chickenGreekSaladLgVALUE*FILLDATA)
    feta += (chickenGreekSaladLgVALUE*FILLDATA)
    redonion += (chickenGreekSaladLgVALUE*FILLDATA)
    chickenbreast += (chickenGreekSaladLgVALUE*FILLDATA)
    allSalads[35].Selected = true
    numSelectedSalads += 1
  }
  if (chickenSpringMixLgVALUE > 0) {
    springmix += (chickenSpringMixLgVALUE*FILLDATA)
    romainelettuce += (chickenSpringMixLgVALUE*FILLDATA)
    cucumber += (chickenSpringMixLgVALUE*FILLDATA)
    cherrytomato += (chickenSpringMixLgVALUE*FILLDATA)
    matchstickcarrot += (chickenSpringMixLgVALUE*FILLDATA)
    shreddedcheddar += (chickenSpringMixLgVALUE*FILLDATA)
    redonion += (chickenSpringMixLgVALUE*0.84)
    chickenbreast += (chickenSpringMixLgVALUE*FILLDATA)
    allSalads[34].Selected = true
    numSelectedSalads += 1
  }
  if (muskokaChickenSaladLgVALUE > 0) {
    romainelettuce += (muskokaChickenSaladLgVALUE*FILLDATA)
    springmix += (muskokaChickenSaladLgVALUE*FILLDATA)
    strawberry += (muskokaChickenSaladLgVALUE*FILLDATA)
    chickenbreast += (muskokaChickenSaladLgVALUE*FILLDATA)
    blueberry += (muskokaChickenSaladLgVALUE*FILLDATA)
    walnut += (muskokaChickenSaladLgVALUE*FILLDATA)
    pinenut += (muskokaChickenSaladLgVALUE*FILLDATA)
    allSalads[26].Selected = true
    numSelectedSalads += 1
  }
  if (cobbSaladLgVALUE > 0) {
    romainelettuce += (cobbSaladLgVALUE*FILLDATA)
    iceberglettuce += (cobbSaladLgVALUE*FILLDATA)
    cherrytomato += (cobbSaladLgVALUE*FILLDATA)
    chickenbreast += (cobbSaladLgVALUE*FILLDATA)
    baconbits += (cobbSaladLgVALUE*FILLDATA)
    wholekernalcorn += (cobbSaladLgVALUE*FILLDATA)
    hardboiledegg += (cobbSaladLgVALUE*FILLDATA)
    allSalads[22].Selected = true
    numSelectedSalads += 1
  }



  if (butternutSquashCubesGrillVALUE > 0) {
    cubedbutternutsquash += (butternutSquashCubesGrillVALUE*FILLDATA)
    oliveoil += (butternutSquashCubesGrillVALUE*FILLDATA)
    blackpepper += (butternutSquashCubesGrillVALUE*FILLDATA)
    allSalads[0].Selected = true
    numSelectedSalads += 1
  }
  if (mixedPetitePotatoGrillVALUE > 0) {
    redpetitepotato += (mixedPetitePotatoGrillVALUE*FILLDATA)
    yellowpetitepotato += (mixedPetitePotatoGrillVALUE*FILLDATA)
    oliveoil += (mixedPetitePotatoGrillVALUE*FILLDATA)
    blackpepper += (mixedPetitePotatoGrillVALUE*FILLDATA)
    allSalads[1].Selected = true
    numSelectedSalads += 1
  }
  if (yamMedallionGrillVALUE > 0) {
    cubedyam += (yamMedallionGrillVALUE*FILLDATA)
    oliveoil += (yamMedallionGrillVALUE*FILLDATA)
    blackpepper += (yamMedallionGrillVALUE*FILLDATA)
    allSalads[2].Selected = true
    numSelectedSalads += 1
  }
  if (mushroomGrillVALUE > 0) {
    creminimushroom += (mushroomGrillVALUE*1)
    oliveoil += (mushroomGrillVALUE*0)
    blackpepper += (mushroomGrillVALUE*0)
    thyme += (mushroomGrillVALUE*0)
    allSalads[3].Selected = true
    numSelectedSalads += 1
  }
  if (bbqSautePepperMedleyGrillVALUE > 0) {
    zucchini += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    greenpepper += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    redpepper += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    orangepepper += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    yellowpepper += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    redonion += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    oliveoil += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    blackpepper += (bbqSautePepperMedleyGrillVALUE*FILLDATA)
    allSalads[5].Selected = true
    numSelectedSalads += 1
  }
  if (asparagusGrillVALUE > 0) {
    asparagus += (asparagusGrillVALUE*FILLDATA)
    oliveoil += (asparagusGrillVALUE*FILLDATA)
    blackpepper += (asparagusGrillVALUE*FILLDATA)
    allSalads[4].Selected = true
    numSelectedSalads += 1
  }



//writing the ingredients to output
  document.getElementById("DisplayList").innerHTML += `<br><span style="color:green;font-size: 18px;">Downstairs</span>`;
  document.getElementById("DisplayList").innerHTML += `<br><span style="color:green;font-size: 18px;">Upstairs</span>`;

  //Fruit
  if (banana > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Banana <span class="multiplier">x${+ banana}</span></li>`;
  }
  if (blackberry > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Blackberry <span class="multiplier">x${+ blackberry}</span></li>`;
  }
  if (blueberry > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Blueberry <span class="multiplier">x${+ blueberry}</span></li>`;
  }
  if (cantaloupe > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cantaloupe <span class="multiplier">x${+ cantaloupe}</span></li>`;
  }
  if (grape > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Grape <span class="multiplier">x${+ grape}</span></li>`;
  }
  if (honeydew > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Honeydew <span class="multiplier">x${+ honeydew}</span></li>`;
  }
  if (kiwi > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Kiwi <span class="multiplier">x${+ kiwi}</span></li>`;
  }
  if (mango > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Mango <span class="multiplier">x${+ mango}</span></li>`;
  }
  if (papaya > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Papaya <span class="multiplier">x${+ papaya}</span></li>`;
  }
  if (pineapple > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Pineapple <span class="multiplier">x${+ pineapple}</span></li>`;
  }
  if (raspberry > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Raspberry <span class="multiplier">x${+ raspberry}</span></li>`;
  }
  if (strawberry > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Strawberry <span class="multiplier">x${+ strawberry}</span></li>`;
  }
  if (watermelon > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Watermelon <span class="multiplier">x${+ watermelon}</span></li>`;
  }

  //Misc Fruit Side
  if (granola > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Granola <span class="multiplier">x${+ granola}</span></li>`;
  }
  if (greekyogurt > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Greek Yogurt <span class="multiplier">x${+ greekyogurt}</span></li>`;
  }
  if (yogurt > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Yogurt <span class="multiplier">x${+ yogurt}</span></li>`;
  }


  //Veggie
  if (arugula > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Arugula <span class="multiplier">x${+ arugula}</span></li>`;
  }
  if (asparagus > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Asparagus <span class="multiplier">x${+ asparagus}</span></li>`;
  }
  if (avacado > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Avacado <span class="multiplier">x${+ avacado}</span></li>`;
  }
  if (babyspinach > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Baby Spinach <span class="multiplier">x${+ babyspinach}</span></li>`;
  }
  if (beansprout > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Bean Sprout <span class="multiplier">x${+ beansprout}</span></li>`;
  }
  if (blackolive > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Black Olive <span class="multiplier">x${+ blackolive}</span></li>`;
  }
  if (broccoli > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Broccoli <span class="multiplier">x${+ broccoli}</span></li>`;
  }
  if (carrot > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Baby Carrot <span class="multiplier">x${+ carrot}</span></li>`;
  }
  if (cauliflower > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cauliflower <span class="multiplier">x${+ cauliflower}</span></li>`;
  }
  if (celery > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Celery <span class="multiplier">x${+ celery}</span></li>`;
  }
  if (cherrytomato > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cherry Tomato <span class="multiplier">x${+ cherrytomato}</span></li>`;
  }
  if (cilantro > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cilantro <span class="multiplier">x${+ cilantro}</span></li>`;
  }
  if (creminimushroom > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cremini Mushroom <span class="multiplier">x${+ creminimushroom}</span></li>`;
  }
  if (cubedbutternutsquash > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cubed Butternut Squash <span class="multiplier">x${+ cubedbutternutsquash}</span></li>`;
  }
  if (cubedyam > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cubed Yam <span class="multiplier">x${+ cubedyam}</span></li>`;
  }
  if (cucumber > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cucumber <span class="multiplier">x${+ cucumber}</span></li>`;
  }
  if (greenpepper > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Green Pepper <span class="multiplier">x${+ greenpepper}</span></li>`;
  }
  if (hothousetomato > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Hothouse Tomato <span class="multiplier">x${+ hothousetomato}</span></li>`;
  }
  if (iceberglettuce > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Iceberg Lettuce <span class="multiplier">x${+ iceberglettuce}</span></li>`;
  }
  if (kale > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Kale <span class="multiplier">x${+ kale}</span></li>`;
  }
  if (matchstickcarrot > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Matchstick Carrot <span class="multiplier">x${+ matchstickcarrot}</span></li>`;
  }
  if (orangepepper > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Orange Pepper <span class="multiplier">x${+ orangepepper}</span></li>`;
  }
  if (raddicio > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Raddicio <span class="multiplier">x${+ raddicio}</span></li>`;
  }
  if (redcabbage > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Red Cabbage <span class="multiplier">x${+ redcabbage}</span></li>`;
  }
  if (redonion > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Red Onion <span class="multiplier">x${+ redonion}</span></li>`;
  }
  if (redpepper > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Red Pepper <span class="multiplier">x${+ redpepper}</span></li>`;
  }
  if (redpetitepotato > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Red Petite Potato <span class="multiplier">x${+ redpetitepotato}</span></li>`;
  }
  if (romatomato > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Roma Tomato <span class="multiplier">x${+ romatomato}</span></li>`;
  }
  if (romainelettuce > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Romaine Lettuce <span class="multiplier">x${+ romainelettuce}</span></li>`;
  }
  if (rosemary > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Rosemary <span class="multiplier">x${+ rosemary}</span></li>`;
  }
  if (snowpea > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Snow Pea <span class="multiplier">x${+ snowpea}</span></li>`;
  }
  if (springmix > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Spring Mix <span class="multiplier">x${+ springmix}</span></li>`;
  }
  if (thyme > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Thyme <span class="multiplier">x${+ thyme}</span></li>`;
  }
  if (whitemushroom > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>White Mushroom <span class="multiplier">x${+ whitemushroom}</span></li>`;
  }
  if (whiteonion > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>White Onion <span class="multiplier">x${+ whiteonion}</span></li>`;
  }
  if (wholekernalcorn > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Whole Kernal Corn <span class="multiplier">x${+ wholekernalcorn}</span></li>`;
  }
  if (yellowpepper > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Yellow Pepper <span class="multiplier">x${+ yellowpepper}</span></li>`;
  }
  if (yellowpetitepotato > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Yellow Petite Potato <span class="multiplier">x${+ yellowpetitepotato}</span></li>`;
  }
  if (zucchini > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Zucchini <span class="multiplier">x${+ zucchini}</span></li>`;
  }

  //Misc Veggie Side
  if (baconbits > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Bacon Bits <span class="multiplier">x${+ baconbits}</span></li>`;
  }
  if (blackpepper > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Black Pepper <span class="multiplier">x${+ blackpepper}</span></li>`;
  }
  if (boccocini > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Boccocini <span class="multiplier">x${+ boccocini}</span></li>`;
  }
  if (chickenbreast > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Chicken Breast <span class="multiplier">x${+ chickenbreast}</span></li>`;
  }
  if (crackerbarrelcheese > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Crackerbarrel Cheese <span class="multiplier">x${+ crackerbarrelcheese}</span></li>`;
  }
  if (cranberry > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Cranberry <span class="multiplier">x${+ cranberry}</span></li>`;
  }
  if (feta > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Feta <span class="multiplier">x${+ feta}</span></li>`;
  }
  if (garlic > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>(Jar) Garlic <span class="multiplier">x${+ garlic}</span></li>`;
  }
  if (hardboiledegg > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Hardboiled Egg <span class="multiplier">x${+ hardboiledegg}</span></li>`;
  }
  if (largedip > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Large Ranch Dip <span class="multiplier">x${+ largedip}</span></li>`;
  }
  if (lemonwedge > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Lemon <span class="multiplier">x${+ lemonwedge}</span></li>`;
  }
  if (limejuice > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Lime Juice <span class="multiplier">x${+ limejuice}</span></li>`;
  }
  if (mandarinorange > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Mandarin Orange <span class="multiplier">x${+ mandarinorange}</span></li>`;
  }
  if (sourcream > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Sourcream <span class="multiplier">x${+ sourcream}</span></li>`;
  }
  if (mediumchunkysalsa > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Medium Chunky Salsa <span class="multiplier">x${+ mediumchunkysalsa}</span></li>`;
  }
  if (melbatoast > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Melba Toast <span class="multiplier">x${+ melbatoast}</span></li>`;
  }
  if (oldelpasotacomix > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Old El Paso Taco Mix <span class="multiplier">x${+ oldelpasotacomix}</span></li>`;
  }
  if (oliveoil > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Olive Oil <span class="multiplier">x${+ oliveoil}</span></li>`;
  }
  if (oreganoflakes > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Oregano Flakes <span class="multiplier">x${+ oreganoflakes}</span></li>`;
  }
  if (pinenut > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Pinenut <span class="multiplier">x${+ pinenut}</span></li>`;
  }
  if (shreddedcheddar > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Shredded Cheddar <span class="multiplier">x${+ shreddedcheddar}</span></li>`;
  }
  if (shreddedparmesan > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Shredded Parmesan <span class="multiplier">x${+ shreddedparmesan}</span></li>`;
  }
  if (smalldip > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Small Ranch Dip <span class="multiplier">x${+ smalldip}</span></li>`;
  }
  if (walnut > 0) {
    document.getElementById("DisplayList").innerHTML += `<li>Walnut <span class="multiplier">x${+ walnut}</span></li>`;
  }


//set of array organizations begin here
//organizing by true for fruit
  let allCutFruitSelected = []
  allCutFruitSelected = allCutFruit.slice()
  allCutFruitSelected.sort(function(a,b){
  return (a.Selected === b.Selected)? 0 : a.Selected? -1 : 1;
  });

//organizing by true for salads
  let allSaladsSelected = []
  allSaladsSelected = allSalads.slice()
  allSaladsSelected.sort(function(a,b){
  return (a.Selected === b.Selected)? 0 : a.Selected? -1 : 1;
  });

//organizing selected by initial value and slicing trues FOR FRUIT
  let allCutFruitInitial = []
  allCutFruitInitial = allCutFruitSelected.slice(0, numSelectedFruit + 1)
  allCutFruitInitial.sort((a, b) => parseInt(a.InitialValue) - parseInt(b.InitialValue));
  console.log("This is the array, sliced into trues, and organized by initial value for fruit")
  console.log(allCutFruitInitial)
  let currentNumSelectedFruit = 0
  while (numSelectedFruit >= currentNumSelectedFruit){
    document.getElementById("IdealOrder").innerHTML += `<li>${allCutFruitInitial[currentNumSelectedFruit].Name} <span class="multiplier">x${allCutFruitInitial[currentNumSelectedFruit].ProduceValue}</span></li>`;
    currentNumSelectedFruit += 1
  }
//organizing selected by initial value and slicing trues FOR SALADS
  let allSaladsInitial = []
  allSaladsInitial = allSaladsSelected.slice(0, numSelectedSalads + 1)
  allSaladsInitial.sort((a, b) => parseInt(a.InitialValue) - parseInt(b.InitialValue));
  console.log("This is the array, sliced into trues, and organized by initial value for salads")
  console.log(allSaladsInitial)
  let currentNumSelectedSalads = 0
  while (numSelectedSalads >= currentNumSelectedSalads){
    document.getElementById("IdealOrder").innerHTML += `<li>${allSaladsInitial[currentNumSelectedSalads].Name} <span class="multiplier">x${allSaladsInitial[currentNumSelectedSalads].ProduceValue}</span></li>`;
    document.getElementById("Recipes").innerHTML += allSaladsInitial[currentNumSelectedSalads].Recipes
    console.log(allSaladsInitial[currentNumSelectedSalads].Name)
    console.log(allSaladsInitial[currentNumSelectedSalads].ProduceValue)
    currentNumSelectedSalads += 1
  }
}
