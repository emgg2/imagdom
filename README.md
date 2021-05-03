# imagdom

Using imagdom:

```
npm install imagdom
```

#Example

In order to get an ramdom image from https://pixabay.com/

```
const imagdom = require('imagdom');

const imgFilter = {
    findBy: 'yellow+flowers',
    lang: 'es',
    image_type: 'photo',
    orientations: 'vertical',
    caterory: 'nature'
}

const image = imagdom.getImage(imgFilter);

```

## Parameters

imgFilter is not mandatory. It is available to use one of them, two or a combination all of them

| parameter | #1 |
| findBy | str	A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters. Example: "yellow+flower"
| lang   | 	str	Language code of the language to be searched in. Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh. Default: "en"
| image_type | 	str	Filter results by image type. Accepted values: "all", "photo", "illustration", "vector". Default: "all"
| orientation |  str	Whether an image is wider than it is tall, or taller than it is wide. Accepted values: "all", "horizontal", "vertical" Default: "all"
| category | str	Filter results by category. Accepted values: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music 

## Image object

You will recive an object like object below

```
  picture: {
    id: 4335941,
    pageURL: 'https://pixabay.com/es/photos/equinoccio-de-primavera-4335941/',
    type: 'photo',
    tags: 'equinoccio de primavera, las flores de mayo, día de la mujer',
    previewURL: 'https://cdn.pixabay.com/photo/2019/07/13/23/53/spring-equinox-4335941_150.jpg',
    previewWidth: 100,
    previewHeight: 150,
    webformatURL: 'https://pixabay.com/get/ga77a6632bf956234082d48f5a899bf4f188a96271b3f4c0a44a5721966f330b1229583b1c5b55e8a1bdb55cb1d3b19a72e7c7472a27a5108a77146e2e6bb4598_640.jpg',
    webformatWidth: 426,
    webformatHeight: 640,
    largeImageURL: 'https://pixabay.com/get/g69139528adc87fadf11edadd1b40fb303d1f98e4e9fd848f97e3cb48c62f61ccd7a4c401e7be4e8d35331cb4b570466615b6199038a6c6f6daed95043553b5ea_1280.jpg',
    imageWidth: 3840,
    imageHeight: 5760,
    imageSize: 5893819,
    views: 17363,
    downloads: 6890,
    favorites: 89,
    likes: 99,
    comments: 12,
    user_id: 13030917,
    user: 'TemperateSage',
    userImageURL: 'https://cdn.pixabay.com/user/2019/07/13/23-01-25-947_250x250.jpg'
  }

```