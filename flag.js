document.getElementById(`start`).addEventListener(`click`, function Hello() {
let selectElement = document.getElementById(`list`).value;

if(selectElement == `Germany`) {
    function countryGermany() {
        for(let j = 1; j<=10; j++) {
            let Hello = [];
            Hello[0] = `Hello HTML`;
            Hello[1] = `Hello CSS`;
            Hello[2] = `Hello JS`;
            let rand = Hello.sort(func);
                function func(a, b) {
                    return 0.5 - Math.random();
                }
            let value = rand;
            value = (`<font color="#000000">` + value[0] + `</font>` + `<br \/>` + `<font color="red">` + value[1] + `</font>` + `<br \/>` + `<font color="#FFD700">` + value[2] + `</font>` + `<br \/>` + `<br \/>`);
            return value;
        }
    };
        let result = countryGermany();
        document.querySelector(`.out`).innerHTML = result;
} else if (selectElement == `Armenia`) {
    function countryArmenia() {
        for(let j = 1; j<=10; j++) {
            let Hello = [];
            Hello[0] = `Hello HTML`;
            Hello[1] = `Hello CSS`;
            Hello[2] = `Hello JS`;
            let rand = Hello.sort(func);
                function func(a, b) {
                    return 0.5 - Math.random();
                }
            let value = rand;
            value = (`<font color="#DB0000"> ${value[0]} </font> <br \/>  <font color="#00008B">  ${value[1]} </font> <br \/> <font color="#FFA500"> ${value[2]} </font> <br \/> <br \/>`);
            return value;
        }
    };
        let result = countryArmenia();
        document.querySelector(`.out`).innerHTML = result;
} else {
    function countryLithuania() {
        for(let j = 1; j<=10; j++) {
            let Hello = [];
            Hello[0] = `Hello HTML`;
            Hello[1] = `Hello CSS`;
            Hello[2] = `Hello JS`;
            let rand = Hello.sort(func);
                function func(a, b) {
                    return 0.5 - Math.random();
                }
            let value = rand;
            value = (`<font color="#F5C700">` + value[0] + `</font>` + `<br \/>` + `<font color="#327B48">` + value[1] + `</font>` + `<br \/>` + `<font color="#DB0000">` + value[2] + `</font>` + `<br \/>` + `<br \/>`);
            return value;
        }
    };
        let result = countryLithuania();
        document.querySelector(`.out`).innerHTML = result;
}
});


