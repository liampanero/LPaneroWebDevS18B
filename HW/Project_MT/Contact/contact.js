$(document).ready(function(){

	var formObjArray = [];
	formObjArray.push(new FormArticleObj('#firstN'));
	formObjArray.push(new FormArticleObj('#lastN'));
	formObjArray.push(new FormArticleObj('#email'));
	formObjArray.push(new FormArticleObj('#who'));
	formObjArray.push(new FormArticleObj('#why'));

	PageTitleAppear();	
	FormArticleAppear(formObjArray);



	function PageTitleAppear(){
		var banner = $('.pageTitle h1');
		var caption = $('.pageTitle p');
		var pageTitleTl = new TimelineLite();


		pageTitleTl.staggerFrom([banner,caption], .4, {opacity:0, ease:Power2.easeIn, x:30},.1);
		console.log("mSec1Figure Loaded");
	};


	function FormArticleObj(idStr){
		labelStr = idStr + ' .label';
		inputStr = idStr + ' .input';

		console.log(labelStr," ",inputStr);

		this.article=$(idStr);
		this.label=$(labelStr);
		this.input=$(inputStr);
		this.name=idStr;

		this.run = false;

	}

	function FormArticleAppear(array){

		var verticleTl = new TimelineLite();
		var horizontalTl = new TimelineLite();
		var labelTl = new TimelineLite();


		if (!(array[4].run)){
			verticleTl.staggerFrom([array[0].input,array[1].input,array[2].input,array[3].input,array[4].input],0.2,{scaleY:0, transformOrigin:'top center'});
			horizontalTl.delay(0.4)
			.staggerFrom([array[0].article,array[1].article,array[2].article,array[3].article,array[4].article],0.2,{scaleX:0, transformOrigin:'left center'});
			labelTl.delay(.6)
			.staggerFrom([array[0].label,array[1].label,array[2].label,array[3].label,array[4].label], 0.2,{opacity:0});

			console.log(profileSecArray[i], ' Loaded');
			array[0].run = true;
			array[1].run = true;
			array[2].run = true;
			array[3].run = true;
			array[4].run = true;
		};

	};


});