import express from "express";
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
  
};