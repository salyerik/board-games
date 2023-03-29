import { createSlice } from '@reduxjs/toolkit'
import { iCommonSliceState } from '../../types/commonTypes'

const initialState: iCommonSliceState = {
	aboutUsPage: [
		{
			id: 1,
			label: 'Our mission',
			text: 'Diverse and rich experience in the strengthening and development of the structure is largely responsible for the creation of the development model. Diverse and rich experience of consultation with a wide range of assets makes it possible to carry out important tasks of developing the training system, meets the urgent needs. Everyday practice shows that the beginning of the day-to-day work of shaping the position allows important tasks of developing new proposals to be carried out. Everyday practice shows that the further development of the various forms of activity is largely responsible for the creation of new proposals.',
			images: [
				'https://i.ibb.co/k1w6Mv8/1.jpg',
				'https://i.ibb.co/cC0ry4h/2.jpg'
			]
		},
		{
			id: 2,
			label: 'Our events',
			text: 'It should not be forgotten, however, that the strengthening and development of the structure is an interesting experiment in testing the development model. On the other hand, the implementation of the planned targets is largely responsible for the creation of systems of mass participation.',
			images: [
				'https://i.ibb.co/1GfMN8r/3.jpg',
				'https://i.ibb.co/bQm97p4/4.jpg'
			]
		}
	],
	blogPage: {
		items: [
			{
				id: 1,
				img: 'https://i.ibb.co/LzwvmvH/1.jpg',
				title: 'WARHAMMER 40000: KILL TEAM - T’AU EMPIRE TACTICA',
				date: '18.02.2022',
				linkName: 'WARHAMMER 40000',
				label:
					"In this article, we will look at the capabilities of the new starter Kill Team: T'au Empire and the Tau faction in general.",
				text: "In this article, we will look at the capabilities of the new starter Kill Team: T'au Empire and the Tau faction in general. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this wonderful game, review some of the counters that will be available to players, as well as the options for downloading your squadrons and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			},
			{
				id: 2,
				img: 'https://i.ibb.co/gmy95Dw/2.jpg',
				title: 'ORKS: DA VEHICLES',
				date: '28.12.2021',
				linkName: 'ORKS: DA VEHICLES',
				label:
					'An overview of the features of all the bugs in Speed Freeks. We tell you about the board game Adeptus Titanicus and why you should try it.',
				text: "An overview of the features of all the bugs in Speed Freeks. We talk about the board game Adeptus Titanicus and why it's worth trying to play. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this great game, review some of the chips that will be available to players, as well as your squadron upload options and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			},
			{
				id: 3,
				img: 'https://i.ibb.co/q5b5bhs/3.jpg',
				title: 'CLAN FOCUS: SERPENTINES',
				date: '08.01.2022',
				linkName: 'CLAN FOCUS: SERPENTINES',
				label:
					'Clan Cultures - Adeptus Titanicus. We tell you about the board game Adeptus Titanicus and why you should try playing it.',
				text: "Clan Cultures - Adeptus Titanicus. We tell you about the board game Adeptus Titanicus and why you should try playing it. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this wonderful game, review some of the counters that will be available to players, as well as the options for downloading your squadrons and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			},
			{
				id: 4,
				img: 'https://i.ibb.co/vXsHhMn/4.jpg',
				title: 'ADEPTUS TITANICUS…ЧТО ЖЕ ЭТО?',
				date: '13.03.2022',
				linkName: 'ADEPTUS TITANICUS',
				label:
					'We tell you about the board game Adeptus Titanicus and why you should try to play it.',
				text: "We tell you about the board game Adeptus Titanicus and why you should try to play it. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this wonderful game, review some of the counters that will be available to players, as well as the options for downloading your squadrons and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			},
			{
				id: 5,
				img: 'https://i.ibb.co/p1zZcnX/5.jpg',
				title: 'ORKS: DA VEHICLES',
				date: '18.12.2021',
				linkName: 'ORKS: DA VEHICLES',
				label:
					'An overview of the features of all the buggies in the game Speed Freeks. We tell you about the board game Adeptus Titanicus and why you should try to play it.',
				text: "An overview of the features of all the buggies in the game Speed Freeks. We tell you about the board game Adeptus Titanicus and why you should try to play it. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this wonderful game, review some of the counters that will be available to players, as well as the options for downloading your squadrons and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			},
			{
				id: 6,
				img: 'https://i.ibb.co/gzHKq8W/6.jpg',
				title: 'CLAN FOCUS: SERPENTINES',
				date: '23.05.2022',
				linkName: 'CLAN FOCUS: SERPENTINES',
				label:
					'Clan Cultures - Adeptus Titanicus. We tell you about the board game Adeptus Titanicus and why you should try playing it.',
				text: "Clan Cultures - Adeptus Titanicus. We tell you about the board game Adeptus Titanicus and why you should try playing it. Yay! The first boxes of Aeronautics Imperialis are about to go to their lucky owners, so it's time to take a look at the rules of this wonderful game, review some of the counters that will be available to players, as well as the options for downloading your squadrons and a short description of each of the planes available at the moment. If you're ready to get your hands on this box, or if you're confused and don't know which side of the conflict to choose, this article should be useful to you!"
			}
		],
		filters: [
			{
				id: '0',
				filterText: 'All'
			},
			{
				id: '1',
				filterText: 'Magic: the Cathering'
			},
			{
				id: '2',
				filterText: 'Warhammer 40000'
			},
			{
				id: '3',
				filterText: 'Necromunda'
			},
			{
				id: '4',
				filterText: 'Infinity'
			},
			{
				id: '5',
				filterText: 'Dust 1947'
			},
			{
				id: '6',
				filterText: 'Star Wars X-Wing'
			}
		],
		interesting: [
			{
				id: 1,
				img: 'https://i.ibb.co/5xqvjXV/1.jpg',
				title: 'The Imperial Navy',
				text: "The Imperial Navy, is perhaps the greatest force in the galaxy, controlling stars and planets with vast fleets and countless ships and planes. And while battlecruisers are known as the deadly masters of interstellar combat, humanity's enemies fear Thunderbolts* and Marauders just as much, frighteningly effective sky killers, guides of the Emperor's wrath, capable of unleashing death on both land targets and airborne vessels alike."
			},
			{
				id: 2,
				img: 'https://i.ibb.co/6rLDD8f/2.jpg',
				title: 'The Thunderbolt',
				text: 'Calling the Thunderbolt an all-purpose vehicle is a pretty good idea. Even if you make a full roster of these Imperial War Fleet workhorses, you still get a pretty good receipt. Aside from the generally decent characteristics, the Thunderbolt has the best Ace Manoeuvres characteristic in the game (at least for now!). Certainly in the future we will look at the Thunderbolt in more detail, but for now it will suffice to say that this fighting machine is able to literally cut circles around most of the enemies that it can come across.'
			},
			{
				id: 3,
				img: 'https://i.ibb.co/P6qR4Lm/3.jpg',
				title: 'The Thunderbolt Fury',
				text: 'The Thunderbolt Fury – Another type of vehicle available to the Imperial War Fleet that, for a few extra points, gets better armament than its more lightly armed counterpart, in particular the avenger bolt cannon instead of the quadruple auto cannon. If you have a few extra points left on your sheet, rest assured that this is a worthy way to spend them, as the Furies are quite capable of taking out light vehicles in a single salvo. Watch your firing arches, because while this interceptor has impressive firepower, its angle of fire is very limited and you can only fire at targets directly in front of you. The Marauder Bomber'
			},
			{
				id: 4,
				img: 'https://i.ibb.co/QF41099/4.jpg',
				title: 'Marauder Destroyer',
				text: "Yes, you won't find this particular Marauder mod in the Wings of Vengeance set, but if you're a diehard Imperial Warfare fan, the first thing you'll want to buy is a box of these air fortresses. Sure, they're slow as hell, but you wouldn't envy an enemy getting within range of their guns! Even those enemies who can outflank the Marauder from the rear will find themselves in the crosshairs of tail guns comparable in power to those carried by lighter machines. If you do not fear the fire from the rear, you can safely allow the enemy to come to your tail, in order to maximize the total damage of the enemy by firing from both bow and tail guns."
			}
		],
		texts: [
			{
				id: 1,
				label: "The Imperial Navy – it's HARD.",
				text: 'Even the "lightest" Imperial aircraft, such as the Thunderbolt, are quite hardy and not easy to kill, and overall your roster will look very, very sturdy. And yes, think of these machines more as tanks with wings and obscene thrust than as airplanes.'
			},
			{
				id: 2,
				label: "The Imperial Navy – it's FLEXIBILITY.",
				text: 'Even the starter kit gives you a certain amount of flexibility in your roster, giving you plenty of options for building your squadron. If you want to use speed and stealth to win, take the Thunderbolts. But if you want to face the enemy head-on and still come out of the battle with a barrage of fire, then go for the Marauders.'
			},
			{
				id: 3,
				label:
					'The Imperial Navy – is the mastery of the middle-distance huddle',
				text: "Most Imperial War Fleet vehicles have very decent armament. In Aeronautics, distance to target often means everything, which is why Imperial guns are so valuable, excelling at medium range. Don't let the enemy get away with dagger fire, while at the same time not letting him get any closer, and soon only the wreckage of enemy equipment will be burning on the battlefield."
			}
		],
		learnMore: [
			{
				id: 5,
				img: 'https://i.ibb.co/p1zZcnX/5.jpg',
				title: 'The best board games on Steam for playing with friends',
				text: 'By rating 2021'
			},
			{
				id: 6,
				img: 'https://i.ibb.co/gzHKq8W/6.jpg',
				title: 'Desirable but unlikely releases',
				text: 'A short list of "I wish..."'
			}
		]
	},
	eventsPage: {
		items: [
			{
				id: 1,
				img: 'https://i.ibb.co/2MmwkMZ/1.jpg',
				title: 'Halloween c GoldFish',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 350,
				placeLeft: 7,
				label:
					'We will gather to find out who was the Mafia and what will happen to the one who was killed.'
			},
			{
				id: 2,
				img: 'https://i.ibb.co/7Q2fdtY/2.jpg',
				title: 'Board game night',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 150,
				placeLeft: 7,
				label:
					'Weekly board games in a variety of games.Meetings are held at anticafes, cafes and libraries.'
			},
			{
				id: 3,
				img: 'https://i.ibb.co/Yh0MFqV/3.jpg',
				title: 'Halloween c GoldFish',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 250,
				placeLeft: 2,
				label:
					'We will gather to find out who was the Mafia and what will happen to the one who was killed.'
			},
			{
				id: 4,
				img: 'https://i.ibb.co/Ct0sGXh/4.jpg',
				title: 'Board game night',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 100,
				placeLeft: 4,
				label:
					'Weekly board games in a variety of games.Meetings are held at anticafes, cafes and libraries.'
			},
			{
				id: 5,
				img: 'https://i.ibb.co/zV1yxdD/5.jpg',
				title: 'Halloween c GoldFish',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 300,
				placeLeft: 6,
				label:
					'We will gather to find out who was the Mafia and what will happen to the one who was killed.'
			},
			{
				id: 6,
				img: 'https://i.ibb.co/k6gByjC/6.jpg',
				title: 'Board game night',
				date: {
					day: '31.10.2022',
					time: '11:00'
				},
				price: 200,
				placeLeft: 1,
				label:
					'Weekly board games in a variety of games.Meetings are held at anticafes, cafes and libraries.'
			}
		],
		filters: [
			{
				id: '0',
				filterText: 'All'
			},
			{
				id: '1',
				filterText: 'Magic: the Cathering'
			},
			{
				id: '2',
				filterText: 'Warhammer 40000'
			},
			{
				id: '3',
				filterText: 'Necromunda'
			},
			{
				id: '4',
				filterText: 'Infinity'
			},
			{
				id: '5',
				filterText: 'Dust 1947'
			},
			{
				id: '6',
				filterText: 'Star Wars X-Wing'
			}
		]
	},
	commonData: {
		footer: {
			links: [
				{
					title: 'Events',
					path: '/boardGames/events'
				},
				{
					title: 'About us',
					path: '/boardGames/about-us'
				},
				{
					title: 'Blog',
					path: '/boardGames/blog'
				}
			],
			images: [
				'https://i.ibb.co/r5RD7rd/mir.png',
				'https://i.ibb.co/WKkP8gq/visa.png',
				'https://i.ibb.co/FXh134j/master.png'
			]
		},
		phoneNumber: {
			text: '+996 (700) 20-05-96',
			path: 'tel:+996700200596'
		},
		mail: {
			text: 'steterik@gmail.com',
			path: 'mailto:steterik@gmail.com'
		},
		address: {
			country: 'USA',
			state: 'California',
			city: 'San-Francisco',
			street: 'Beach North 26'
		},
		workMode: {
			from: '11:30',
			to: '23:00',
			days: 'Every day'
		},
		catalogs: [
			{
				id: 5,
				img: 'https://i.ibb.co/r5DqCkW/5.jpg',
				name: 'All Catalog',
				path: '/boardGames/catalog'
			},
			{
				id: 2,
				img: 'https://i.ibb.co/y8tcKrT/2.jpg',
				name: 'Accessories',
				path: '/boardGames/catalog/accessories'
			},
			{
				id: 3,
				img: 'https://i.ibb.co/fpbhfKn/3.jpg',
				name: 'Paints',
				path: '/boardGames/catalog/paints'
			},
			{
				id: 4,
				img: 'https://i.ibb.co/JcXznXj/4.jpg',
				name: 'Good for children',
				path: '/boardGames/catalog/goods-for-children'
			},
			{
				id: 1,
				img: 'https://i.ibb.co/VDcJ3Sx/1.jpg',
				name: 'Board games',
				path: '/boardGames/catalog/board'
			}
		],
		socialNets: [
			{
				img: 'insta',
				path: 'https://www.instagram.com'
			},
			{
				img: 'vk',
				modalImg: 'fbBlack',
				path: 'https://www.vk.com'
			},
			{
				img: 'fb',
				modalImg: 'vkBlack',
				path: 'https://www.facebook.com'
			}
		]
	},
	mainPage: {
		slides: [
			{
				id: 5,
				image: 'https://i.ibb.co/mDR9fdq/1.jpg',
				title: 'Magic: the Gathering',
				subTitle: 'The most popular card game'
			},
			{
				id: 4,
				image: 'https://i.ibb.co/7VXCXJy/2.jpg',
				title: 'The Gathering Warhummer',
				subTitle: 'Try games of different genres'
			},
			{
				id: 1,
				image: 'https://i.ibb.co/Bt5qnHm/3.jpg',
				title: 'Warhummer games',
				subTitle: 'Wargame board game'
			}
		],
		aboutUs: [
			'«Board Games» - store, where you can buy a great gift for yourself or for your loved ones.',
			'Our store offers thousands of board games for all tastes: simple and complicated, family and adults only, for two and large companies, detective and logical, role-playing and strategy board games. "Board Games" also regularly holds its own game events: Magic: the Gathering (from Wizards of the coast) and Warhammer (from Games Workshop) tournaments.',
			'In our store you can find the right accessories for your favorite games (protectors for cards and collections), tools for self-design and painting figures (cases, coasters, paints Vallejo, etc.) and much more.',
			'«Board Games» - It is not just a board game store, but also a full-fledged hobby - center. Here you can rent tables for games with friends, training and master - classes on the games that interest you, make new friends and join the gaming community!'
		],
		arrow: 'arrowSlider',
		images: ['https://i.ibb.co/DbQsP45/about-us.jpg']
	}
}

const commonSlice = createSlice({
	name: 'commonSlice',
	initialState,
	reducers: {}
})

export default commonSlice.reducer
