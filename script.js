async function startTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Berlin');
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        
        const BezeichnungMonate = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
        const BezeichnungWochentage = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        const Jahr = dateTime.getFullYear();
        const Monat = BezeichnungMonate[dateTime.getMonth()];
        const Tag = BezeichnungWochentage[dateTime.getDay()];
        const Stunde = dateTime.getHours();
        const Minute = fixZeroes(dateTime.getMinutes());
        const Datum = dateTime.getDate();
        
        let Tageszeit = "";
        let TageszeitIcon = "";
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
        document.getElementById('wtl-Datum').innerHTML = "<small>" + Datum + "</sup> " + Monat + " " + Jahr + "</small>";
        document.getElementById('wtl-Uhrzeit').innerHTML = Stunde + ":" + Minute;

        setTimeout(startTime, 1000);

    } catch (error) {
        const today = new Date();
        const Stunde = today.getHours();
        const Minute = fixZeroes(today.getMinutes());
        document.getElementById('wtl-Uhrzeit').innerHTML = Stunde + ":" + Minute;
    }
}

function fixZeroes(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
