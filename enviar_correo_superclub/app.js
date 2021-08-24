const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SendgridApiKey)

exports.handler = async (event, context, callback) => {
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json"
    }
    try {
        let body = JSON.parse(event.body);
        let params = event.queryStringParameters
        let superclubNombreNino = params.superclubNombreNino;
        let superclubApellidos = params.superclubApellidos;
        let superclubEmail = params.superclubEmail;
        let superclubConfirmar = params.superclubConfirmar;
        let superclubFechaNacimiento = params.superclubFechaNacimiento;
        let superclubGeneroF = params.superclubGeneroF;
        let superclubGeneroM = params.superclubGeneroM;
        let superclubIntereses = params.superclubIntereses;

        //Datos de encargado
        let superclubParentesco = params.superclubParentesco;
        let superclubNombresPapas = params.superclubNombresPapas;
        let superclubApellidosPapas = params.superclubApellidosPapas;
        let superclubDPI = params.superclubDPI;
        let superclubNoPrivilegio = params.superclubNoPrivilegio;
        let superclubFechaPapas = params.superclubFechaPapas;
        let superclubGeneroPapasF = params.superclubGeneroPapasF;
        let superclubGeneroPapasM = params.superclubGeneroPapasM;
        let superclubCorreoPapas = params.superclubCorreoPapas;
        let superclubConfirmarPapas = params.superclubConfirmarPapas;
        let superclubTelefono = params.superclubTelefono;
        let superclubTelefonoCelular = params.superclubTelefonoCelular;
        let superclubZona = params.superclubZona;
        let superclubDepartamento = params.superclubDepartamento;
        let superclubDireccion = params.superclubDireccion;
        let superclubDireccionMisma = params.superclubDireccionMisma;
        let superclubDireccionOtra = params.superclubDireccionOtra;
        let msg = {
            to: "andre8tr@gmail.com",
            from: "andre.tirado@cemaco.com",
            subject: 'Prueba',
            text: 'Nueva inscripcion',
            templateId: 'd-5f7ac94ed1e04b38b19f4bff158e990b',
            dynamic_template_data: {
                superclubNombreNino: superclubNombreNino,
                superclubApellidos: superclubApellidos

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