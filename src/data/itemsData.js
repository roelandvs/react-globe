import ExampleImageOne from "../img/example-1.jpg";
import ExampleImageTwo from "../img/example-2.jpg";
import ExampleImageThree from "../img/example-3.jpg";
import ExampleImageFour from "../img/example-4.jpg";

import TelevisionOne from "../img/items/television-1.png";
import TelevisionTwo from "../img/items/television-2.png";
import TelevisionThree from "../img/items/television-3.png";
import BrokenTiara from "../img/items/broken-tiara.png";
import RanchDressing from "../img/items/ranch-dressing.png";
import GolfBall from "../img/items/golf-ball.png";
import ToyWheel from "../img/items/toy-wheel.png";
import LandBorder from "../img/items/land-border.png";
import Buoy from "../img/items/buoy-1966.png";
import BikePedal from "../img/items/bike-pedal.png";
import MonsterHead from "../img/items/monster-head.png";
import Glasses from "../img/items/glasses.png";

// Ugly images
export const itemsData = [
    /*
     * Pacific.
     */
    // Backside of Television
    {
        title: "Backside of Television",
        url: "television",
        location: "pacific",
        intro: [
            "On May the 2nd 2021 this television was found in the Pacific Garbage Patch. It was part of extraction 18 on which we removed 13.987 kg of  plastic out of the ocean. This television stood out because of the remarkable corosion on plastic, which is caused by years of  laying in the salt water combined with sunlight.",
            "We believe that this television was produced in the early 2000’s. The brand and model is uncertain. Based on the corosion we estimate that the television would have been in the water for over 15 years. This estimation is not very precise because the amount of direct sunlight greatly impacts the visible corosion on items.",
        ],
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
            sizes: {
                heightCm: "61",
                depthCm: "41",
                widthCm: "78",
                weightGr: "3145",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Devices",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "Unknown",
                        },
                        {
                            title: "Production date",
                            value: "Early 2000's",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    " This is the back of the SONY FD Trinitron WEGA KV-32FS120 32 inch 480i CRT. I actually owned this television back in 2004. It sold for around $600 back in the day. Sad to see it ending up in the ocean.",
                name: "Jack van Haaren",
                pinned: true,
                likes: 56,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Broken Tiara
    {
        title: "Broken tiara",
        url: "broken-tiara",
        location: "pacific",
        intro: [
            "This broken tiara was part of extraction number 19 on the 22nd of June 2019. We cleared 14.003 kg of trash out of the Klang using Interceptor 002. Parts of toys are very commonly intercepted in rivers.",
            "This tiara is very small and clearly kid size. It has many small deatils in the bottom edge of the tiara. It’s main feature is the big heart at the top. At the back of the tiara it says “made in Taiwan” even though it was found in the Klang (Malaysia). ",
        ],
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "My daughter owns a very similar piece also made in Taiwan. It is not exactly the same, but it could be a newer or older version from the same brand. My daughters tiara is from the brand MINIIYOU.",
                name: "Kimberly Slim",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Toy Wheel
    {
        title: "Toy wheel",
        url: "toy-wheel",
        location: "pacific",
        intro: [
            "The crew of extraction number 16 found this toy wheel in the Great Pacific Gabrage Patch. It was part of a 11.982 kg extraction on the 29th of Febuary 2018. During some rough wheater this item was fished out of the water. It was picked because of the text on the wheel, which gives it a greater chance of being traced back to it’s origin.",
            "The text on the tire says “JBI Rabbit 100kg XMFL TOY 1029”. We guess that it comes from a remote controlled toy car. Based on the corosion we estimate that the toy has been in the water for around 4 years.",
        ],
        images: {
            mainImage: ToyWheel,
            allImages: [ToyWheel],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Land Border
    {
        title: "Land border",
        url: "land-border",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: LandBorder,
            allImages: [LandBorder, ExampleImageThree],
        },
        data: {
            sizes: {
                heightCm: "50",
                depthCm: "18",
                widthCm: "18",
                weightGr: "230",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Buoy
    {
        title: "Buoy 1966",
        url: "buoy",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Buoy,
            allImages: [Buoy],
        },
        data: {
            sizes: {
                heightCm: "79",
                depthCm: "79",
                widthCm: "79",
                weightGr: "424",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Ranch Dressing
    {
        title: "Ranch dressing",
        url: "ranch-dressing",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: RanchDressing,
            allImages: [RanchDressing],
        },
        data: {
            sizes: {
                heightCm: "53",
                depthCm: "17",
                widthCm: "17",
                weightGr: "970",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Bottles",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Golf Ball
    {
        title: "Golf ball",
        url: "golf-ball",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: GolfBall,
            allImages: [GolfBall],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "10",
                widthCm: "10",
                weightGr: "30",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Bottles",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Bike Pedal
    {
        title: "Bike pedal",
        url: "bike-pedal",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: BikePedal,
            allImages: [BikePedal],
        },
        data: {
            sizes: {
                heightCm: "5",
                depthCm: "10",
                widthCm: "19",
                weightGr: "45",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Machine parts",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Monster Head
    {
        title: "Monster head",
        url: "monster-head",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: MonsterHead,
            allImages: [MonsterHead],
        },
        data: {
            sizes: {
                heightCm: "14",
                depthCm: "3",
                widthCm: "9",
                weightGr: "24",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Unknown",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Glasses
    {
        title: "Glasses",
        url: "glasses",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Glasses,
            allImages: [Glasses],
        },
        data: {
            sizes: {
                heightCm: "14",
                depthCm: "19",
                widthCm: "29",
                weightGr: "84",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Accessories",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Unknown",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    // North Atlantic Patch
    // South Atlantic Patch
    // Rio Ozama
    // Kingston
    // LA County
    // Chao Phraya
    // Can Tho
    // Klang
    // Chengkareng drain
];
