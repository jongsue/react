import * as _ from 'lodash'

export const getItemsData = (images: string[], ariaLabelPart: string) => {
  return _.map(images, image => ({
    imageSrc: `public/images/avatar/large/${image}.jpg`,
    title: `${ariaLabelPart} ${image}`,
    onClick: (e: any, props: any) => {
      const { title } = props
      alert(`Selected item is ${title}`)
    },
  }))
}

export const imageNames = [
  'ade',
  'chris',
  'christian',
  'daniel',
  'elliot',
  'helen',
  'jenny',
  'joe',
  'justen',
  'laura',
  'matt',
  'nan',
  'nom',
  'stevie',
  'steve',
  'tom',
  'veronika',
]

export const arrayOfStickerImagesNames = [
  [
    'ade',
    'chris',
    'christian',
    'daniel',
    'elliot',
    'helen',
    'jenny',
    'joe',
    'justen',
    'laura',
    'matt',
    'nan',
    'nom',
    'stevie',
    'steve',
    'tom',
    'veronika',
  ],
  ['joe', 'justen', 'laura', 'matt', 'nan', 'nom', 'stevie', 'steve', 'tom', 'veronika'],
  ['chris', 'christian', 'elliot', 'joe', 'justen', 'laura', 'matt', 'stevie', 'steve', 'tom'],
  [
    'ade',
    'chris',
    'christian',
    'daniel',
    'elliot',
    'helen',
    'jenny',
    'joe',
    'justen',
    'laura',
    'matt',
    'nan',
    'nom',
    'stevie',
    'steve',
    'tom',
    'veronika',
  ],
  ['chris', 'elliot', 'helen', 'jenny', 'stevie', 'steve', 'tom'],
  ['jenny', 'joe', 'justen', 'nan', 'nom', 'stevie'],
  ['chris', 'christian', 'elliot', 'joe', 'justen', 'laura', 'matt', 'stevie', 'steve', 'tom'],
]

export const atMentionItems = [
  {
    header: 'Bruce Wayne',
    image: 'public/images/avatar/small/matt.jpg',
    content: 'Software Engineer',
  },
  {
    header: 'Natasha Romanoff',
    image: 'public/images/avatar/small/jenny.jpg',
    content: 'UX Designer 2',
  },
  {
    header: 'Steven Strange',
    image: 'public/images/avatar/small/joe.jpg',
    content: 'Principal Software Engineering Manager',
  },
  {
    header: 'Alfred Pennyworth',
    image: 'public/images/avatar/small/justen.jpg',
    content: 'Technology Consultant',
  },
  {
    header: `Scarlett O'Hara`,
    image: 'public/images/avatar/small/laura.jpg',
    content: 'Software Engineer 2',
  },
  {
    header: 'Imperator Furiosa',
    image: 'public/images/avatar/small/veronika.jpg',
    content: 'Boss',
  },
  {
    header: 'Bruce Banner',
    image: 'public/images/avatar/small/chris.jpg',
    content: 'Senior Computer Scientist',
  },
  {
    header: 'Peter Parker',
    image: 'public/images/avatar/small/daniel.jpg',
    content: 'Partner Software Engineer',
  },
  {
    header: 'Selina Kyle',
    image: 'public/images/avatar/small/ade.jpg',
    content: 'Graphic Designer',
  },
]
