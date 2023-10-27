import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = 'd7e3feb29fmsh08314fe1f381290p13ec7ejsn47751d1f0020'

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};