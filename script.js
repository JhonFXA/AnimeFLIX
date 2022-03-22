var catalogo = document.getElementById("catalogo");
var aviso = document.getElementById("aviso");

var animes = [
  "https://www.animexhd.com/wp-content/uploads/2019/09/Naruto-Classico-Capa.jpg", "https://images.justwatch.com/poster/8603866/s718", "https://br.web.img3.acsta.net/pictures/16/03/01/16/59/300795.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg", "https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61317.jpg", "https://upload.wikimedia.org/wikipedia/en/a/aa/JoJo_Part_1_Phantom_Blood.jpg", "https://maisdeoitomil.files.wordpress.com/2020/12/attack-on-titan-poster.jpg", "https://assistiranimeson.com/wp-content/uploads/2021/01/kimetsu-no-yaiba-185x278.jpg", "https://animesbr.biz/wp-content/uploads/2019/07/phuYuzqWW9ru8EA3HVjE9W2Rr3M-185x278.jpg"
];

for (i = 0; i < animes.length; i++) {
  catalogo.innerHTML += "<img src=" + animes[i] + ">";
}

function Adicionar() {
  var link = document.getElementById("link").value;
  if (link.endsWith("jpg")) {
      if (animes.indexOf(link) != -1) {
    aviso.innerHTML = "Você já adicionou este anime!";
  }

  else {
    aviso.innerHTML = "";
    animes.push(link);
    catalogo.innerHTML = catalogo.innerHTML + "<img src=" + link + ">";
  }
  }
  else {
    console.error("Endereço Inválido")
  }
  
   document.getElementById("link").value = ""
}