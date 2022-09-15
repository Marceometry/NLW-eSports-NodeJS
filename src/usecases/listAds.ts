import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { minutesToHourString } from '../utils'

const prisma = new PrismaClient()

export const listAds = async (req: Request, res: Response) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  const formattedAds = ads.map((ad) => ({
    ...ad,
    weekDays: ad.weekDays.split(','),
    hourStart: minutesToHourString(ad.hourStart),
    hourEnd: minutesToHourString(ad.hourEnd),
  }))

  return res.status(200).json(formattedAds)
}
