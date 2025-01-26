import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const loadFires = async (req, res) => {
    let body = req?.body;
    
    if (!body) {
        console.log("no body passed");
        return res.status(400);
    }

    if (!body?.lat || !body?.lng) {
        console.log("lat or lng doesnt exist");
        return res.status(400);
    }

    if (Number(body.lat) !== body.lat || Number(body.lng) !== body.lng) {
        console.log("not a float");
        return res.status(400);
    }

    let client_id = process.env.XWEATHER_CLIENT_ID;
    let client_secret = process.env.XWEATHER_CLIENT_SECRET;
    let radius = 50;
    
    let fireLocations = [];
    let waterLocations = [];
    axios.get(`https://data.api.xweather.com/fires/within?p=${body.lat},${body.lng}&radius=${radius}&limit=100&format=json&client_id=${client_id}&client_secret=${client_secret}`)
    .then((response) => {
        let data = response.data;
        for (let i = 0; i < data.response.length; i++) {
            fireLocations.push(data.response[i].loc);
        }

        axios.get(`https://data.api.xweather.com/rivers/within?p=${body.lat},${body.lng}&radius=${radius}&limit=100&format=json&client_id=${client_id}&client_secret=${client_secret}`)
        .then((response) => {
            let data = response.data;
            for (let i = 0; i < data.response.length; i++) {
                waterLocations.push(data.response[i].loc);
            }

            return res.status(200).json({fireLocations, waterLocations});
        })
        .catch((error) => {
            console.error(error);
            return res.status(500);
        });
    
    })
    .catch((error) => {
        console.error(error);
        return res.status(500);
    });

    res.status(500);
};

export const planRoute = async (req, res) => {
    let body = req?.body;

    if (!body) {
        console.log("no body passed");
        return res.status(400);
    }

    if (!body?.fireLocations || !body?.waterLocations) {
        console.log("bad input");
        return res.status(400);
    }

    const calculateDistance = (point1, point2) => {
        return Math.sqrt(
            Math.pow(point2.lat - point1.lat, 2) + 
            Math.pow(point2.long - point1.long, 2)
        );
    };

    const visited = new Set();
    const path = [];
    let currentType = 'water';
    
    const startIndex = Math.floor(Math.random() * body.waterLocations.length);
    let currentPosition = body.waterLocations[startIndex];
    path.push(currentPosition);
    visited.add(JSON.stringify(currentPosition));

    while (true) {
        let nextPosition = null;
        let minDistance = Infinity;
        let possibleLocations = currentType === 'water' ? body.fireLocations : [...body.fireLocations, ...body.waterLocations];

        for (const location of possibleLocations) {
            const locationStr = JSON.stringify(location);
            if (visited.has(locationStr)) continue;

            const distance = calculateDistance(currentPosition, location);

            const isWater = body.waterLocations.some(w => 
                w.lat === location.lat && w.long === location.long
            );

            if (distance < minDistance) {
                minDistance = distance;
                nextPosition = location;
                currentType = isWater ? 'water' : 'fire';
            }

        }

        if (!nextPosition) break;

        currentPosition = nextPosition;
        path.push(currentPosition);
        visited.add(JSON.stringify(currentPosition));
    }
    
    const segments = [];
    for (let i = 0; i < path.length-1; i++) {
        segments.push({start: path[i], end: path[i+1]});
    }

    const finalPosition = path[path.length - 1];
    return res.status(200).json({ 
        path,
        finalPosition,
        segments,
        visitedCount: visited.size
    });
};