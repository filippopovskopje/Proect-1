let mainPage = document.getElementById("main-page");
let game_content = document.getElementById("game_content");

if (mainPage || game_content) {
    function openNav() {
        document.querySelector('.div1').classList.add('openMenu');
        document.querySelector('.div2').classList.add('darkBackground');
    }
    function closeNav() {
        document.querySelector('.div1').classList.remove('openMenu');
        document.querySelector('.div2').classList.remove('darkBackground');
    }
    document.querySelector('.b-open').addEventListener('click', openNav);
    document.querySelector('.b-close').addEventListener('click', closeNav);
}

if (mainPage) {
    // ---------------------------Kartickite
    var karticka = `<div class="col-md-4 col-sm-6"><a href="gameinput.html" target="_blank">
<div class="big-div-game">
    <img src="images/input" alt="" class="img-responsive bgcolor3">
    <div class="small-div-game">
        <p class="bolder"> Наслов на игра:<span>input</span></p>
        <p>Категорија:<span class="bolder"> input</span></p>
        <img src="images/input" alt="" class="text-right img">
        <div class="clock-div"><i class="far fa-clock bolder"></i><div><p class="bolder">Времетраење</p>
        <span>input мин</span></div></div>
    </div></div></a></div>`;

    var kartickaSodrzina = [['1', '6.png', 'Dotmocracy', 'Акција', '6.png', '5-30'], ['2', '4.png', 'Mid-way Evaluation', 'Акција', '4.png', '30-60'],
    ['3', '6 (1).png', 'The 5 Whys', 'Иновација', '6 (1).png', '30-60'], ['4', '9.png', 'Future Trends', 'Иновација', '9.png', '60-120'],
    ['5', '3.png', 'Story Building', 'Иновации', '3.png', '30-60'], ['6', '3 (1).png', 'Take a Stand', 'Иновации', '3 (1).png', '60-120'],
    ['7', '3 (2).png', 'IDOARRT', 'Акција', '3 (2).png', '5-30'], ['8', '04.png', 'Action Steps', 'Акција', '04.png', '120-240'],
    ['9', '5.png', 'Letter to Myself', 'Визија', '5.png', '5-30'], ['10', '01.png', 'Аctive Listening', 'Лидерство', '01.png', '60-120'],
    ['11', '4 (1).png', 'Feedback: I appreciate', 'Лидерство', '4 (1).png', '60-120'], ['12', '11.png', 'Explore your values', 'Лидерство', '11.png', '60-120'],
    ['13', '06.png', 'Reflection Individual', 'Лидерство', '06.png', '30-60'], ['14', '10.png', 'Back-turned Feedback', 'Лидерство', '10.png', '60-120'],
    ['15', '2.png', 'Conflict Responses', 'Тим', '2.png', '60-120'], ['16', '6 (2).png', 'Team Reflection', 'Тим', '6 (2).png', '60-120'],
    ['17', '3 (3).png', 'Personal Presentations', 'Тим', '3 (3).png', '60-240'], ['18', '4 (2).png', 'Circles of influence', 'Тим', '4 (2).png', '30-120'],];
    function myfunction() {
        for (let i = 0; i < kartickaSodrzina.length; i++) {
            var ednaKarticka = karticka;
            for (let n = 0; n < kartickaSodrzina[i].length; n++) {
                ednaKarticka = ednaKarticka.replace("input", kartickaSodrzina[i][n]);
            }
            document.querySelector('.row1').innerHTML += ednaKarticka;
        }
    }
    myfunction();
}

if (game_content) {

    window.addEventListener('scroll', function scrolColor() {
        document.querySelector('.navgame').style.backgroundColor = 'rgb(67, 23, 129)';
    });
}