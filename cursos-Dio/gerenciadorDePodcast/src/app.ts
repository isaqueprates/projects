import * as http from "http";
import {controllerPodcastFilter, controllerPodcastList} from "./controllers/controller-podcast";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-method";

export const app = async(request: http.IncomingMessage, response: http.ServerResponse,) => {

    const baseUrl = request.url?.split("?")[0];
    
    if(request.method === HttpMethod.GET && baseUrl === Routes.list) {
       await controllerPodcastList(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.filter) {
        await controllerPodcastFilter(request, response);
    }

}