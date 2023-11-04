import {FastifyInstance} from "fastify";
import Cors from "@fastify/cors";

// Cors Policies Options
const corsOptions = {
    // Allow all origins
    // VERY IMPORTANT: In response, the server returns an Access-Control-Allow-Origin header with Access-Control-Allow-Origin: *
    // which means that the resource can be accessed by any origin. (VERY DANGER!)
    // You can read more about in:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    origin: "*"
};

export function registerCorsProvider(app: FastifyInstance) {
    app.register(Cors, corsOptions)
}