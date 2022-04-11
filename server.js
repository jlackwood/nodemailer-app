const nodemailer = require("nodemailer");

async function server(request, response) {
    if (request.method == 'POST' && request.url == '/morfus') {
        let data = [];
        //////////////////////////////////////////////
        // GET RESPONSE BODY USING EVENTS           //
        //////////////////////////////////////////////
        //handle request errors first
        /* request.on('error', (err) => {
        console.error(err);
        //handle data going into a string or array/buffer
        }).on('data', (chunk) => {
            body += chunk;
           // body.push(chunk); // if using buffer/array
        }).on('end', () => {
            //decode body from request
            data=Buffer.concat(data).toString();
        
                //log
        });
        //////////////////////////////////////////////
        // GET RESPONSE BODY USING ASYNC ITERATORS  //
        //////////////////////////////////////////////
            /*read data and add it to a string
            try {
            for await (const chunk of request) {
                    data+=chunk;
                }
            } catch (error) {
                console.log(error);
            }*/

        // read data using array and buffer
        try {
            for await (const chunk of request) {
                data.push(chunk);
            }
        } catch (error) {
            console.log(error);
        }
        ///////////////////////////////////////////////////

        response.end();
        console.log(Buffer.concat(data).toString());
        //         // jsonBody = utils.bodyToJSON(data);
        //         // let message = {
        //         //     from: "admin@jlackwood.dev",
        //         //     to: "morfusvisuals@gmail.com",
        //         //     bcc: 'j.lackwood@icloud.com',
        //         //     subject: "New Contact - Morfus",
        //         //     text: "Plaintext version of the message",
        //         //     html: "<p>First Name: " + jsonBody.firstName + "<br>Last Name: " + jsonBody.lastName + "<br>Email: " + decodeURI(jsonBody.email) + "<br>Number: " + jsonBody.number + "<br>How did you hear about us? : " + jsonBody.hearAboutUs + "<br>What are you looking for? : " + jsonBody.lookingFor + "</p>",
        //         // };
        //         // const transport = nodemailer.createTransport({
        //         //     host: "smtp-relay.sendinblue.com",
        //         //     port: 587,
        //         //     secure: false,
        //         //     auth: {
        //         //         user: "j.lackwood@icloud.com",
        //         //         pass: "xsmtpsib-c2d44bd7ccca9f1ecd1ae775881e122d642638a6d829a5fb2c94b55c8e8f12c1-kpwAxFQUfhb02Xt8",
        //         //     },
        //         // });
        //         // try {
        //         //     let email = await transport.sendMail(message);
        //         //     if (email.accepted) {
        //         //         response.writeHead(200, email.response)
        //         //     }
        //         // }
        //         // catch (err) {
        //         //     response.writeHead(404, err)
        //         // }
        //         response.end();
        //     }
        //     else {
        //         response.writeHead(404, 'Route does not exist');
        //         response.end();
        //     }
        // });
    }
    else {
        response.statusCode = 404;
        response.end();
    }
}

exports.server = server;