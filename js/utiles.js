//var testData = [
//  {
//	 class: "pA", label: "Experiencia laboral", times: [
//    {"starting_time": 1359846000000, "ending_time": 1396735200000},
//    {"starting_time": 1399327200000, "ending_time": 1460412000000}]},
////  {class: "pB", label: "", times: [
////    {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
////  {class: "pC", label: "Certificaciones", times: [
////    {"starting_time": 1355761910000, "ending_time": 1355763910000}]},
//  ];

$(document).ready(function(e) {
 
	 var events = [
//	               {dates: [new Date(2011, 2, 31)], title: "2011 Season Opener", section: 0},
//	               {dates: [new Date(2012, 1, 29)], title: "Spring Training Begins", section: 2},
//	               {dates: [new Date(2012, 3, 5)], title: "Atlanta Braves @ New York Mets Game 1", section: 1},
//	               {dates: [new Date(2012, 3, 7)], title: "Atlanta Braves @ New York Mets Game 2", section: 1},
//	               {dates: [new Date(2012, 3, 8)], title: "Atlanta Braves @ New York Mets Game 3", section: 1},
//	               {dates: [new Date(2012, 3, 9), new Date(2012, 3, 11)], title: "Atlanta Braves @ Houston Astros", section: 1},
//	               {dates: [new Date(2012, 3, 13), new Date(2012, 3, 15)], title: "Milwaukee Brewers @ Atlanta Braves", section: 1},
//	               {dates: [new Date(2012, 3, 9), new Date(2012, 3, 11)], title: "Boston Red Sox @ Toronto Blue Jays", section: 1},
//	               {dates: [new Date(2012, 3, 13), new Date(2012, 3, 15)], title: "Baltimore Orioles @ Toronto Blue Jays", section: 1},
//	               {dates: [new Date(2012, 3, 17), new Date(2012, 3, 19)], title: "Tampa Bay Rays @ Toronto Blue Jays", section: 1},
//	               {dates: [new Date(2012, 3, 20), new Date(2012, 3, 23)], title: "Toronto Blue Jays @ Kansas City Royals", section: 1},
//	               {dates: [new Date(2012, 3, 5)], title: "Opening Day for 12 Teams", section: 1},
//	               {dates: [new Date(2012, 2, 28)], title: "Seattle Mariners v. Oakland A's", section: 1, description: "Played in Japan!"},
//	               {dates: [new Date(2012, 4, 18), new Date(2012, 5, 24)], title: "Interleague Play", section: 1},
//	               {dates: [new Date(2012, 5, 10)], title: "All-Star Game", section: 1},
//	               {dates: [new Date(2012, 9, 24)], title: "World Series Begins", section: 3}
	               ];

	               var sections = [
	               {dates: [new Date(2013, 4, 2), new Date(2013, 6, 16)], title: "Practicas en CRC", section: 0, attrs: {fill: "#d4e3fd"}},
	               {dates: [new Date(2013, 6, 17), new Date(2014, 12, 16)], title: "Consultant CRC", section: 1, attrs: {fill: "#d4e3fd"}},
	               {dates: [new Date(2014, 12, 16), new Date(2015, 12, 31)], title: "Client Consultant @iberia", section: 2, attrs: {fill: "#eaf0fa"}},
	            
	               ];
	
	 var timeline3 = new Chronoline(document.getElementById("temp"), events,
		        {visibleSpan: DAY_IN_MILLISECONDS * 366,
		      animated: true,
		         tooltips: true,
		         defaultStartDate: new Date(2013, 4, 1),
		         sections: sections,
		         sectionLabelAttrs: {'fill': '#997e3d', 'font-weight': 'bold'},
		      labelInterval: isHalfMonth,
		      hashInterval: isHalfMonth,
		      scrollLeft: prevQuarter,
		      scrollRight: nextQuarter,
		      floatingSubLabels: false,
		      });

});