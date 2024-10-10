define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();

return iatExtension({
      attribute2 : {
			name : 'Good', //Will appear in the data.
			title : {
				media : {word : 'Good'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Excellent'},
				{word: 'Glad'},
				{word: 'Delight'},
				{word: 'Spectacular'},
				{word: 'Celebrate'},
				{word: 'Triumph'},
				{word: 'Fantastic'},
				{word: 'Fabulous'}	
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute1 :	{
			name : 'Bad', //Will appear in the data.
			title : {
				media : {word : 'Bad'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Negative'},
				{word: 'Awful'},
				{word: 'Yucky'},
				{word: 'Boredom'},
				{word: 'Failure'},
				{word: 'Horrific'},
				{word: 'Horrible'},
				{word: 'Disaster'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : 
		{
			name : 'Exploration', 
			title : {
				media : {word : 'Exploration'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Creativity'},
				{word: 'Solving'},
				{word: 'Adventure'},
				{word: 'Searching'},
				{word: 'Discovery'},
				{word: 'Seeking'},
				{word: 'Curiosity'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'} 
		},
		category2 : 
		{
			name : 'Prescriptive', 
			title : {
				media : {word : 'Prescriptive'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Drills'},
				{word: 'Practice'},
				{word: 'Instructive'},
				{word: 'Strict'},
				{word: 'Perfection'},
				{word: 'Repetition'}, 
				{word: 'Discipline'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		
		//The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
			fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight automatic association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_equal_CatAvsCatB : 'Your data suggest little or no automatic association between attribute2 and attribute1 with categoryA and categoryB..',
    });
});
