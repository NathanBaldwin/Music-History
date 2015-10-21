var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Spring > by My Morning Jacket on the album Waterfall");
songs.unshift("Don't Make Me a Target > by Spoon on the album Ga Ga Ga Ga Ga");

console.log("Songs Added Array", songs);

var output = "";
var dash = "";
var artistAlbum = [];

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	songs[i] = songs[i].replace(/!/g, "");
	songs[i] = songs[i].replace(/>/g, "-");

	dash = songs[i].indexOf("-");
	console.log("index of dash", dash);


	if (dash !== -1) {
		artistAlbum[i] = songs[i].slice(dash + 1);
		songs[i] = songs[i].slice(0, dash);
	}

	console.log("Songs[i]", songs[i]);
	console.log("artistAlbum", artistAlbum);

	output += "<section><h2>" + songs[i] + "</h2> <h4>" + artistAlbum[i] + "</h4></section>";

}

console.log("output", output);

console.log("Deletes", songs);
console.log(songs[0])
console.log("test")

console.log("insertHTML", insertHTML)
// console.log('inner HTML', insertHTML.innerHTML)
// document.getElementById("insertHTML")


document.getElementById('insertHTML').innerHTML = output;

