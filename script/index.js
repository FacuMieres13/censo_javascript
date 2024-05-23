// SECCIONES
function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        seccion.style.display = "none";
    }
}
let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.addEventListener("click", mostrarSeccion);
}
function mostrarSeccion() {
    let idBoton = this.getAttribute("id");//"btnSeccionVender"
    let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.slice(4);//"seccionVender"
    if (idBoton == "btnSeccionCerrarSesion") {
        cambiarSeccion("seccionIniciarSesion");
        mostrarBotones("invitado");
        sistema.idCensistaLogueado = 0;
    } else {
        cambiarSeccion(idSeccion);
    }
}
function cambiarSeccion(nuevaSeccion) {
    ocultarSecciones()
    document.querySelector("#" + nuevaSeccion).style.display = "block";
    switch (nuevaSeccion) {
        case "seccionReasignarCensista":
            cargarDataReasignarCensista();
            break;
        case "seccionRealizarCenso":
            cargarDepartamentos("censo");
            break;
        case "seccionBuscarCenso":
            cargarDepartamentos("buscador");
            break;
        case "seccionEstadisticaInv":
            datosEstadisticas("invitado");
            break
        case "seccionEstadisticaCensista":
            datosEstadisticas("censista");
            cargarDepartamentos("estadistica");
    }
}
function mostrarBotones(tipo) {
    let todosBotones = document.querySelectorAll(".btn");
    for (let i = 0; i < todosBotones.length; i++) {
        const boton = todosBotones[i];
        boton.style.display = "none";
    }
    let botonesMostrar = document.querySelectorAll("." + tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        const boton = botonesMostrar[i];
        boton.style.display = "block";
    }
}
mostrarBotones("invitado");
cambiarSeccion("seccionIniciarSesion");
// FIN SECCIONES
// CLASSES
class Censista {
    constructor(idCensista, nombre, nombreUsuario, contrasenia) {
        this.idCensista = idCensista
        this.nombre = nombre
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
    }
}
class Censo {
    constructor(idCenso, cedula, nombre, apellido, edad, departamento, ocupacion, censado, idCensista) {
        this.idCenso = idCenso
        this.cedula = cedula
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.departamento = departamento
        this.ocupacion = ocupacion
        this.censado = censado
        this.idCensista = idCensista
    }
}
class Sistema {
    constructor() {
        this.censistas = [
            new Censista(1, "Mikaela", "mikaRegalado", "Qwer1234@!"),
            new Censista(2, "Facundo", "facuMieres", "Facu123@!"),
            new Censista(3, "Santiago", "SantiagoFN1A", "SantiN1A.")
        ]
        this.proximoIdCensista = 4;
        this.censos = [
            new Censo(1, "52934958", "Mikaela", "Regalado", 21, "Montevideo", "Independiente", true, 2),
            new Censo(2, "51468178", "Facundo", "Mieres", 23, "Montevideo", "Dependiente", true, 2),
            new Censo(3, "51468162", "Mathias", "Mieres", 15, "Montevideo", "Dependiente", false, 2),
            new Censo(4, "19759648", "Natalia", "Cora", 45, "Maldonado", "No trabaja", false, 1),
            new Censo(5, "60940917", "Manuel", "Regalado", 8, "Canelones", "Estudiante", false, 1),
            new Censo(6, "18232643", "María", "López", 25, "Canelones", "Estudiante", false, 1),
            new Censo(7, "35355828", "Pedro", "González", 40, "Maldonado", "Independiente", true, 3),
            new Censo(8, "61544853", "Ana", "Martínez", 35, "Montevideo", "Dependiente", false, 2),
            new Censo(9, "44417403", "Luis", "Rodríguez", 28, "Tacuarembó", "No trabaja", true, 1),
            new Censo(10, "16667698", "Sofía", "Silva", 3, "Rocha", "Independiente", false, 3),
            new Censo(11, "29810537", "Carlos", "Fernández", 32, "Salto", "Dependiente", true, 2),
            new Censo(12, "71555438", "Laura", "Pérez", 5, "Artigas", "Estudiante", true, 1),
            new Censo(13, "12700872", "Martín", "Gómez", 45, "Paysandú", "Dependiente", false, 3),
            new Censo(14, "50286212", "Valentina", "Hernández", 27, "Rivera", "Independiente", true, 2),
            new Censo(15, "26145614", "Javier", "Sánchez", 33, "Durazno", "Dependiente", false, 1),
            new Censo(16, "36630932", "Ana", "González", 4, "Canelones", "Estudiante", false, 1),
            new Censo(17, "15709702", "Pedro", "Martínez", 40, "Maldonado", "Independiente", true, 3),
            new Censo(18, "18873867", "Sofía", "López", 35, "Montevideo", "Dependiente", false, 2),
            new Censo(19, "89466677", "Lucas", "Rodríguez", 28, "Tacuarembó", "No trabaja", true, 1),
            new Censo(20, "73940883", "María", "Fernández", 17, "Rocha", "Independiente", false, 3),
            new Censo(21, "15046582", "Carlos", "Pérez", 9, "Salto", "Dependiente", true, 2),
            new Censo(22, "68352538", "Laura", "Silva", 22, "Artigas", "Estudiante", true, 1),
            new Censo(23, "79437367", "Martín", "Gómez", 16, "Paysandú", "Dependiente", false, 3),
            new Censo(24, "31918456", "Valentina", "Hernández", 27, "Rivera", "Independiente", true, 2),
            new Censo(25, "27673490", "Javier", "Sánchez", 33, "Durazno", "Dependiente", false, 1),
            new Censo(26, "60675794", "Camila", "Pérez", 28, "Cerro Largo", "Estudiante", false, 2),
            new Censo(27, "84747676", "Andrés", "González", 12, "Colonia", "Independiente", true, 3),
            new Censo(28, "97725435", "Carolina", "Fernández", 37, "Flores", "Dependiente", false, 1),
            new Censo(29, "86473631", "Diego", "Rodríguez", 42, "San José", "No trabaja", true, 1),
            new Censo(30, "47575969", "Florencia", "Silva", 24, "Soriano", "Estudiante", false, 3)
        ]
        this.proximoIdCenso = 31;
        this.idCensistaLogueado = 0;
        this.busquedaActual = null;
        this.departamentos = ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'];
        this.estadisticas = {};
    }
    agregarCensistaSistema(objCensista) {
        this.censistas.push(objCensista);
        console.log(this.censistas)
    }
    agregarCensoSistema(objCenso) {
        this.censos.push(objCenso);
        console.log(this.censos)
    }
    obtenerProximoIdCensista() {
        let dev = this.proximoIdCensista;
        this.proximoIdCensista++;
        return dev;
    }
    obtenerProximoIdCenso() {
        let dev2 = this.proximoIdCenso;
        this.proximoIdCenso++;
        return dev2;
    }
    inicioSesionSistema(usuario, contra) {
        let existeUsuario = false
        for (let i = 0; i < this.censistas.length; i++) {
            const censista = this.censistas[i];
            let usuarioMin = usuario.toLowerCase();
            if (censista.nombreUsuario.toLowerCase() === usuarioMin && censista.contrasenia === contra) {
                existeUsuario = true
                this.idCensistaLogueado = censista.idCensista;
            }
        }
        return existeUsuario;
    }
    validarCensoBuscado(ci) {
        for (let i = 0; i < this.censos.length; i++) {
            const censo = this.censos[i];
            if (censo.cedula === ci) {
                censo.censado = true;
                break;
            }
        }
        return true
    }
}
//FIN CLASSES
let sistema = new Sistema;
document.querySelector("#btnRegistrarse").addEventListener("click", registrarUsuario);
document.querySelector("#btnIniciarSesion").addEventListener("click", iniciarSesion);
document.querySelector("#btnRegistrarCenso").addEventListener('click', registrarCenso);
document.querySelector("#btnBuscarCenso").addEventListener('click', buscarCenso);
document.querySelector("#btnBuscarCensoEliminar").addEventListener('click', eliminarCenso);
document.querySelector("#btnValidarCenso").addEventListener('click', validarCenso);
document.querySelector("#btnReasignarCensista").addEventListener('click', reasignarCensista);
document.querySelector("#btnMostrarPorcentajeEdad").addEventListener("click", mostrarPorcentajeEstEdad);
//registrar un nuevo usuario
function registrarUsuario() {
    document.querySelector("#pMensaje").innerHTML = "";
    let nombre = document.querySelector("#txtNombre").value;
    let nombreUsuario = document.querySelector("#txtNombreUsuario").value;
    let contrasenia = document.querySelector("#txtContrasenia").value;
    if (nombre == "" || nombreUsuario == "" || contrasenia == "") {
        document.querySelector("#pMensaje").innerHTML = `Ingrese todos los datos`
    } else {
        let usuarioExistente = existeElemento(sistema.censistas, "nombreUsuario", nombreUsuario);
        let validarContra = validarContrasenia(contrasenia);
        if (!usuarioExistente && validarContra) {
            let objCensista = new Censista(sistema.obtenerProximoIdCensista(), nombre, nombreUsuario, contrasenia);
            sistema.idCensistaLogueado = objCensista.idCensista;
            sistema.agregarCensistaSistema(objCensista);
            document.querySelector("#pMensaje").innerHTML = `Usuario agregado correctamente`;
            mostrarBotones("censista");
            cambiarSeccion("seccionRealizarCenso");
        } else if (usuarioExistente) {
            document.querySelector("#pMensaje").innerHTML = `Usuario ya existente`;
        } else {
            document.querySelector("#pMensaje").innerHTML = `La contraseña no es valida`;
        }
    }
}
// iniciar sesion
function iniciarSesion() {
    let nombreUsuarioSesion = document.querySelector("#txtNombreUsuarioLogin").value;
    let contraseniaSesion = document.querySelector("#txtContraseniaLogin").value;
    if (nombreUsuarioSesion == "" || contraseniaSesion == "") {
        document.querySelector("#pMensajeSesion").innerHTML = `Ingrese todos los datos`
    } else {
        let consultarContra = sistema.inicioSesionSistema(nombreUsuarioSesion, contraseniaSesion);
        if (consultarContra) {
            mostrarBotones("censista");
            cambiarSeccion("seccionRealizarCenso");
        } else {
            document.querySelector("#pMensajeSesion").innerHTML = `Datos incorrectos`
        }
    }
}
//validar contra para registro
function validarContrasenia(texto) {
    let mayus = false;
    let minus = false;
    let num = false;
    for (let i = 0; i < texto.length; i++) {
        let car = texto.charCodeAt(i);
        if (car >= 65 && car <= 90 || car >= 192 && car <= 221) {
            mayus = true;
        } else if (car >= 97 && car <= 122 || car >= 224 && car <= 255) {
            minus = true;
        } else if (car >= 48 && car <= 57) {
            num = true;
        }
    }
    if (texto.length >= 5 && mayus && minus && num) {
        return true
    } else {
        return false
    }
}
//aux para buscar datos dinamicamente dentro de un array
function existeElemento(arr, prop, valor) {
    let existe = false;
    for (let i = 0; i < arr.length; i++) {
        const unElemento = arr[i];
        if (unElemento[prop] === valor) {
            existe = true;
            break;
        }
    }
    return existe;
}
//registrar un nuevo censo
function registrarCenso() {
    let cedula = document.querySelector("#txtCedulaCenso").value;
    let nombre = document.querySelector("#txtNombreCenso").value;
    let apellido = document.querySelector("#txtApellidoCenso").value;
    let edad = Number(document.querySelector("#txtEdadCenso").value);
    let departamento = document.querySelector("#slcDepartamento").value;
    let ocupacion = document.querySelector("#slcOcupacion").value;
    var validado = sistema.idCensistaLogueado > 0 ? true : false;
    let idCensista = sistema.idCensistaLogueado > 0 ? sistema.idCensistaLogueado : obtenerElementoAleatorio(sistema.censistas);
    debugger;
    if (!cedula || !nombre || !apellido || !edad || departamento == 0 || ocupacion == 0) {
        document.querySelector("#pMensajeCenso").innerHTML = `Debe ingresar todos los datos`
    }
    else {
        let cedulaValidada = verificarCI(cedula);
        if (cedulaValidada) {
            let existeCenso = existeElemento(sistema.censos, "cedula", cedula);
            if (existeCenso) {
                document.querySelector("#pMensajeCenso").innerHTML = `Censo ya realizado`
            }
            else {
                let objCenso = new Censo(sistema.obtenerProximoIdCenso(), cedula, nombre, apellido, edad, departamento, ocupacion, validado, idCensista);
                sistema.agregarCensoSistema(objCenso);
                document.querySelector("#pMensajeCenso").innerHTML = `Censo ingresado correctamente`;
                console.log(sistema.censos, "CENSOS");
            }
        }
        else {
            document.querySelector("#pMensajeCenso").innerHTML = `Cédula no valida`
        }
    }
}
//Verificar cedula de identidad
function verificarCI(CI) {
    let ci = eliminarCaracter(CI, "-");
    ci = eliminarCaracter(CI, ".");//47773339
    if (ci.length === 7) {
        ci = "0" + ci;
    }
    let codigo = "2987634";
    let acumulador = 0;
    let digitoVerificar = ci.charAt(CI.length - 1);
    for (let i = 0; i < ci.length - 1; i++) {
        let multiplicacion = Number(ci.charAt(i)) * Number(codigo.charAt(i));
        acumulador += multiplicacion;
    }
    let digitoVerificador = (10 - (acumulador % 10)) % 10;
    if (Number(digitoVerificar) === digitoVerificador) {
        return true
    } else {
        return false
    }
}
// aux para eliminar caracter de cedula
function eliminarCaracter(txt, letra) {
    let nuevoTxt = "";
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) !== letra) {
            nuevoTxt += txt.charAt(i);
        }
    }
    return nuevoTxt;
}
//buscar un censo
function buscarCenso() {
    let cedula = document.querySelector("#txtBuscarCenso").value;
    let validacionCi = verificarCI(cedula);
    if (validacionCi) {
        let existeCenso = existeElemento(sistema.censos, "cedula", cedula);
        if (existeCenso) {
            let persona = sistema.censos.find(elemento => elemento.cedula === cedula);
            console.log(persona)
            document.querySelector("#seccionFormCenso").style.display = ''
            //llenar formulario con datos del CENSO
            document.querySelector("#txtCedulaCensoB").value = persona.cedula;
            document.querySelector("#txtNombreCensoB").value = persona.nombre;
            document.querySelector("#txtApellidoCensoB").value = persona.apellido;
            document.querySelector("#txtEdadCensoB").value = persona.edad;
            document.querySelector("#slcDepartamentoB").value = persona.departamento;
            document.querySelector("#slcOcupacionB").value = persona.ocupacion;
            if (persona.censado == true) {
                document.querySelector("#pMensajeBuscado").innerHTML = `Censo validado`;
                document.querySelector("#btnValidarCenso").style.display = "none";
                document.querySelector("#txtBuscarCenso").value = "";
            } else {
                sistema.busquedaActual = persona
                document.querySelector("#pMensajeBuscado").innerHTML = ``
                document.querySelector("#btnValidarCenso").style.display = "block";
            }
            console.log(persona.censado)
        } else if (!cedula) {
            document.querySelector("#pMensajeBuscado").innerHTML = `Ingrese una cédula`
        }
        else {
            document.querySelector("#pMensajeBuscado").innerHTML = `Censo no realizado`
            document.querySelector("#seccionFormCenso").style.display = 'none'
        }
    }
    else {
        document.querySelector("#pMensajeBuscado").innerHTML = `Cédula inválida`
        document.querySelector("#seccionFormCenso").style.display = 'none'
    }
}
// eliminar censo
function eliminarCenso() {
    let cedulaEliminar = document.querySelector("#txtBuscarCensoEliminar").value;
    let validacionCi = verificarCI(cedulaEliminar);
    if (validacionCi) {
        let existeCenso = existeElemento(sistema.censos, "cedula", cedulaEliminar);
        debugger;
        if (existeCenso) {
            let documentoAEliminar = cedulaEliminar;
            let confirmacion = confirm("¿Quieres eliminar este censo?")
            if (confirmacion) {
                for (let i = 0; i < sistema.censos.length; i++) {
                    if (sistema.censos[i].cedula === documentoAEliminar) {
                        if (!sistema.censos[i].censado) {
                            sistema.censos.splice(i, 1);
                            document.querySelector("#pMensajeEliminar").innerHTML = `Censo eliminado`
                            break;
                        } else {
                            document.querySelector("#pMensajeEliminar").innerHTML = `No puedes eliminar un censo validado`
                        }
                    }
                }
                console.log(sistema.censos);
            }
        }
        else if (!existeCenso && cedulaEliminar != '') {
            document.querySelector("#pMensajeEliminar").innerHTML = `Censo no encontrado`
        }
        else {
            document.querySelector("#pMensajeEliminar").innerHTML = `Debe ingresar un valor`
        }
    } else {
        document.querySelector("#pMensajeEliminar").innerHTML = `Cédula inválida`
    }
}
//validar censo
function validarCenso() {
    let ciPersona = sistema.busquedaActual.cedula;
    let validarCenso = sistema.validarCensoBuscado(ciPersona);
    if (validarCenso) {
        document.querySelector("#seccionFormCenso").style.display = "none";
        document.querySelector("#pMensajeBuscado").innerHTML = `Censo validado`;
        document.querySelector("#txtBuscarCenso").value = "";
    }
}
// cargar los departamentos en los combos desplegables
function cargarDepartamentos(tipo) {
    for (let i = 0; i < sistema.departamentos.length; i++) {
        const departamento = sistema.departamentos[i];
        switch (tipo) {
            case 'censo':
                document.querySelector("#slcDepartamento").innerHTML += `<option value="${departamento}">${departamento}</option>`;
                break;
            case 'invitado':
                document.querySelector("#slcDepartamentoB").innerHTML += `<option value="${departamento}">${departamento}</option>`;
                break;
            case 'estadistica':
                document.querySelector("#slcDepEstadistica").innerHTML += `<option value="${departamento}">${departamento}</option>`;
                break
        }
    }
}
// cargar las personas y cenistas en los combos desplegables de la seccion reasignar
function cargarDataReasignarCensista() {
    document.querySelector("#slcPersonas").innerHTML = "";
    document.querySelector("#slcPersonas").innerHTML = '<option value="0">Seleccione Persona</option>';
    for (let i = 0; i < sistema.censos.length; i++) {
        const censo = sistema.censos[i];
        if (!censo.validado && censo.idCensista === sistema.idCensistaLogueado) {
            document.querySelector("#slcPersonas").innerHTML += `<option value="${censo.idCenso}">${censo.nombre} ${censo.apellido}</option>`;
        }
    }
    document.querySelector("#slcCensistas").innerHTML = "";
    document.querySelector("#slcCensistas").innerHTML = '<option value="0">Seleccione Censista</option>';
    for (let i = 0; i < sistema.censistas.length; i++) {
        const censista = sistema.censistas[i];
        if (censista.idCensista !== sistema.idCensistaLogueado) {
            document.querySelector("#slcCensistas").innerHTML += `<option value="${censista.idCensista}">${censista.nombre}</option>`;
        }
    }
}
// reasignar censista
function reasignarCensista() {
    let persona = Number(document.querySelector("#slcPersonas").value);
    let censistaElegido = Number(document.querySelector("#slcCensistas").value);
    for (let i = 0; i < sistema.censos.length; i++) {
        const censo = sistema.censos[i];
        if (censo.idCenso === persona) {
            censo.idCensista = censistaElegido;
        }
    }
    document.querySelector("#pMensajeReasignar").innerHTML = "Censista reasignado correctamente";
    cargarDataReasignarCensista();
}
// gestionar datos generales estadisticas
function datosEstadisticas(tipoPersona) {
    let personasPorDep = []
    for (let i = 0; i < sistema.departamentos.length; i++) {
        const departamentoArr = sistema.departamentos[i];
        let objectoDep = {
            "departamento": departamentoArr,
            "estudian": 0,
            "noTrabajan": 0,
            "depInd": 0,
            "totalPersonas": 0,
            "porcentajePersonas": 0,
            "totalPersonasCensadas": 0
        };
        for (let j = 0; j < sistema.censos.length; j++) {
            const censo = sistema.censos[j];
            if (departamentoArr === censo.departamento) {
                switch (censo.ocupacion) {
                    case "Independiente":
                    case 'Dependiente':
                        objectoDep.depInd++;
                        break;
                    case 'Estudiante':
                        objectoDep.estudian++;
                        break;
                    case 'No trabaja':
                        objectoDep.noTrabajan++;
                        break
                }
                if (censo.censado) {
                    objectoDep.totalPersonasCensadas++
                }
                objectoDep.totalPersonas++;
            }
        }
        objectoDep.totalPersonas = objectoDep.totalPersonas;
        objectoDep.porcentajePersonas = objectoDep.totalPersonas * 100 / sistema.censos.length;
        personasPorDep.push(objectoDep);
    }
    sistema.estadisticas.personasPorDep = personasPorDep;
    if (tipoPersona === "invitado") {
        armarTablaInvitado();
    } else {
        generarDatosCensista();
        armarDatosCensista();
    }
}
// obtener datos especificos para las estadisticas del censista
function generarDatosCensista() {
    let personasValidadas = 0;
    let personasPendientes = 0;
    for (let i = 0; i < sistema.censos.length; i++) {
        const censo = sistema.censos[i];
        if (censo.censado) {
            personasValidadas++
        } else {
            personasPendientes++
        }
    }
    let porcentajePendientes = personasPendientes * 100 / sistema.censos.length;
    sistema.estadisticas.personasValidadas = personasValidadas;
    sistema.estadisticas.porcentajePendientes = porcentajePendientes;
}
// armar tabla para las estadisticas de invitado
function armarTablaInvitado() {
    document.querySelector("#tblEstadisticasInv").innerHTML = "";
    for (let i = 0; i < sistema.estadisticas.personasPorDep.length; i++) {
        const estadistica = sistema.estadisticas.personasPorDep[i];
        document.querySelector("#tblEstadisticasInv").innerHTML += `<tr>
    <td>${estadistica.departamento}</td>
    <td>${estadistica.estudian}</td>
    <td>${estadistica.noTrabajan}</td>
    <td>${estadistica.depInd}</td>
    <td>${estadistica.porcentajePersonas}%</td>
    </tr>`
    }
}
// armar tabla para las estadisticas de censista
function armarDatosCensista() {
    document.querySelector("#tblTotalPersonas").innerHTML = "";
    document.querySelector("#tblPersonasPendientes").innerHTML = "";
    document.querySelector("#tblPersonasPorDep").innerHTML = "";
    for (let i = 0; i < sistema.estadisticas.personasPorDep.length; i++) {
        const estadistica = sistema.estadisticas.personasPorDep[i];
        document.querySelector("#tblPersonasPorDep").innerHTML += `<tr>
    <td>${estadistica.departamento}</td>
    <td>${estadistica.totalPersonasCensadas}</td>
    </tr>`
    }
    document.querySelector("#tblTotalPersonas").innerHTML += `<tr>
    <td>${sistema.estadisticas.personasValidadas}</td>
    </tr>`
    document.querySelector("#tblPersonasPendientes").innerHTML += `<tr>
    <td>${sistema.estadisticas.porcentajePendientes}%</td>
    </tr>`
}
// armar tabla para las estadisticas de censista
function mostrarPorcentajeEstEdad() {
    let mayoresEdad = 0;
    let menoresEdad = 0;
    let depElegido = document.querySelector("#slcDepEstadistica").value;
    for (let i = 0; i < sistema.censos.length; i++) {
        const censo = sistema.censos[i];
        if (censo.departamento === depElegido) {
            if (censo.edad > 18) {
                mayoresEdad++
            } else {
                menoresEdad++
            }
        }
    }
    let totalEdades = menoresEdad + mayoresEdad;
    var porcentajeMenores = (menoresEdad / totalEdades) * 100;
    var porcentajeMayores = (mayoresEdad / totalEdades) * 100;
    document.querySelector("#PMensajeDepEstad").innerHTML = `Personas censadas menores de edad: ${[porcentajeMenores]}% <br> Personas censadas mayores de edad: ${[porcentajeMayores]}%`
}
// aux obtener valor random de un array
function obtenerElementoAleatorio(array) {
    var indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio].idCensista;
}
