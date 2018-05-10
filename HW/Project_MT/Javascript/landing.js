$(document).ready(function(){
	var mSec1Figure= $('#mSec1 figure');
	var mSec2Figure = $('#mSec2 figure');

	var mSec1FigureRun = false;
	var mSec1Run = false;
	var mSec2FigureRun = false;
	var mSec2Run = false;

	var whoWhatWhyArray = [];
	whoWhatWhyArray.push(new WhoWhatWhySectionObj('#who'));
	whoWhatWhyArray.push(new WhoWhatWhySectionObj('#what'));
	whoWhatWhyArray.push(new WhoWhatWhySectionObj('#why'));

	var lastScrollTop = 0;
	var isScrollingUp = false;
	var headerRun = false;

	CallToActionAppear()
 
	//Run once to check on load
	if (InViewTrigger(mSec1Figure)){
		mSec1Appear();
		console.log('mSec1 in view on start');
	};
	if (InViewTrigger(mSec2Figure)){
		mSec2Appear();
		console.log('mSec2 in view on start');
	};
	
	for(var i=0;i<3;i++){
		if (InViewTrigger(whoWhatWhyArray[i].figure)){
			WhoWhatWhyAppear(whoWhatWhyArray[i]);
			console.log(whoWhatWhyArray[i], ' in view on Start');
		};
	};

	//Nested in .scroll for continual checking.
	$(document).scroll(function(){

		if (InViewTrigger(mSec1Figure)){
			mSec1Appear();
		};
		if (InViewTrigger(mSec2Figure)){
			mSec2Appear();
		};

		for(var i=0;i<3;i++){
			if (InViewTrigger(whoWhatWhyArray[i].figure)){
				WhoWhatWhyAppear(whoWhatWhyArray[i]);
			};

		};
	});



	function CallToActionAppear(){
		var callToAction = $('.callToAction');	

		var banner = $('h1');
		var bannerCap = $('p').eq(0);

		var CallTl = new TimelineLite();

		CallTl.from(callToAction, .1, {opacity: 0})

		.from(banner, 0.5, {ease:Power2.easeIn, y:"100%", opacity: 0})
		.from(bannerCap, 0.5, {ease:Power2.easeIn, y:"75%", opacity: 0});
	};


	function mSec1Appear(){
		var mSec1Figcap = $('#mSec1 figcaption');
		var mSec1Title = $('#mSec1 h2');
		var mSec1Caption = $('#mSec1 p');

		var mSec1Tl = new TimelineLite();

		if (!(mSec1FigureRun)){
			mSec1Tl.from(mSec1Figure,.65,{ease:Power2.easeIn, x:"-45%", opacity:0});
			mSec1FigureRun = true;
			console.log("mSec1Figure Loaded");

		};

		if (InViewTrigger(mSec1Figcap) && !(mSec1Run)){
			mSec1Tl.from(mSec1Figcap, .4, {scaleY:0, transformOrigin:'center top'})
			.staggerFrom([mSec1Title,mSec1Caption], .4, {opacity:0, ease:Power2.easeIn, x:30},.1);
			mSec1Run = true;
			console.log("mSec1Figcap Loaded");
		};

	};


	function mSec2Appear(){
		
		var mSec2Figcap = $('#mSec2 figcaption');
		var mSec2Title = $('#mSec2 h2');
		var mSec2Caption = $('#mSec2 p');

		var mSec2Tl = new TimelineLite();

		if (!(mSec2FigureRun)){
			mSec2Tl.from(mSec2Figure,.65,{ease:Power2.easeIn, x:"45%", opacity: 0});
			mSec2FigureRun = true;
			console.log("mSec2Figure Loaded");
		};

		if (InViewTrigger(mSec2Figcap) && !(mSec2Run)){
			mSec2Tl.from(mSec2Figcap, .4, {scaleY:0, transformOrigin:'center top'})
			.staggerFrom([mSec2Title,mSec2Caption], .4, {opacity:0, ease:Power2.easeIn, x:30},.1);
			mSec2Run = true;
			console.log("mSec2Figcap Loaded");
		};

	};

	function WhoWhatWhySectionObj(idStr){
		figureStr = idStr + ' figure';
		figcaptionStr = idStr + ' figcaption';
		titleStr = idStr + ' h2';
		captionStr = idStr + ' p';

		console.log(figureStr," ",figcaptionStr," ",titleStr," ",captionStr );

		this.figure=$(figureStr);
		this.figcaption=$(figcaptionStr);
		this.title=$(titleStr);
		this.caption=$(captionStr);
		this.name=idStr;

		this.run = false;

	}

	function WhoWhatWhyAppear(section){

		var figureTl = new TimelineLite();
		var figcaptionTl = new TimelineLite();

		if (!(section.run)){
			figureTl.from(section.figure,.4,{opacity:0,y:'20%'})

			figcaptionTl.delay(0.1)
			.from(section.figcaption, .3, {scale:0, transformOrigin:'0% 0%'})
			.staggerFrom([section.title, section.caption], .4, {opacity:0, ease:Power2.easeIn, x:40},.1);

			console.log(whoWhatWhyArray[i], ' Loaded');
			section.run = true;
		};

	};



	function InViewTrigger(el) {
	    var elemDocPosTop = el.offset().top;
	    //Getting position relative to the viewport
	    var elemWindowPosTop = elemDocPosTop - $(window).scrollTop();

	    // making the trigger point 90px north of the bottom of the
	    var triggerPoint = ($(window).innerHeight());

	    if((elemWindowPosTop <= triggerPoint)){
	    	return true;
	    }
	    else{
	    	return false;

	    }


	    
	    // modified code from:
	    // https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrollinghttps://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
	};

});

