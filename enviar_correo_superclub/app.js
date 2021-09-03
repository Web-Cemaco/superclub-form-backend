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
        //let params = event.queryStringParameters
        let superclubNombreNino = body.superclubNombreNino;
        let superclubApellidos = body.superclubApellidos;
        let superclubEmail = body.superclubEmail;
        console.log(superclubNombreNino)
        let superclubConfirmar = body.superclubConfirmar;
        let superclubFechaNacimiento = body.superclubFechaNacimiento;
        let superclubGenero = body.superclubGenero;
        let superclubIntereses = body.superclubIntereses;

        //Datos de encargado
        let superclubParentesco = body.superclubParentesco;
        let superclubNombresPapas = body.superclubNombresPapas;
        let superclubApellidosPapas = body.superclubApellidosPapas;
        let superclubDPI = body.superclubDPI;
        let superclubNoPrivilegio = body.superclubNoPrivilegio;
        let superclubFechaPapas = body.superclubFechaPapas;
        let superclubGeneroAdulto = body.superclubGeneroAdulto;
        let superclubCorreoPapas = body.superclubCorreoPapas;
        let superclubConfirmarPapas = body.superclubConfirmarPapas;
        let superclubTelefono = body.superclubTelefono;
        let superclubTelefonoCelular = body.superclubTelefonoCelular;
        let superclubZona = body.superclubZona;
        let superclubDepartamento = body.superclubDepartamento;
        let superclubDireccion = body.superclubDireccion;
        let superclubDireccionMisma = body.superclubDireccionMisma;
        let superclubDireccionOtra = body.superclubDireccionOtra;
        let msg = {
            to: "andre8tr@gmail.com",
            from: "seily.suchi@cemaco.com",
            subject: 'Prueba',
            text: 'Nueva inscripcion',
            templateId: 'd-d3dedba1d3e64af9bc7db760dbb0265d',
            dynamic_template_data: {
                superclubNombreNino: superclubNombreNino,
                superclubApellidos: superclubApellidos,
                superclubEmail: superclubEmail,
                superclubConfirmar: superclubConfirmar,
                superclubFechaNacimiento: superclubFechaNacimiento,
                superclubGenero: superclubGenero,
                superclubIntereses: superclubIntereses,
                superclubParentesco: superclubParentesco,
                superclubNombresPapas: superclubNombresPapas,
                superclubApellidosPapas: superclubApellidosPapas,
                superclubDPI: superclubDPI,
                superclubNoPrivilegio: superclubNoPrivilegio,
                superclubFechaPapas: superclubFechaPapas,
                superclubGeneroAdulto: superclubGeneroAdulto,
                superclubCorreoPapas: superclubCorreoPapas,
                superclubConfirmarPapas: superclubConfirmarPapas,
                superclubTelefono: superclubTelefono,
                superclubTelefonoCelular: superclubTelefonoCelular,
                superclubZona: superclubZona,
                superclubDepartamento: superclubDepartamento,
                superclubDireccion: superclubDireccion,
                superclubDireccionMisma: superclubDireccionMisma,
                superclubDireccionOtra: superclubDireccionOtra
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
        console.log(err);
        callback(null, {
            'statusCode': 500,
            'body': JSON.stringify({
                message: 'goodbye world'
            }),
            headers: headers
        })
    }
};