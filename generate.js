var faker = require('faker');

var database = { pacientes: []};

for (var i = 1; i<= 50; i++) {


    faker.locale = "es_MX";
    var persona = faker.random.arrayElement([
        {sexo: 'H', nombres: faker.name.firstName(0) + ' ' +faker.name.firstName(0)},
        {sexo: 'M', nombres: faker.name.firstName(1) + ' ' +faker.name.firstName(1)}
    ]);

    database.pacientes.push({

        id: i,
        rut: faker.random.number({min:100000000, max:999999999}),
        nombres : persona.nombres,
        apellidoPaterno : faker.name.firstName(),
        apellidoMaterno : faker.name.lastName(),
        sexo : persona.sexo,
        fechaNacimiento : faker.date.past(faker.random.number({min:0, max:100})),
        ciudad : faker.address.city(),
        comuna : faker.address.city(),
        direccion : faker.address.streetName(),
        numero : faker.random.number(3),
        complemento: faker.address.secondaryAddress(),
        telefono1 : faker.phone.phoneNumber("5#########"),
        telefono2 : faker.phone.phoneNumber("9#########"),
        historialMedico : faker.lorem.paragraph(),
        prioridad : faker.random.arrayElement([ 'C1','C2','C3','C4','A1','A2','A3','A4','B1','B2','B3','B4'])

    })
}

console.log(JSON.stringify(database));
