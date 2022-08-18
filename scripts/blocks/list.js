// turret
let counter = 0;
const names = 
	["duo", "scatter", "scorch", "hail", "wave", 
	"lancer", "arc", "parallax", "swarmer",
	"salvo", "segment", "tsunami", "fuse",
	"ripple", "cyclone", "foreshadow", "spectre",
	"meltdown"];

l();
l();
l();

function l(){
	require("turrets/" + names[counter]);
	counter++;
}
