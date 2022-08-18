// turret
let counter = 0;
const turrets = 
	["duo", "scatter", "scorch", "hail", "wave", 
	"lancer", "arc", "parallax", "swarmer",
	"salvo", "segment", "tsunami", "fuse",
	"ripple", "cyclone", "foreshadow", "spectre",
	"meltdown"];

tur();
tur();
tur();

function tur(){
	require("blocks/turrets/" + turrets[counter]);
	counter++;
}
