function startTime() {
    var BezeichnungMonate = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var BezeichnungWochentage = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var Heute = new Date();
    var Jahr = Heute.getFullYear();
    var Monat = BezeichnungMonate[Heute.getMonth()];
    var Tag = BezeichnungWochentage[Heute.getDay()];
    var Stunde = Heute.getHours();
    var Minute = fixZeroes(Heute.getMinutes());
    var Datum = Heute.getDate();

    var Tageszeit = "";
    var TageszeitIcon = "";
    if (Stunde >= 5 && Stunde < 11) {
        Tageszeit = "Sabah";
        TageszeitIcon = "images/sunrise.png";
    } else if (Stunde >= 11 && Stunde < 15) {
        Tageszeit = "Öğle";
        TageszeitIcon = "images/midday.png";
    } else if (Stunde >= 15 && Stunde < 18) {
        Tageszeit = "Gündüz";
        TageszeitIcon = "images/afternoon.png";
    } else if (Stunde >= 18 && Stunde < 22) {
        Tageszeit = "Akşam";
        TageszeitIcon = "images/sunset.png";
    } else {
        Tageszeit = "Gece";
        TageszeitIcon = "images/night.png";
    }

    document.getElementById('wtl-Tag').innerHTML = Tag.toUpperCase();
    document.getElementById('wtl-Tageszeit').innerHTML = Tageszeit;
    document.getElementById('wtl-TageszeitIcon').src = TageszeitIcon;
    document.getElementById('wtl-Datum').innerHTML = "<small>" + Datum + "</small> " + Monat + " " + Jahr;
    document.getElementById('wtl-Uhrzeit').innerHTML = Stunde + ":" + Minute;
    
    setTimeout(startTime, 1000);
}

function fixZeroes(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}
