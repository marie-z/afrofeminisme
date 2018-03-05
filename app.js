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

var prenoms = ['Hana', 'Océane', 'Mélina', 'Laury Ann', 'Émilie', 'Awa', 'Aminata', 'Migna', 'Sena', 'Clarisse', 'George', 'Angela', 'Laura', 'Wendie', 'Mel', 'Bernadette', 'Liva'];
var prenomsCurrent = 0;
var prenomsInterval;

function startPrenomsAnimation () {
	prenomsInterval = setInterval(function() {
		if (prenomsCurrent > prenoms.length - 1) {
			prenomsCurrent = 0
		}
		document.getElementById('prenoms-animate').textContent = prenoms[prenomsCurrent]
		prenomsCurrent++;
	}, 375);
}

function stopPrenomsAnimation () {
	clearInterval(prenomsInterval)
}

function findBackground(el) {
	if(el.dataset) {
		return el.dataset.backgroundImage || findBackground(el.parentNode)
	} 
	return null
}

function updateBackground(url) {
	if (url !== null) {
		document.querySelector('.blur-bg').style.backgroundImage = 'url(' + url + ')'
	} else {
		document.querySelector('.blur-bg').style.backgroundImage = null		
	}
}

Reveal.addEventListener( 'ready', function( event ) {
	if (Reveal.isFirstSlide()) {
		startPrenomsAnimation()
		updateBackground(findBackground(event.currentSlide))
	}
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	if (event.indexh === 1 && event.indexv === 0) {
		startPrenomsAnimation()
	} else if (prenomsInterval !== null) {
		stopPrenomsAnimation()
	}
	updateBackground(findBackground(event.currentSlide))
});