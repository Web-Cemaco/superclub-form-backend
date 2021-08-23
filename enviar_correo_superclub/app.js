const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SendgridApiKey)

exports.handler = async (event, context, callback) => {
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json"
    }
    try {
        let superclubNombreNino = 'Andre'
        let msg = {
            to: "andre8tr@gmail.com",
            from: "andre.tirado@cemaco.com",
            subject: 'Prueba',
            text: 'Nueva inscripcion',
            templateId: 'd-5f7ac94ed1e04b38b19f4bff158e990b',
            dynamic_template_data : {
                superclubNombreNino: superclubNombreNino

            }
        }

        sgMail.send(msg);

        callback(null, {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world'
            }),
            headers: headers
        })
    } catch (err) {
        callback(null, {
            'statusCode': 500,
            'body': JSON.stringify({
                message: 'goodbye world'
            }),
            headers: headers
        })
    }
};
