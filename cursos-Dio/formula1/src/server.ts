import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors,{
    origin: true,
});

const cars = [
    {
        make: "ford",
        model: "f150",
        color: "blue"
    },
    {
        make: "ford",
        model: "mustang",
        color: "red"
    },
    {
        make: "ferrari",
        model: "f80",
        color: "black"
    }
];

const drives = [
    {
        Id: 1,
        name: " Max Verstappen",
        idade: "26",
        carro: "RB20",
        nacionalidade: "Belgica"
    },
    {
        Id: 2,
        name: "Sergio Pérez",
        idade: "34",
        carro: "RB20",
        nacionalidade: "Mexico"
    },
    {
        Id: 3,
        name: "Lewis Hamilton",
        idade: "39",
        carro: "CLK GTR",
        nacionalidade: "Britanico"
    },
    {
        Id: 4,
        name: "Fernando Alonso ",
        idade: "43",
        carro: "Aston Martin",
        nacionalidade: "Espanhol"
    }
];

app.get("/cars", async (request, response) => {
    response.type("aplication/json").code(200);
    return { cars };
});

app.get("/drives", async (request, response) => {
    response.type("aplication/json").code(200);

    return { drives };

});

interface Driveparams {
    id: string;
    name: string;
    idade: string;
    carro: string;
    nacionalidade: string;
}

app.get <{ Params: Driveparams}>("/drives/:id", async (request, response) => {
    const id  = parseInt(request.params.id);
    const drive = drives.find((dri) => dri.Id === id);

    if (!drive) {
        response.code(404);
        return { message: "Drive not found"};
    }else {
        response.type("aplication/json").code(200);
        return { drive };
    }
});


app.listen({ port: 3000 }, () => {
    console.log("Server is listening on port 3000");
});