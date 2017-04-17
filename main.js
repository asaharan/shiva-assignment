function doStuff(data){
	var stuffElm = $('.stuff');
	for(var i=0;i<data.length;i++){
		var cData = data[i];//current circle data
		var mainCircle = $('<div>');
		var xCircle = $('<div>');
		var yCircle = $('<div>');
		var zCircle = $('<div>');

		var mainCircleTitle = cData[0]*circleDiaMultiplier;
		
		var circleDiaMultiplier = 50/8571;

		var mainCircleDia = cData[1]*circleDiaMultiplier;
		var xCircleDia = cData[2]*circleDiaMultiplier;
		var yCircleDia = cData[3]*circleDiaMultiplier;
		var zCircleDia = cData[4]*circleDiaMultiplier;

		makeCircle(mainCircle, mainCircleDia,'#eee')
		makeCircle(xCircle,xCircleDia,'#f00');
		makeCircle(yCircle,xCircleDia,'#0f0');
		makeCircle(zCircle,xCircleDia,'#00f');

		mainCircle.append(xCircle);
		mainCircle.append(yCircle);
		mainCircle.append(zCircle);

		stuffElm.append(mainCircle);

		mainCircle.addClass('mainCircle');
		xCircle.addClass('innerCircle');
		yCircle.addClass('innerCircle');
		zCircle.addClass('innerCircle');
	}
}


function makeCircle(elem, dia, color){
	elem.css({width:dia, height:dia, 'border-radius':'50%', 'background-color':color});
}

var projectdata = [
	['Apr 1854',8571,1,0,5],
	['May 1854',23333,12,0,9],
	['Jun 1854',28333,11,0,6],
	['Jul 1854',28722,359,0,23],
	['Aug 1854',30246,828,1,30],
	['Sep 1854',30290,788,81,70],
	['Oct 1854',30643,503,132,128],
	['Nov 1854',29736,844,287,106],
	['Dec 1854',32779,1725,114,131],
	['Jan 1855',32393,2761,83,324],
	['Feb 1855',30919,2120,42,361],
	['Mar 1855',30107,1205,32,172],
	['Apr 1855',32252,477,48,57],
	['May 1855',35473,508,49,37],
	['Jun 1855',38863,802,209,31],
	['Jul 1855',42647,382,134,33],
	['Aug_1855,44614',483,164,25],
	['Sep 1855',47751,189,276,20],
	['Oct 1855',46852,128,53,18],
	['Nov 1855',37853,178,33,32],
	['Dec 1855',43217,91,18,28],
	['Jan 1856',44212,42,2,48],
	['Feb 1856',43485,24,0,19],
	['Mar 1856',46140,15,0,35],

];

doStuff(projectdata);