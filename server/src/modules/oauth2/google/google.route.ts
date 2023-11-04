import {FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest} from 'fastify';

export function googleOAuth2Routes (
    app: FastifyInstance,
    options: FastifyPluginOptions,
    done: () => void,
) {

    // https://developers.google.com/
    // Google OAuth2 JavaScript redirect URI
    app.get('/google/callback',async function (request: FastifyRequest, reply: FastifyReply) {

        // Get the access token from the Google service and save it into the token value
        const { token } = await app.GoogleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

        // Redirect to our frontend side
        // You can get the access token from the URI Query and save it as a cookie in the client browser
        reply.redirect("http://localhost:4000/?access_token=" + token.access_token);
    });

    done();
}