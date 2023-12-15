
var ee = 2.75;
var com = 4.50;

function SaveChanges()
{

}

function randomPrice(nimi)
{
    const domnames = {".ee": 2.5, ".com": 4.5, ".live": 2.3, ".tech": 2.4}

    for (let key in domnames) {
        if(key == nimi)
        {
            return domnames[key];
        }
      }
}

function generatePSWD() {
    let randPSWD = "";
    let lenOfPSWD = 12;
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    
    for (let i = 0; i < lenOfPSWD; i++) {
        let randChar = Math.floor(Math.random() * characters.length);
        randPSWD += characters.substring(randChar, randChar + 1);
    }
    
    document.getElementById("showPSWD1").value = randPSWD;
    document.getElementById("showPSWD2").value = document.getElementById("showPSWD1").value;
}