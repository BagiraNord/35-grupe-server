import { server } from "./lib/server";

const app = {};

app.init = () => {
    //sukurti pradinius folderius
    //sukurtipradinius failus
    server.init();
    // prisijungti prie DB
    // paleisti (musu) serveri

    //pasikartojantys procesai:
    // - istrinti nenaudojamus failus
    // - su'zip'inti sena informacija
    // - atsinaujint API informacija (pvz valiutos keitimas) cash'avimo budu
}

app.init(); //paleidzia auksciau esancia funkcija

export { app };