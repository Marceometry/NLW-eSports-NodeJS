import { Router } from 'express'
import { createAd, getDiscord, listAds, listGames } from './usecases'

export const routes = Router()

routes.get('/games', listGames)

routes.get('/games/:id/ads', listAds)

routes.post('/games/:id/ads', createAd)

routes.get('/ads/:id/discord', getDiscord)
