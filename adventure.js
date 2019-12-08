 
 var btn1 = document.createElement("BUTTON");
  btn1.innerText = "start";
  btn1.id = "button1";
document.getElementById("game-container").appendChild(btn1);
var btn1 = document.getElementById("button1"); 

 var btn2 = document.createElement("BUTTON");
  btn2.innerText = "In de tijd reizen";
  btn2.id = "button2";
document.getElementById("game-container").appendChild(btn2);
var btn2 = document.getElementById("button2");

 var btn3 = document.createElement("BUTTON");
  btn3.innerText = "Terug in de tijd reizen";
  btn3.id = "button3";
document.getElementById("game-container").appendChild(btn3);
var btn3 = document.getElementById("button3");

 var btn4 = document.createElement("BUTTON");
  btn4.innerText = "sphinx";
  btn4.id = "button4";
document.getElementById("game-container").appendChild(btn4);
var btn4 = document.getElementById("button4");

 var btn5 = document.createElement("BUTTON");
  btn5.innerText = "nyx";
  btn5.id = "button5";
document.getElementById("game-container").appendChild(btn5);
var btn5= document.getElementById("button5");

 var btn6 = document.createElement("BUTTON");
  btn6.innerText = "Je pakt de schop en probeert de sleutel eruit te krijgen";
  btn6.id = "button6";
document.getElementById("game-container").appendChild(btn6);
var btn6= document.getElementById("button6");
 
var btn7 = document.createElement("BUTTON");
  btn7.innerText = "Je pakt de schep en je dood de zombie";
  btn7.id = "button7";
document.getElementById("game-container").appendChild(btn7);
var btn7= document.getElementById("button7");

 var btn8 = document.createElement("BUTTON");
  btn8.innerText = "ja";
  btn8.id = "button8";
document.getElementById("game-container").appendChild(btn8);
var btn8= document.getElementById("button8");

var btn9 = document.createElement("BUTTON");
  btn9.innerText = "nee";
  btn9.id = "button9";
document.getElementById("game-container").appendChild(btn9);
var btn9= document.getElementById("button9");

var btn10 = document.createElement("BUTTON");
  btn10.innerText = "peter pan";
  btn10.id = "button10";
document.getElementById("game-container").appendChild(btn10);
var btn10= document.getElementById("button10");

var btn11 = document.createElement("BUTTON");
  btn11.innerText = "peter parker";
  btn11.id = "button11";
document.getElementById("game-container").appendChild(btn11);
var btn11= document.getElementById("button11");


var btn12 = document.createElement("BUTTON");
  btn12.innerText = "geest van de toekomst";
  btn12.id = "button12";
document.getElementById("game-container").appendChild(btn12);
var btn12= document.getElementById("button12");


var btn13 = document.createElement("BUTTON");
  btn13.innerText = "geest van het heden";
  btn13.id = "button13";
document.getElementById("game-container").appendChild(btn13);
var btn13= document.getElementById("button13");


var btn14 = document.createElement("BUTTON");
  btn14.innerText = "je pakt 1 van die zwaarden";
  btn14.id = "button14";
document.getElementById("game-container").appendChild(btn14);
var btn14= document.getElementById("button14");


var btn15 = document.createElement("BUTTON");
  btn15.innerText = "je pakt het boek";
  btn15.id = "button15";
document.getElementById("game-container").appendChild(btn15);
var btn15= document.getElementById("button15");
 
var btn16 = document.createElement("BUTTON");
  btn16.innerText = "NEXT";
  btn16.id = "button16";
document.getElementById("game-container").appendChild(btn16);
var btn16= document.getElementById("button16");
 
var btn17 = document.createElement("BUTTON");
  btn17.innerText = "refresh";
  btn17.id = "button17";
document.getElementById("game-container").appendChild(btn17);
var btn17= document.getElementById("button17");

var btn18 = document.createElement("BUTTON");
  btn18.innerText = "end";
  btn18.id = "button18";
document.getElementById("game-container").appendChild(btn18);
var btn18= document.getElementById("button18");



function intro(){ 
document.body.style.backgroundImage = "url('img/start3.jpg')"


document.getElementById("description").style.color = " white";
document.getElementById("title").style.color = "maroon";
document.getElementById ("description2").style.color ="white";
 
btn1.onclick = function(){level1()};


btn1.style.display = "block"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "intro ";

var verhaal = document.getElementById("description");
verhaal.innerText ="In deze game moet je de goed antwoorden gokken om verder te gaan. Als je de vraag fout heb dan ga je gelijk naar het einde. In deze game komt ook kingdom of hearts,walking dead, nightmare on em street. Peter pan, christmas carol en shadowhunters in voor ";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText ="als je wilt beginnen druk dan op start";
}


intro();
// intro
function level1(){ 
document.body.style.backgroundImage = "url('img/img5.jpg')"


document.getElementById("description").style.color = " #ff3399 ";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){level2()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = " destiny island ";

var verhaal = document.getElementById("description");
verhaal.innerText ="Je ontwaakt op een eiland genaamd destiny island waar je samen woont met je vrienden. Je wilt het eiland verlaten. Om naar monstro te gaan heb je een sleutel nodig. Je krijgt die door te reizen naar een van de 4 werelden te reizen. de end of the world anders ga je steeds verder in de game en kom je naar de monstro.";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "er verschijnt 1 portaal je weet niet naar welke wereld je ga.";
}



//level 1

function level2(){ 
document.body.style.backgroundImage = "url('img/space2.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
btn1.onclick = function(){level2()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"



 
btn16.onclick = function(){traverse()};






var title = document.getElementById("title");
title.innerText = "traverse town ";


var verhaal = document.getElementById("description");
verhaal.innerText ="je bent in  een van de werelden beland je zier het bordje traverse town je komt ook achter dat je in de verleden tijd zit en er zijn vreemde wezens een ceremonie aan het doen  ze hebben een cape aan en je komt dichterbij en je ziet dat hun gezichten space voorstellen. De vreemde wezens zien je en schrikken er zo van dat ze er vandoor. Je besluitom verder te gaan. Je weet dat je een sleutel nodig heb om verder te gaan. Dus je besluit erachteraan te gaan. De space5 komt naar je toe.";
var  verhaal2=document.getElementById("description2")
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "";
}
//level 2
function traverse(){ 
document.body.style.backgroundImage = "url('img/space2.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
btn1.onclick = function(){traverse()};

btn1.style.display = "none"
btn2.style.display = "block"
btn3.style.display = "block"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"



 
btn2.onclick = function(){level3()};
btn3.onclick = function(){level9()};





var title = document.getElementById("title");
title.innerText = "traverse town ";


var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "zou je liever in tijd reizen of zou je terug in de tijd reizen.";
}
//traverse

function level3(){ 
document.body.style.backgroundImage = "url('img/tale5.jpg')"


document.getElementById("description").style.color = " white";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){wonderland()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"



var title = document.getElementById("title");
title.innerText = "wonderland ";

var verhaal = document.getElementById("description");
verhaal.innerText ="je hebt je eerste sleutel al binnen en ging door het portaal. Je ziet op het allemaal droom figuren. Je ziet in de verte wat je denkt is een mens met vleugels maar je weet het  niet zeker. Je  loop naar het figuur toe en het inderdaad een mens met vleugels. In werkelijkheid is het een god. Je vraagt waar je bent en ze zegt dat je in wonderland ben. Ze hoopt dat je veel goden weet en wilt weten wat voor god ze is. Ze geeft je een hint";

var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "";
}

// level 3 wonderland
function wonderland(){ 
document.body.style.backgroundImage = "url('img/tale5.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn4.onclick = function(){level4()};
btn5.onclick = function(){level5()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "block"
btn5.style.display = "block"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"



var title = document.getElementById("title");
title.innerText = "wonderland ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "ik ben de god die voor geluk zorgt wie o wie ben ik";
}
//wonderland
function level4(){ 
document.body.style.backgroundImage = "url('img/ghosttown.jpg')"


document.getElementById("description").style.color = "  #800000";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#800000";
 
btn16.onclick = function(){halloweentown()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "halloween town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="je bent aangekomen in het andere wereld. je zit in een auto met 1 andere politieagent. Je let even niet op en er komt een auto langs daarin zitten twee mensen en die schieten je. Op het een of ander moment wordt je wakker van een coma en je leert dat de wereld niet meer is zoals hij eerst was. Je ziet veel zombies je kant heen komen. je gaat naar een kamer. Daar zit een meisje.  Je hoort geluid en schrik opeens als een zombie binnen komt. En je ziet een sleutel tussen zijn borstbeen. En je ziet een schop liggen";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
//level4 halloweentown
function halloweentown(){ 
document.body.style.backgroundImage = "url('img/ghosttown.jpg')"


document.getElementById("description").style.color = "  #800000";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#800000";
 
btn6.onclick = function(){level9()};
btn7.onclick = function(){level6()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "block"
btn7.style.display = "block"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "halloween town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "wat zou je doen om de sleutel te bemachtigen ";
}
//halloween town
function level5(){ 
document.body.style.backgroundImage = "url('img/halloween2.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){nightmaretown()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = "nightmare town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="je ben in nightmare town terecht gekomen en je bent een kamer en er ligt iemand bij je in de kamer tis een klasgenootje die bij je komt logeren. Jullie vallen in slaap en je wordt wakker de persoon naast je ligt in een met haar lichaam in bloed. De politie komt en ze denken dat jij diegene hebt vermoord. Dagenlang komt de persoon terug en geeft je heel veel hints. De dagen erna geeft hij ene hoed aan je.";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
//level5  nighmare town
function nightmaretown(){ 
document.body.style.backgroundImage = "url('img/halloween2.jpg')"


document.getElementById("description").style.color = "  #800000";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn8.onclick = function(){level6()};
btn9.onclick = function(){level9()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "block"
btn9.style.display = "block"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = "nightmare town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "zou je de hoed aannemen ";
}
//nightmare town
function level6(){ 
document.body.style.backgroundImage = "url('img/ouat5.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){neverland()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = "neverland ";

var verhaal = document.getElementById("description");
verhaal.innerText ="Je bent beland in een nieuwe wereld. Je bent terecht gekomen op een eiland. Je dacht dat het je eigen eiland was maar opeens zie je elfen en er zie je een piratenboot. De piratenboot veert aan land precies voor je voeten en de piraten laten je op het schip. Ze zingen over een jongen die hier woont die nooit oud wordt. ";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
//level 6
function neverland(){ 
document.body.style.backgroundImage = "url('img/ouat5.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn10.onclick = function(){level7()};
btn11.onclick = function(){level9()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "block"
btn11.style.display = "block"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = "neverland ";

var verhaal = document.getElementById("description");
verhaal.innerText ="  ";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "wie is deze jongen die nooit oud wordt ";
}
//neverland
function level7(){ 
document.body.style.backgroundImage = "url('img/town6.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){christmastown()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = "christmas town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="Je bent nu terecht gekomen in het rustige Christmas Town. Je bent de baas van een bedrijf en je neef vraagt of je komt dineren met zijn gezin. Je zegt nee en wilt dat hij blijft werken tijdens kerst, want je gelooft niet in kerst . Hij is er niet mee eens en je ontslaat hem.  S avonds als je thuis ben komen er twee geesten. De geest van de toekomst en de geest van het heden. Hint: je moet hier niet naar 1 geest luisteren.";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
//level 7
function christmastown(){ 
document.body.style.backgroundImage = "url('img/town6.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="yellow";
 
btn12.onclick = function(){level9()};
btn13.onclick = function(){level8()};

btn1.style.display = "block"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "block"
btn13.style.display = "block"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "christmas town ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var verhaal2 = document.getElementById("description2");
verhaal2.innerText = "met welke geest wil je mee.";
}
//christmastown

function level8(){ 
document.body.style.backgroundImage = "url('img/new york2.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn16.onclick = function(){city()};


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "block"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "city of bones ";

var verhaal = document.getElementById("description");
verhaal.innerText ="je bent vandaag jarig en en je wordt 18. Je gaat met je beste vriendin simon naar zijn optreden. Een jongen komt tegen je aan en je zegt dat je hem kan zien. Je loop hem achterna en ze zijn in gevecht. Je verstop je en je kijkt heel goed om je heen. In een van die demonen dat ie een sleutel in zijn hand heeft. Je ziet om je heen een zwaard en je ziet een boek wat zal je doen";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}

//level 8
function city(){ 
  document.body.style.backgroundImage = "url('img/new york2.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn14.onclick = function(){level10()};
btn15.onclick = function(){level9()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "block"
btn15.style.display = "block"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"

var title = document.getElementById("title");
title.innerText = "city of bones ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = "wat zou je doen? ";
}

//city of bones
function level9(){ 
document.body.style.backgroundImage = "url('img/endoftheworld.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 


var title = document.getElementById("title");
title.innerText = "end of the world ";

btn17.onclick = function(){intro()};
btn18.onclick = function(){end()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "block"
btn18.style.display = "block"

var verhaal = document.getElementById("description");
verhaal.innerText ="je hebt het niet  overleefd. de wereld die je nu ziet is helemaal verwoest. als je opnieuw wilt spelen refresh je het spel.";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
// level 9



function level10(){ 
document.body.style.backgroundImage = "url('img/island6.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 
btn17.onclick = function(){intro()};
btn18.onclick = function(){end()};

btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "block"
btn18.style.display = "block"


var title = document.getElementById("title");
title.innerText = "monstro ";

var verhaal = document.getElementById("description");
verhaal.innerText ="je hebt alles overleefd en je bent bij het eiland monstro. als je opnieuw wilt spelen refresh je het spel.";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}


function end(){ 
document.body.style.backgroundImage = "url('img/world.jpg')"


document.getElementById("description").style.color = "  #ffcc66";
document.getElementById("title").style.color = "#b3ecff";
document.getElementById ("description2").style.color ="#b3ecff";
 


btn1.style.display = "none"
btn2.style.display = "none"
btn3.style.display = "none"
btn4.style.display = "none"
btn5.style.display = "none"
btn6.style.display = "none"
btn7.style.display = "none"
btn8.style.display = "none"
btn9.style.display = "none"
btn10.style.display = "none"
btn11.style.display = "none"
btn12.style.display = "none"
btn13.style.display = "none"
btn14.style.display = "none"
btn15.style.display = "none"
btn16.style.display = "none"
btn17.style.display = "none"
btn18.style.display = "none"


var title = document.getElementById("title");
title.innerText = " ";

var verhaal = document.getElementById("description");
verhaal.innerText ="";
var  verhaal2=document.getElementById("description2")
verhaal2.innerText = " ";
}
