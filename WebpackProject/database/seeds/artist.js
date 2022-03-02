import _ from 'lodash'
import {faker} from '@faker-js/faker'
import {GENRES} from '../constants'

module.exports = () => {
  return {
    _id: _.uniqueId(),
    name: faker.name.findName(),
    age: randomBetween(15, 45),
    yearsActive: randomBetween(0, 15),
    image: faker.image.avatar(),
    genre: getGenre(),
    website: faker.internet.url(),
    netWorth: randomBetween(0, 5000000),
    labelName: faker.company.companyName(),
    retired: faker.random.boolean(),
    albums: getAlbums(),
  }
}

const getAlbums = () => {
  return _.times(randomBetween(0, 5), () => {
    const copiesSold = randomBetween(0, 1000000)

    return {
      title: _.capitalize(faker.random.words()),
      date: faker.date.past(),
      copiesSold,
      numberTracks: randomBetween(1, 20),
      image: getAlbumImage(),
      revenue: copiesSold * 12.99,
    }
  })
}

const getAlbumImage = () => {
  const types = _.keys(faker.image)
  const method = randomEntry(types)

  return faker.image[method]()
}

const getGenre = () => {
  return randomEntry(GENRES)
}

const randomEntry = (array) => {
  return array[~~(Math.random() * array.length)]
}

const randomBetween = (min, max) => {
  return ~~(Math.random() * (max - min)) + min
}
