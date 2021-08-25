const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SendgridApiKey)

exports.handler = async (event, context, callback) => {
    let headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json"
    }
    try {

        console.log(event)
        let body = JSON.parse(event.body);
        let params = event.queryStringParameters
        let superclubNombreNino = body.superclubNombreNino;
        let superclubApellidos = body.superclubApellidos;
        let superclubEmail = body.superclubEmail;
        console.log(superclubNombreNino)
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
            templateId: 'd-d3dedba1d3e64af9bc7db760dbb0265d',
            dynamic_template_data: {
                superclubNombreNino: superclubNombreNino,
                superclubApellidos: superclubApellidos,
                superclubEmail: superclubEmail/*,
                superclubConfirmar: superclubConfirmar,
                superclubFechaNacimiento: superclubFechaNacimiento,
                superclubGeneroF: superclubGeneroF,
                superclubGeneroM: superclubGeneroM,
                superclubIntereses: superclubIntereses,
                superclubParentesco: superclubParentesco,
                superclubNombresPapas: superclubNombresPapas,
                superclubApellidosPapas: superclubApellidosPapas,
                superclubDPI: superclubDPI,
                superclubNoPrivilegio: superclubNoPrivilegio,
                superclubFechaPapas: superclubFechaPapas,
                superclubGeneroPapasF: superclubGeneroPapasF,
                superclubGeneroPapasM: superclubGeneroPapasM,
                superclubCorreoPapas: superclubCorreoPapas,
                superclubConfirmarPapas: superclubConfirmarPapas,
                superclubTelefono: superclubTelefono,
                superclubTelefonoCelular: superclubTelefonoCelular,
                superclubZona: superclubZona,
                superclubDepartamento: superclubDepartamento,
                superclubDireccion: superclubDireccion,
                superclubDireccionMisma: superclubDireccionMisma,
                superclubDireccionOtra: superclubDireccionOtra*/
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