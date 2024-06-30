import { authService } from "../api/auth/auth.service.js";
import { stationService } from "../api/station/station.service.js"

export function requireUser(req, res, next) {
	const loggedinUser = authService.validateToken(req.cookies.loginToken)
	if (!loggedinUser) return res.status(401).send('Not authenticated')
	req.loggedinUser = loggedinUser
	next()
}

export async function validateStationCreatedByUser(req, res, next) {
	const loggedinUser = authService.validateToken(req.cookies.loginToken)
	if (!loggedinUser) return res.status(400).send('Not authenticated')
	const stationToUpdateId = req.params.stationId
	const station = await stationService.getStationById(stationToUpdateId)
	if(station.createdBy._id !== loggedinUser._id) return res.status(400).send('Not authorized')
	req.loggedinUser = loggedinUser
	next()
}