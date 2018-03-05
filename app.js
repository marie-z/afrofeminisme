Reveal.initialize({
	controls: false,
	controlsTutorial: true,
	progress: true,
	keyboard: true,
	center: true,
	touch: true,
	mouseWheel: true,
	width: 320,
	height: 568,
});

var prenoms = ['Hana', 'Océane', 'Mélina', 'Laury Ann', 'Émilie', 'Awa', 'Aminata', 'Migna', 'Sena', 'Clarisse', 'George', 'Angela', 'Laura', 'Wendie', 'Mel', 'Bernadette'];
var prenomsCurrent = 0;
var prenomsInterval;

function startPrenomsAnimation () {
	prenomsInterval = setInterval(function() {
		if (prenomsCurrent > prenoms.length - 1) {
			prenomsCurrent = 0
		}
		document.getElementById('prenoms-animate').textContent = prenoms[prenomsCurrent]
		prenomsCurrent++;
	}, 150);
}

function stopPrenomsAnimation () {
	clearInterval(prenomsInterval)
}

Reveal.addEventListener( 'ready', function( event ) {
	if (Reveal.isFirstSlide()) {
		startPrenomsAnimation()
	}
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	if (Reveal.isFirstSlide()) {
		startPrenomsAnimation()
	} else if (prenomsInterval !== null) {
		stopPrenomsAnimation()
	}
});