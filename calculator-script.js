{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const tarifas = \{\
  China: \{\
    Aereo: \{\
      costoPorLibra: 15,\
      minimoLibras: 5,\
      destinos: [\
        \{ estado: "Distrito Capital", ciudades: ["Caracas", "El Junquito"] \},\
        \{ estado: "La Guaira", ciudades: ["La Guaira"] \},\
        \{ estado: "Miranda", ciudades: ["Los Teques", "San Antonio de los Altos", "Carrizal", "Guarenas", "Guatire", "Charallave", "C\'faa", "Santa Teresa", "Valles del Tuy", "Ocumare del Tuy"] \},\
        \{ estado: "Aragua", ciudades: ["Maracay", "La Victoria", "Santa Cruz de Aragua", "Turmero", "Cagua"] \},\
        \{ estado: "Carabobo", ciudades: ["Valencia", "Guacara", "San Diego", "Puerto Cabello", "Bejuma", "San Joaqu\'edn", "Tocuyito"] \}\
      ]\
    \},\
    Maritimo: [\
      \{\
        costoPorPie: 27,\
        minimoPies: 1,\
        destinos: [\
          \{ estado: "Distrito Capital", ciudades: ["Caracas", "El Junquito"] \},\
          \{ estado: "La Guaira", ciudades: ["La Guaira"] \},\
          \{ estado: "Miranda", ciudades: ["Los Teques", "San Antonio de los Altos", "Carrizal", "Guarenas", "Guatire", "Charallave", "C\'faa", "Santa Teresa", "Valles del Tuy", "Ocumare del Tuy"] \},\
          \{ estado: "Aragua", ciudades: ["Maracay", "La Victoria", "Santa Cruz de Aragua", "Turmero", "Cagua"] \},\
          \{ estado: "Carabobo", ciudades: ["Valencia", "Guacara", "San Diego", "Puerto Cabello", "Bejuma", "San Joaqu\'edn", "Tocuyito"] \}\
        ]\
      \},\
      \{\
        costoPorPie: 32,\
        minimoPies: 1,\
        destinos: [\
          \{ estado: "Cojedes", ciudades: ["San Carlos", "Tinaquillo"] \},\
          \{ estado: "Yaracuy", ciudades: ["San Felipe"] \},\
          \{ estado: "Lara", ciudades: ["Barquisimeto", "Cabudare", "El Tocuyo", "Carora", "Qu\'edbor"] \},\
          \{ estado: "Anzo\'e1tegui", ciudades: ["Barcelona", "Anaco", "El Tigre", "Puerto La Cruz", "Lecher\'eda"] \},\
          \{ estado: "Cantaura", ciudades: ["Cantaura"] \},\
          \{ estado: "Monagas", ciudades: ["Matur\'edn"] \},\
          \{ estado: "Bol\'edvar", ciudades: ["Ciudad Bol\'edvar", "Puerto Ordaz", "San F\'e9lix"] \}\
        ]\
      \},\
      \{\
        costoPorPie: 34,\
        minimoPies: 1,\
        destinos: [\
          \{ estado: "T\'e1chira", ciudades: ["San Crist\'f3bal", "San Antonio del T\'e1chira"] \},\
          \{ estado: "Trujillo", ciudades: ["Trujillo"] \},\
          \{ estado: "Portuguesa", ciudades: ["Acarigua", "Araure"] \},\
          \{ estado: "M\'e9rida", ciudades: ["M\'e9rida"] \},\
          \{ estado: "Zulia", ciudades: ["Maracaibo", "Cabimas"] \},\
          \{ estado: "Barinas", ciudades: ["Barinas"] \}\
        ]\
      \}\
    ]\
  \},\
  USA: \{\
    Aereo: \{\
      base: 5,\
      minimoLibras: 2,\
      ciudades: ["Caracas", "El Junquito", "La Guaira", "Los Teques", "San Antonio de los Altos", "Carrizal", "Guarenas", "Guatire", "Charallave", "C\'faa", "Santa Teresa", "Valles del Tuy", "Ocumare del Tuy", "Maracay", "La Victoria", "Santa Cruz de Aragua", "Turmero", "Cagua", "Valencia", "Guacara", "San Diego", "Puerto Cabello", "Bejuma", "San Joaqu\'edn", "Tocuyito"]\
    \},\
    Maritimo: \{\
      40: ["Caracas", "El Junquito", "Guatire", "Charallave", "C\'faa", "Santa Teresa", "Valles del Tuy", "Ocumare del Tuy", "Maracay", "La Victoria", "Santa Cruz de Aragua", "Turmero", "Cagua", "Valencia", "Guacara", "San Diego", "Puerto Cabello", "Bejuma", "San Joaqu\'edn", "Tocuyito"],\
      43: ["San Carlos", "Tinaquillo", "San Felipe", "Barquisimeto", "Cabudare", "El Tocuyo", "Carora", "Qu\'edbor", "Barcelona", "Anaco", "El Tigre", "Puerto La Cruz", "Lecher\'eda", "Cantaura", "Maturin", "Ciudad Bol\'edvar", "Puerto Ordaz", "San F\'e9lix"],\
      47: ["San Crist\'f3bal", "San Antonio del T\'e1chira", "Acarigua", "Araure", "M\'e9rida", "Maracaibo", "Cabimas", "Barinas", "Trujillo"]\
    \}\
  \}\
\};\
\
let origen = '', tipo = '', ciudad = '';\
let savedLargo = 0, savedAncho = 0, savedAlto = 0, savedPeso = 0;\
\
function validateInput(input, errorElement, message) \{\
  const value = parseFloat(input.value);\
  if (isNaN(value) || value <= 0) \{\
    errorElement.textContent = message;\
    return false;\
  \}\
  errorElement.textContent = '';\
  return true;\
\}\
\
function seleccionarOrigen(o) \{\
  origen = o;\
  tipo = '';\
  ciudad = '';\
  document.getElementById('modalTitle').textContent = `Calcula tu env\'edo desde $\{o\}`;\
  mostrarPaso('paso2');\
\}\
\
function seleccionarTipo(t) \{\
  tipo = t;\
  ciudad = '';\
  cargarCiudades();\
  document.getElementById('modalTitle').textContent = `Calcula tu env\'edo $\{t.toLowerCase()\} desde $\{origen\}`;\
  mostrarPaso('pasoCiudad');\
\}\
\
function cargarCiudades() \{\
  const sel = document.getElementById('ciudadCalc');\
  sel.innerHTML = '<option value="" disabled selected>Selecciona una ciudad</option>';\
  let lista = [];\
  if (origen === 'USA') \{\
    if (tipo === 'A\'e9reo') \{\
      lista = [...tarifas.USA.Aereo.ciudades];\
    \} else \{\
      for (const key in tarifas.USA.Maritimo) \{\
        lista = lista.concat(tarifas.USA.Maritimo[key]);\
      \}\
    \}\
  \} else \{\
    if (tipo === 'A\'e9reo') \{\
      tarifas.China.Aereo.destinos.forEach(d => \{\
        lista = lista.concat(d.ciudades);\
      \});\
    \} else \{\
      tarifas.China.Maritimo.forEach(b => \{\
        b.destinos.forEach(d => \{\
          lista = lista.concat(d.ciudades);\
        \});\
      \});\
    \}\
  \}\
  lista = [...new Set(lista)].sort();\
  lista.forEach(c => \{\
    const option = document.createElement('option');\
    option.value = c;\
    option.textContent = c;\
    sel.appendChild(option);\
  \});\
  return lista;\
\}\
\
function continuarCiudad() \{\
  const selectCiudad = document.getElementById('ciudadCalc');\
  if (selectCiudad.value) \{\
    ciudad = selectCiudad.value;\
    mostrarPaso('pasoFormulario');\
  \} else \{\
    document.getElementById('formError').textContent = 'Selecciona una ciudad.';\
  \}\
\}\
\
function mostrarPaso(id, noReset = false) \{\
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));\
  if (id !== 'pasoFormulario' && !noReset) \{\
    document.getElementById('resultado').innerHTML = '';\
    document.getElementById('shippingForm').reset();\
    document.getElementById('formError').textContent = '';\
  \}\
  if (id === 'paso1') \{\
    document.getElementById('modalTitle').textContent = 'Calcula tu env\'edo';\
  \} else if (id === 'paso2') \{\
    document.getElementById('modalTitle').textContent = `Calcula tu env\'edo desde $\{origen\}`;\
  \} else if (id === 'pasoCiudad') \{\
    document.getElementById('modalTitle').textContent = `Calcula tu env\'edo $\{tipo.toLowerCase()\} desde $\{origen\}`;\
  \} else if (id === 'pasoFormulario') \{\
    document.getElementById('modalTitle').textContent = `Calcula tu env\'edo $\{tipo.toLowerCase()\} desde $\{origen\} a $\{ciudad || 'la ciudad seleccionada'\}`;\
  \}\
  document.getElementById(id).classList.add('active');\
  actualizarBarra(id);\
\}\
\
function actualizarBarra(paso) \{\
  const pasos = \{\
    paso1: [25, '1 de 4'],\
    paso2: [50, '2 de 4'],\
    pasoCiudad: [75, '3 de 4'],\
    pasoFormulario: [100, '4 de 4']\
  \};\
  const [porcentaje, texto] = pasos[paso] || [0, ''];\
  const progressBar = document.getElementById('progressBar');\
  const progressText = document.querySelector('.progress-text');\
  progressBar.style.width = `$\{porcentaje\}%`;\
  progressBar.setAttribute('aria-valuenow', porcentaje);\
  progressText.textContent = `Paso $\{texto\}`;\
\}\
\
function alternarTipo() \{\
  const otroTipo = tipo === 'A\'e9reo' ? 'Mar\'edtimo' : 'A\'e9reo';\
  tipo = otroTipo;\
  const lista = cargarCiudades();\
  if (lista.includes(ciudad)) \{\
    document.getElementById('largo').value = savedLargo;\
    document.getElementById('ancho').value = savedAncho;\
    document.getElementById('alto').value = savedAlto;\
    document.getElementById('peso').value = savedPeso;\
    mostrarPaso('pasoFormulario', true); // noReset true para no limpiar resultado ni form\
    if (tipo === 'A\'e9reo' && savedPeso <= 0) \{\
      document.getElementById('pesoError').textContent = 'Peso debe ser mayor a 0.';\
      document.getElementById('formError').textContent = 'Ingrese el peso y presione Calcular costo.';\
      document.getElementById('resultado').innerHTML = ''; // Limpiar resultado previo si aplica\
    \} else \{\
      calcularCosto(\{ preventDefault: () => \{\} \});\
    \}\
  \} else \{\
    ciudad = '';\
    mostrarPaso('pasoCiudad');\
    const noDisponible = document.getElementById('noDisponible');\
    noDisponible.textContent = `El servicio $\{otroTipo.toLowerCase()\} no est\'e1 disponible para la ciudad seleccionada. Por favor, elige otra ciudad.`;\
    noDisponible.style.display = 'block';\
    setTimeout(() => \{\
      noDisponible.style.display = 'none';\
      noDisponible.textContent = '';\
    \}, 5000); // Ocultar despu\'e9s de 5 segundos\
  \}\
\}\
\
function calcularCosto(e) \{\
  e.preventDefault();\
  const largoInput = document.getElementById('largo');\
  const anchoInput = document.getElementById('ancho');\
  const altoInput = document.getElementById('alto');\
  const pesoInput = document.getElementById('peso');\
  const largo = parseFloat(largoInput.value);\
  const ancho = parseFloat(anchoInput.value);\
  const alto = parseFloat(altoInput.value);\
  const peso = parseFloat(pesoInput.value) || 0;\
  const formError = document.getElementById('formError');\
\
  const largoValid = validateInput(largoInput, document.getElementById('largoError'), 'Largo debe ser mayor a 0.');\
  const anchoValid = validateInput(anchoInput, document.getElementById('anchoError'), 'Ancho debe ser mayor a 0.');\
  const altoValid = validateInput(altoInput, document.getElementById('altoError'), 'Alto debe ser mayor a 0.');\
  const pesoValid = tipo === 'A\'e9reo' ? validateInput(pesoInput, document.getElementById('pesoError'), 'Peso debe ser mayor a 0.') : true;\
\
  if (!largoValid || !anchoValid || !altoValid || !pesoValid || !ciudad) \{\
    formError.textContent = 'Corrige los errores en el formulario.';\
    return;\
  \}\
\
  savedLargo = largo;\
  savedAncho = ancho;\
  savedAlto = alto;\
  savedPeso = peso;\
\
  try \{\
    let resultHTML = '', summary = '';\
    if (tipo === 'Mar\'edtimo') \{\
      const volumen = (largo * ancho * alto) / 1728;\
      const facturable = volumen < 1 ? 1 : volumen;\
      let precioPie = 0;\
      if (origen === 'China') \{\
        const block = tarifas.China.Maritimo.find(b => b.destinos.some(s => s.ciudades.includes(ciudad)));\
        if (!block) throw new Error('Ciudad no encontrada');\
        precioPie = block.costoPorPie;\
      \} else \{\
        for (const [precio, ciudades] of Object.entries(tarifas.USA.Maritimo)) \{\
          if (ciudades.includes(ciudad)) precioPie = parseFloat(precio);\
        \}\
        if (!precioPie) throw new Error('Ciudad no encontrada');\
      \}\
      const costo = (facturable * precioPie).toFixed(2);\
      resultHTML = `Volumen: $\{volumen.toFixed(2)\} pies\'b3<br><span class="cost">Costo: $$\{costo\} USD</span>`;\
      summary = `Env\'edo mar\'edtimo desde $\{origen\} a $\{ciudad\}. Dimensiones: $\{largo\}\'d7$\{ancho\}\'d7$\{alto\}"`;\
    \} else \{\
      let minimoLibras, costoPorLibra;\
      if (origen === 'China') \{\
        minimoLibras = tarifas.China.Aereo.minimoLibras;\
        costoPorLibra = tarifas.China.Aereo.costoPorLibra;\
      \} else \{\
        minimoLibras = tarifas.USA.Aereo.minimoLibras;\
        costoPorLibra = tarifas.USA.Aereo.base;\
      \}\
      const volumen = (largo * ancho * alto) / 166;\
      const facturable = Math.max(Math.ceil(volumen), peso, minimoLibras);\
      const costo = (facturable * costoPorLibra).toFixed(2);\
      resultHTML = `Volumen: $\{volumen.toFixed(2)\} lbs<br><span class="cost">Costo: $$\{costo\} USD</span>`;\
      summary = `Env\'edo a\'e9reo desde $\{origen\} a $\{ciudad\}. Dimensiones: $\{largo\}\'d7$\{ancho\}\'d7$\{alto\}"; Peso: $\{peso\} lbs`;\
    \}\
    const resultadoDiv = document.getElementById('resultado');\
    resultadoDiv.innerHTML = `<div>$\{resultHTML\}</div><small>$\{summary\}</small>`;\
    document.getElementById('formError').textContent = '';\
\
    // Agregar bot\'f3n para alternar tipo\
    const alternarBtn = document.createElement('button');\
    alternarBtn.classList.add('btn');\
    alternarBtn.textContent = `Calcular como $\{tipo === 'A\'e9reo' ? 'mar\'edtimo' : 'a\'e9reo'\}`;\
    alternarBtn.addEventListener('click', alternarTipo);\
    resultadoDiv.appendChild(alternarBtn);\
  \} catch (error) \{\
    document.getElementById('formError').textContent = 'Error al calcular. Verifica los datos.';\
    console.error('Error en calcularCosto:', error);\
  \}\
\}\
\
function abrirPopup() \{\
  document.getElementById('popupRegistro').style.display = 'flex';\
  document.body.style.overflow = 'hidden';\
\}\
function cerrarPopup() \{\
  document.getElementById('popupRegistro').style.display = 'none';\
  document.body.style.overflow = 'auto';\
\}\
function abrirCalculadora() \{\
  document.getElementById('calculadoraPopup').style.display = 'flex';\
  document.body.style.overflow = 'hidden';\
\}\
function cerrarCalculadora() \{\
  document.getElementById('calculadoraPopup').style.display = 'none';\
  document.body.style.overflow = 'auto';\
\}\
function habilitarEnvio() \{\
  const acepto = document.getElementById("acepto").checked;\
  const boton = document.getElementById("botonEnviar");\
  boton.disabled = !acepto;\
\}\
function validarFormulario(event) \{\
  event.preventDefault();\
  const form = document.getElementById("registroForm");\
  let valid = true;\
\
  // Validar nombre\
  const nombre = document.getElementById("nombre");\
  if (!nombre.value) \{\
    document.getElementById("nombreError").textContent = 'Ingresa tu nombre.';\
    valid = false;\
  \} else \{\
    document.getElementById("nombreError").textContent = '';\
  \}\
\
  // Validar apellido\
  const apellido = document.getElementById("apellido");\
  if (!apellido.value) \{\
    document.getElementById("apellidoError").textContent = 'Ingresa tu apellido.';\
    valid = false;\
  \} else \{\
    document.getElementById("apellidoError").textContent = '';\
  \}\
\
  // Validar estado\
  const estado = document.getElementById("estado");\
  if (!estado.value) \{\
    document.getElementById("estadoError").textContent = 'Selecciona un estado.';\
    valid = false;\
  \} else \{\
    document.getElementById("estadoError").textContent = '';\
  \}\
\
  // Validar ciudad\
  const ciudad = document.getElementById("ciudadRegistro");\
  if (!ciudad.value) \{\
    document.getElementById("ciudadError").textContent = 'Selecciona una ciudad.';\
    valid = false;\
  \} else \{\
    document.getElementById("ciudadError").textContent = '';\
  \}\
\
  // Validar direcci\'f3n\
  const direccion = document.getElementById("direccion");\
  if (!direccion.value) \{\
    document.getElementById("direccionError").textContent = 'Ingresa una direcci\'f3n.';\
    valid = false;\
  \} else \{\
    document.getElementById("direccionError").textContent = '';\
  \}\
\
  // Validar email (b\'e1sico)\
  const email = document.getElementById("email");\
  if (!email.value || !email.value.includes('@')) \{\
    document.getElementById("emailError").textContent = 'Ingresa un correo v\'e1lido.';\
    valid = false;\
  \} else \{\
    document.getElementById("emailError").textContent = '';\
  \}\
\
  if (valid) \{\
    alert("Formulario enviado correctamente.");\
    // Aqu\'ed ir\'eda el env\'edo real\
  \}\
\}\
function abrirModal(e) \{\
  e.preventDefault();\
  alert("Aqu\'ed ir\'edan los T\'e9rminos y Condiciones en un modal.");\
\}\
const estadosCiudades = \{\
  "Distrito Capital": ["Caracas"],\
  "La Guaira": ["La Guaira"],\
  "Miranda": ["Los Teques", "San Antonio de los Altos", "Carrizal", "Guarenas", "Guatire", "Charallave", "C\'faa", "Santa Teresa", "Valles del Tuy", "Ocumare del Tuy"],\
  "Aragua": ["Maracay", "La Victoria", "Santa Cruz de Aragua", "Turmero", "Cagua"],\
  "Carabobo": ["Valencia", "Guacara", "San Diego", "Puerto Cabello", "Bejuma", "San Joaqu\'edn", "Tocuyito"],\
  "Cojedes": ["San Carlos", "Tinaquillo"],\
  "Yaracuy": ["San Felipe"],\
  "Lara": ["Barquisimeto", "Cabudare", "Carora", "Quibor"],\
  "Portuguesa": ["Acarigua", "Araure"],\
  "Zulia": ["Maracaibo", "Lagunillas"],\
  "Anzo\'e1tegui": ["Barcelona", "Anaco", "El Tigre", "Puerto La Cruz", "Lecher\'eda", "Cantaura", "Ciudad Ojeda"],\
  "Bol\'edvar": ["Ciudad Bol\'edvar", "Puerto Ordaz", "San F\'e9lix"],\
  "Monagas": ["Matur\'edn"],\
  "M\'e9rida": ["M\'e9rida"],\
  "T\'e1chira": ["San Crist\'f3bal"],\
  "Trujillo": ["Trujillo"]\
\};\
\
document.addEventListener('DOMContentLoaded', () => \{\
  const estadoSelect = document.getElementById("estado");\
  for (const estado in estadosCiudades) \{\
    const option = document.createElement("option");\
    option.value = estado;\
    option.textContent = estado;\
    estadoSelect.appendChild(option);\
  \}\
\
  document.querySelectorAll('[data-origen]').forEach(btn => \{\
    btn.addEventListener('click', () => seleccionarOrigen(btn.dataset.origen));\
  \});\
  document.querySelectorAll('[data-tipo]').forEach(btn => \{\
    btn.addEventListener('click', () => seleccionarTipo(btn.dataset.tipo));\
  \});\
  actualizarBarra('paso1');\
\});\
\
function actualizarCiudades() \{\
  const estado = document.getElementById("estado").value;\
  const ciudadSelect = document.getElementById("ciudadRegistro");\
  ciudadSelect.innerHTML = '<option value="" disabled selected hidden>Selecciona una ciudad</option>';\
  document.getElementById("retiroOpcional").style.display = 'none';\
  document.getElementById("direccion").value = '';\
  if (estado && estadosCiudades[estado]) \{\
    estadosCiudades[estado].forEach(ciudad => \{\
      const option = document.createElement("option");\
      option.value = ciudad;\
      option.textContent = ciudad;\
      ciudadSelect.appendChild(option);\
    \});\
  \}\
\}\
\
function verificarCaracas() \{\
  const estado = document.getElementById("estado").value;\
  const ciudad = document.getElementById("ciudadRegistro").value;\
  document.getElementById("retiroOpcional").style.display = (estado === "Distrito Capital" && ciudad === "Caracas") ? "block" : "none";\
  if (ciudad !== "Caracas") document.getElementById("direccion").value = "";\
\}\
\
function rellenarDireccionDesdeOficina() \{\
  const tipo = document.getElementById("retirar").value;\
  if (tipo === "oficina") \{\
    document.getElementById("direccion").value = "Oficina Caracas \'96 Av. Ppal Nueva Granada con Av. La L\'ednea, Edif. Riopart";\
  \} else \{\
    document.getElementById("direccion").value = "";\
  \}\
\}\
\
function mostrarTelefonoOpcional() \{\
  document.getElementById('telefonoOpcional').style.display = 'flex';\
  document.getElementById('opcionalContainer').style.display = 'none';\
\}\
\
function ocultarTelefonoOpcional() \{\
  document.getElementById('telefonoOpcional').style.display = 'none';\
  document.getElementById('opcionalContainer').style.display = 'block';\
\}}