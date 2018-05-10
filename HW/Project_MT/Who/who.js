$(document).ready(function(){

	var profileSecArray = [];
	profileSecArray.push(new ProfileSecObj('#IdeaGuy'));
	profileSecArray.push(new ProfileSecObj('#Therapist'));
	profileSecArray.push(new ProfileSecObj('#Mr.No'));

	PageTitleAppear();
 
	//Run once to check on load
	
	for(var i=0;i<3;i++){
		if (InViewTrigger(profileSecArray[i].figure)){
			ProfileSecAppear(profileSecArray[i]);
			console.log(profileSecArray[i], ' in view on Start');
		};
	};

	//Nested in .scroll for continual checking.
	$(document).scroll(function(){


		for(var i=0;i<3;i++){
			if (InViewTrigger(profileSecArray[i].figure)){
				ProfileSecAppear(profileSecArray[i]);
				console.log(profileSecArray[i], ' in view on Start');
			};
		};
	});


	function PageTitleAppear(){
		var banner = $('.pageTitle h1');
		var caption = $('.pageTitle p');
		var pageTitleTl = new TimelineLite();


		pageTitleTl.staggerFrom([banner,caption], .4, {opacity:0, ease:Power2.easeIn, x:30},.1);
		console.log("mSec1Figure Loaded");
	};


	function ProfileSecObj(idStr){
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

	function ProfileSecAppear(section){

		var figureTl = new TimelineLite();
		var figcaptionTl = new TimelineLite();

		if (!(section.run)){
			figureTl.from(section.figure,.4,{opacity:0,y:'20%'})

			figcaptionTl.delay(0.1)
			.from(section.figcaption, .3, {scale:0, transformOrigin:'0% 0%'})
			.staggerFrom([section.title, section.caption], .4, {opacity:0, ease:Power2.easeIn, x:40},.1);

			console.log(profileSecArray[i], ' Loaded');
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
