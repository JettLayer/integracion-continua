import axios from "axios";

const data = await axios.get(
    "https://eldenring.fanapis.com/api/bosses"
);
datos = data.data;
console.log(data);
return datos;