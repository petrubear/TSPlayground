import 'reflect-metadata'
import { Container, Inject, Service } from 'typedi'
import { InstrumentService } from './service/InstrumentService'
import { Express } from 'express'
import { Instrument } from './model/Instrument'
import express = require('express')

@Service('index')
class Index {
  instrumentService: InstrumentService

  constructor(
    @Inject('instrument.service') instrumentService: InstrumentService
  ) {
    this.instrumentService = instrumentService
  }

  randomPractice(): Promise<Instrument> {
    return this.instrumentService.randomPractice()
  }
}

function main() {
  const PORT = process.env.PORT || 3000
  const app = express()
  setUpRoutes(app)
  app.use(express.json())
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

function setUpRoutes(app: Express) {
  const index = Container.get<Index>('index')
  app.get('/', (request, response) => {
    index.randomPractice().then((i) => response.send(i))
  })
}

main()
