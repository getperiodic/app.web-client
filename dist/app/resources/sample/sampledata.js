'use strict'

var sample_content = {
	"contentspec":{
		"config":{
			"html":{
				"dom_title":"Best Slideshow Ever",
				"dom_id":"p_c_lvs-id"
			}
		},
		"content":[
			{
				"title": "Travel & Leisure Transporter",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "How to explain the difference a beachfront hotel makes? “More than unobstructed views, it’s about the freedom of not having to look both ways to cross the street before feeling sand between your toes,” says Matt Thomson, founder of <a title='Wavecation.com' href='http://www.wavecation.com' target='_blank'>Wavecation.com</a>, a surfing-focused vacation rental company.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/la-casa-que-canta.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels"
			},{
				"title": "No. 1 Southern Ocean Lodge, Kangaroo Island, Australia",
				"dek": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide.",
				"content": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide. Each of the 21 suites offers limestone floors, an outdoor terrace, and works by local artisans. (Air-conditioning is unnecessary; the property was constructed to take advantage of natural weather patterns.) For a spectacular ocean view from a hand-carved granite bath, book the glass-walled Osprey Pavilion suite, which also features a private plunge spa and sunken lounge.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/southern-ocean-lodge-sunset.jpg'>",
				"date": "March 7, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/2"
			},{
				"title": "No. 2 Discovery Shores Boracay, Boracay, Philippines'",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "The 2 1/2-mile stretch known as White Beach is often singled out for having the softest sand in the world—and it’s the setting for this resort and its 88 suites (some with private Jacuzzis). The water’s fine, whether you want to take a dip in the infinity pool or Jet Ski on the Sibuyan Sea. For people-watching, head to the Sandbar, where bartenders stir up lychee- and mango-infused mojitos.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/discovery-shores-boracay.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/3"
			},{
				"title": "No. 3 Lizard Island Resort, Great Barrier Reef, Australia",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "With 24 beaches fringing the Great Barrier Reef and accommodations for just 40 couples, Lizard Island is in a category all its own. Open-plan suites are done in royal blue, turquoise, and stark white to mimic the Coral Sea below, with hammocks and decks discreetly hidden from view. Count on sunset cruises, torchlit beach dinners, and complimentary gourmet picnic baskets. Book an Anchor Bay Suite for a direct pathway to the beach and daybed sunbathing from a personal veranda.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/live-aqua-cancun.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/4"
			},{
				"title": "No. 4 Hotel Santa Caterina, Amalfi, Italy",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "Now in its fourth generation of Gambardella family management, this 1904 looker still reigns in Belle Époque splendor. Rooms are spread across the main building, two villas, and a triplet of honeymoon cottages and decorated with local antiques. An elevator descends to a private beach, saltwater pool, fitness center, and thatched-roof pizzeria and fish grill. As you stroll through the secluded terraced gardens and citrus orchards, it’s obvious why Liz Taylor and Richard Burton chose to hide out here.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/grand-velas-mexico.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/5"
			}
		]
	}
};
var sample_content_scrolllist = {
	"contentspec":{
		"config":{
			"html":{
				"dom_title":"Best Slideshow Ever",
				"dom_id":"p_c_lvs-id-scrolllist"
			}
		},
		"content":[
			{
				"title": "Travel & Leisure Transporter",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "How to explain the difference a beachfront hotel makes? “More than unobstructed views, it’s about the freedom of not having to look both ways to cross the street before feeling sand between your toes,” says Matt Thomson, founder of <a title='Wavecation.com' href='http://www.wavecation.com' target='_blank'>Wavecation.com</a>, a surfing-focused vacation rental company.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/la-casa-que-canta.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels"
			},{
				"title": "No. 1 Southern Ocean Lodge, Kangaroo Island, Australia",
				"dek": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide.",
				"content": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide. Each of the 21 suites offers limestone floors, an outdoor terrace, and works by local artisans. (Air-conditioning is unnecessary; the property was constructed to take advantage of natural weather patterns.) For a spectacular ocean view from a hand-carved granite bath, book the glass-walled Osprey Pavilion suite, which also features a private plunge spa and sunken lounge.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/southern-ocean-lodge-sunset.jpg'>",
				"date": "March 7, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/2"
			},{
				"title": "No. 2 Discovery Shores Boracay, Boracay, Philippines'",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "The 2 1/2-mile stretch known as White Beach is often singled out for having the softest sand in the world—and it’s the setting for this resort and its 88 suites (some with private Jacuzzis). The water’s fine, whether you want to take a dip in the infinity pool or Jet Ski on the Sibuyan Sea. For people-watching, head to the Sandbar, where bartenders stir up lychee- and mango-infused mojitos.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/discovery-shores-boracay.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/3"
			},{
				"title": "No. 3 Lizard Island Resort, Great Barrier Reef, Australia",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "With 24 beaches fringing the Great Barrier Reef and accommodations for just 40 couples, Lizard Island is in a category all its own. Open-plan suites are done in royal blue, turquoise, and stark white to mimic the Coral Sea below, with hammocks and decks discreetly hidden from view. Count on sunset cruises, torchlit beach dinners, and complimentary gourmet picnic baskets. Book an Anchor Bay Suite for a direct pathway to the beach and daybed sunbathing from a personal veranda.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/live-aqua-cancun.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/4"
			},{
				"title": "No. 4 Hotel Santa Caterina, Amalfi, Italy",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "Now in its fourth generation of Gambardella family management, this 1904 looker still reigns in Belle Époque splendor. Rooms are spread across the main building, two villas, and a triplet of honeymoon cottages and decorated with local antiques. An elevator descends to a private beach, saltwater pool, fitness center, and thatched-roof pizzeria and fish grill. As you stroll through the secluded terraced gardens and citrus orchards, it’s obvious why Liz Taylor and Richard Burton chose to hide out here.",
				"media": "<img src='https://raw.github.com/getperiodic/component.list-view-scroll/master/example/assets/images/slides/grand-velas-mexico.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/5"
			}
		]
	}
};
var sample_navdata = {
	"navigationspec":{
		"config":{
			"html":{
				"dom_init_class":"ha-header-small",
				"dom_id":"ha-header"
			}
		},
		"content":{
			"heading":{
				"navtype":"html",
				"navlabel":"Travel + Leisure",
				"navhtml":"<a href='/'><img src='https://gpsampledata.s3.amazonaws.com/component.navigation-header/tl-lg.png'/></a>"
			},
			"nav":[{
				"navtype":"link",
				"navlabel":"guides",
				"navurl":"/travel-guide",
				"nav":[{
					"navtype":"link",
					"navlabel":"US + Canada",
					"navurl":"/travel-guide/us-canada"
				},{
					"navtype":"link",
					"navlabel":"Europe",
					"navurl":"/travel-guide/espn"
				},{
					"navtype":"link",
					"navlabel":"Caribbean",
					"navurl":"/travel-guide/caribbean"
				},{
					"navtype":"link",
					"navlabel":"Asia",
					"navurl":"/travel-guide/asia"
				}]
			},{
				"navtype":"link",
				"navlabel":"cruises",
				"navurl":"/cruises"
			},{
				"navtype":"link",
				"navlabel":"ideas",
				"navurl":"/vacation-ideas",
				"nav":[{
					"navtype":"link",
					"navlabel":"Adventure Travel",
					"navurl":"/vacation-ideas/adventure"
				},{
					"navtype":"link",
					"navlabel":"Beach Vacations",
					"navurl":"/vacation-ideas/beach"
				},{
					"navtype":"link",
					"navlabel":"Business Travel",
					"navurl":"/vacation-ideas/business-travel"
				},{
					"navtype":"link",
					"navlabel":"Cruise Vacations",
					"navurl":"/vacation-ideas/cruise"
				},{
					"navtype":"link",
					"navlabel":"Family Vacations",
					"navurl":"/vacation-ideas/family"
				}]
			},{
				"navtype":"link",
				"navlabel":"awards",
				"navurl":"/travel-awards",
				"nav":[{
					"navtype":"link",
					"navlabel":"World's Best Awards",
					"navurl":"/worldsbest"
				},{
					"navtype":"link",
					"navlabel":"T+L 500 Best Hotels",
					"navurl":"/tl500/2013"
				},{
					"navtype":"link",
					"navlabel":"America's Favorite Towns",
					"navurl":"/americas-favorite-towns"
				},{
					"navtype":"link",
					"navlabel":"America's Favorite Cities",
					"navurl":"/americas-favorite-cities"
				},{
					"navtype":"link",
					"navlabel":"It List: Best New Hotels",
					"navurl":"/articles/it-list-the-best-new-hotels-2013"
				}]
			},{
				"navtype":"link",
				"navlabel":"news",
				"navurl":"/news"
			},{
				"navtype":"html",
				"navlabel":"search",
				"navhtml":"<a class='search-nav'><form><input type='text'/></form></a>"
			}]
		}
	}
};
var sample_staticcontent = {
	"contentspec":{
		"config":{
			"html":{
				"dom_title":"Best Slideshow Ever",
				"dom_id":"p_c_lvs-id"
			}
		},
		"layout":{
			"engine":"bootstrap",
			"grid":[{"size":"medium","columns":"2"},{"size":"small","columns":"1"}]
		},
		"content":[
			{
				"title": "Travel & Leisure Transporter",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "How to explain the difference a beachfront hotel makes? “More than unobstructed views, it’s about the freedom of not having to look both ways to cross the street before feeling sand between your toes,” says Matt Thomson, founder of <a title='Wavecation.com' href='http://www.wavecation.com' target='_blank'>Wavecation.com</a>, a surfing-focused vacation rental company.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/la-casa-que-canta.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels"
			},{
				"title": "No. 1 Southern Ocean Lodge, Kangaroo Island, Australia",
				"dek": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide.",
				"content": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide. Each of the 21 suites offers limestone floors, an outdoor terrace, and works by local artisans. (Air-conditioning is unnecessary; the property was constructed to take advantage of natural weather patterns.) For a spectacular ocean view from a hand-carved granite bath, book the glass-walled Osprey Pavilion suite, which also features a private plunge spa and sunken lounge.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/southern-ocean-lodge-sunset.jpg'>",
				"date": "March 7, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/2"
			},{
				"title": "No. 2 Discovery Shores Boracay, Boracay, Philippines'",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "The 2 1/2-mile stretch known as White Beach is often singled out for having the softest sand in the world—and it’s the setting for this resort and its 88 suites (some with private Jacuzzis). The water’s fine, whether you want to take a dip in the infinity pool or Jet Ski on the Sibuyan Sea. For people-watching, head to the Sandbar, where bartenders stir up lychee- and mango-infused mojitos.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/discovery-shores-boracay.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/3"
			},{
				"title": "No. 3 Lizard Island Resort, Great Barrier Reef, Australia",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "With 24 beaches fringing the Great Barrier Reef and accommodations for just 40 couples, Lizard Island is in a category all its own. Open-plan suites are done in royal blue, turquoise, and stark white to mimic the Coral Sea below, with hammocks and decks discreetly hidden from view. Count on sunset cruises, torchlit beach dinners, and complimentary gourmet picnic baskets. Book an Anchor Bay Suite for a direct pathway to the beach and daybed sunbathing from a personal veranda.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/live-aqua-cancun.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/4"
			},{
				"title": "No. 4 Hotel Santa Caterina, Amalfi, Italy",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "Now in its fourth generation of Gambardella family management, this 1904 looker still reigns in Belle Époque splendor. Rooms are spread across the main building, two villas, and a triplet of honeymoon cottages and decorated with local antiques. An elevator descends to a private beach, saltwater pool, fitness center, and thatched-roof pizzeria and fish grill. As you stroll through the secluded terraced gardens and citrus orchards, it’s obvious why Liz Taylor and Richard Burton chose to hide out here.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/grand-velas-mexico.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/5"
			}
		]
	}
};
var sample_staticcontentlist = {
	"contentspec":{
		"config":{
			"html":{
				"dom_title":"Best Slideshow Ever",
				"dom_id":"p_c_lvs-id"
			}
		},
		"layout":{
			"engine":"bootstrap",
			"grid":[{"size":"medium","columns":"1"},{"size":"small","columns":"1"}]
		},
		"content":[
			{
				"title": "Travel & Leisure Transporter",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "How to explain the difference a beachfront hotel makes? “More than unobstructed views, it’s about the freedom of not having to look both ways to cross the street before feeling sand between your toes,” says Matt Thomson, founder of <a title='Wavecation.com' href='http://www.wavecation.com' target='_blank'>Wavecation.com</a>, a surfing-focused vacation rental company.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/la-casa-que-canta.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels"
			},{
				"title": "No. 1 Southern Ocean Lodge, Kangaroo Island, Australia",
				"dek": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide.",
				"content": "Contemporary in design and green in attitude, this lodge sits on a wildlife-rich island 30 minutes from Adelaide. Each of the 21 suites offers limestone floors, an outdoor terrace, and works by local artisans. (Air-conditioning is unnecessary; the property was constructed to take advantage of natural weather patterns.) For a spectacular ocean view from a hand-carved granite bath, book the glass-walled Osprey Pavilion suite, which also features a private plunge spa and sunken lounge.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/southern-ocean-lodge-sunset.jpg'>",
				"date": "March 7, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/2"
			},{
				"title": "No. 2 Discovery Shores Boracay, Boracay, Philippines'",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "The 2 1/2-mile stretch known as White Beach is often singled out for having the softest sand in the world—and it’s the setting for this resort and its 88 suites (some with private Jacuzzis). The water’s fine, whether you want to take a dip in the infinity pool or Jet Ski on the Sibuyan Sea. For people-watching, head to the Sandbar, where bartenders stir up lychee- and mango-infused mojitos.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/discovery-shores-boracay.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/3"
			},{
				"title": "No. 3 Lizard Island Resort, Great Barrier Reef, Australia",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "With 24 beaches fringing the Great Barrier Reef and accommodations for just 40 couples, Lizard Island is in a category all its own. Open-plan suites are done in royal blue, turquoise, and stark white to mimic the Coral Sea below, with hammocks and decks discreetly hidden from view. Count on sunset cruises, torchlit beach dinners, and complimentary gourmet picnic baskets. Book an Anchor Bay Suite for a direct pathway to the beach and daybed sunbathing from a personal veranda.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/live-aqua-cancun.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/4"
			},{
				"title": "No. 4 Hotel Santa Caterina, Amalfi, Italy",
				"dek": "Upgrade your next warm-weather escape with a stay at one of these top-ranked beach hotels, according to T+L readers.",
				"content": "Now in its fourth generation of Gambardella family management, this 1904 looker still reigns in Belle Époque splendor. Rooms are spread across the main building, two villas, and a triplet of honeymoon cottages and decorated with local antiques. An elevator descends to a private beach, saltwater pool, fitness center, and thatched-roof pizzeria and fish grill. As you stroll through the secluded terraced gardens and citrus orchards, it’s obvious why Liz Taylor and Richard Burton chose to hide out here.",
				"media": "<img src='https://raw.github.com/getperiodic/component-static.media-list-view/master/example/assets/images/slides/grand-velas-mexico.jpg'>",
				"date": "March 6, 2013",
				"author": "Ann Sheilds",
				"byline": "The best beaches in the world",
				"url":"http://www.travelandleisure.com/articles/worlds-best-beach-hotels/5"
			}
		]
	}
};
exports.sample_navdata = sample_navdata;
exports.sample_content = sample_content;
exports.sample_staticcontent = sample_staticcontent;
exports.sample_content_scrolllist = sample_content_scrolllist;
exports.sample_staticcontentlist = sample_staticcontentlist;