import ExampleImageOne from "../img/example-1.jpg";
import ExampleImageTwo from "../img/example-2.jpg";
import ExampleImageThree from "../img/example-3.jpg";
import ExampleImageFour from "../img/example-4.jpg";

export const itemsData = [
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageOne,
            allImages: [ExampleImageOne, ExampleImageTwo, ExampleImageThree],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 31,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 19,
            },
        ],
    },
    {
        title: "Head of doll",
        url: "doll-head",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageTwo,
            allImages: [ExampleImageTwo, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    {
        title: "Tambourine",
        url: "tambourine",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageFour,
            allImages: [ExampleImageFour, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageOne,
            allImages: [ExampleImageOne, ExampleImageTwo, ExampleImageThree],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 31,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 19,
            },
        ],
    },
    {
        title: "Head of doll",
        url: "doll-head",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageTwo,
            allImages: [ExampleImageTwo, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    {
        title: "Tambourine",
        url: "tambourine",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageFour,
            allImages: [ExampleImageFour, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "klang",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageThree,
            allImages: [ExampleImageThree, ExampleImageOne, ExampleImageTwo],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "kingston",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: ExampleImageThree,
            allImages: [ExampleImageThree, ExampleImageOne, ExampleImageTwo],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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

    // North Pacific Patch
    {
        title: "Back of TV",
        url: "tv-back",
        location: "north-atlantic",
        intro: "This backside of a TV was found in the ",
        images: {
            mainImage: ExampleImageThree,
            allImages: [ExampleImageThree, ExampleImageOne, ExampleImageTwo],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
];
