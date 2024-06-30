import { stationService } from "./station.service.js"

export async function getStations(req,res) {
    const filterBy = {
        txt: req.query.txt || '',
        userId: req.query.userId || ''
    }
    const stations = await stationService.query(filterBy)
    res.status(200).send(stations)
    }

export async function getStation(req,res) {
    const stationId = req.params.stationId
    const station = await stationService.getStationById(stationId)
    res.status(200).send(station)
}

export async function addStation(req,res) {
    const station = req.body
    const response = await stationService.addStation(station)
    res.status(200).send(response)
}

export async function updateStation(req,res) {
    const station = req.body
    const response = await stationService.updateStation(station)
    res.status(200).send(response)
}

export async function removeStation(req,res) {
    const stationId = req.params.stationId
    const response = await stationService.deleteStationById(stationId)
    res.status(200).send(response)
}