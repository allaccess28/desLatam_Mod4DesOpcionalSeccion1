function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });

  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    },
  });

  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    },
  });

  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    },
  });

  Object.defineProperty(this, "_setnombre", {
    ste: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });

  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

//proto

Paciente.prototype.getNombre = function () {
  return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
};

Paciente.prototype.getEdad = function () {
  return this._getEdad;
};
Paciente.prototype.setEdad = function (edad) {
  this._setEdad = edad;
};

Paciente.prototype.getRut = function () {
  return this._getRut;
};
Paciente.prototype.setRut = function (rut) {
  this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._setDiagnostico = diagnostico;
};

let paciente_1 = new Paciente(
  "Andres Jorquera",
  "21",
  "12365345-6",
  "trastorno bipolar"
);
let paciente_2 = new Paciente(
  "Elena Sanhueza",
  "34",
  "7.843568-6",
  "depresion"
);
let paciente_3 = new Paciente(
  "Felipe Muñoz",
  "32",
  "14629056-8",
  "Esquizofrenia"
);

let p1 = [
  paciente_1.getNombre(),
  paciente_1.getEdad(),
  paciente_1.getRut(),
  paciente_1.getDiagnostico(),
];
let p2 = [
  paciente_2.getNombre(),
  paciente_2.getEdad(),
  paciente_2.getRut(),
  paciente_2.getDiagnostico(),
];
let p3 = [
  paciente_3.getNombre(),
  paciente_3.getEdad(),
  paciente_3.getRut(),
  paciente_3.getDiagnostico(),
];

let consultorio1 = new Consultorio("Peral", [p1, p2, p3]);
console.log(consultorio1);

Consultorio.prototype.datosPacientes = function () {
  console.log(`${this.pacientes}`);
};
console.log(`${paciente_3.getNombre()}`);
consultorio1.datosPacientes();

Paciente.prototype.buscarPaciente = function () {
  let buscar = "Felipe Muñoz";

  if (buscar == paciente_3.getNombre()) {
    console.log(`${paciente_3.getNombre()}`);
  } else {
    console.log("paciente no encontrado");
  }
};

paciente_3.buscarPaciente();
