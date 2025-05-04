
<script>
document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    #faq-button {
      position: fixed;
      bottom: 25px;
      right: 25px;
      background-color: transparent;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
      padding: 0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      animation: pulse 2s infinite;
      z-index: 99999;
    }
    #faq-button img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .faq-tooltip {
      position: fixed;
      bottom: 95px;
      right: 95px;
      background: #2563eb;
      color: white;
      padding: 10px 15px;
      border-radius: 20px;
      font-size: 14px;
      z-index: 100000;
      animation: fadeIn 0.5s ease;
      display: none;
      align-items: center;
      gap: 10px;
      max-width: 240px;
    }
    .faq-tooltip button {
      background: transparent;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    #faq-popup {
      display: none;
      position: fixed;
      bottom: 100px;
      right: 25px;
      width: 360px;
      max-height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      overflow-y: auto;
      z-index: 99998;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      animation: fadeIn 0.4s ease-in-out;
    }
    .faq-header {
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 15px 0;
      border-bottom: 1px solid #eee;
    }
    #faq-close {
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
      margin-left: 10px;
    }
    .faq-search {
      width: calc(100% - 30px);
      margin: 10px 15px;
      padding: 8px 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
    }
    .faq-last {
      font-size: 13px;
      padding: 5px 15px;
      color: #555;
      font-style: italic;
    }
    .faq-item {
      padding: 15px;
      border-bottom: 1px solid #eee;
    }
    .faq-question {
      font-weight: bold;
      margin-bottom: 8px;
      font-size: 16px;
      color: #111827;
    }
    .faq-answer {
      color: #374151;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .faq-footer {
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #777;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes beat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.id = "faq-button";
  btn.title = "Preguntas frecuentes";
  btn.innerHTML = '<img src="https://i.ibb.co/39m45sNJ/assets-task-01jt2jqgsrfpya8yrth41th4bx-1745990983-img-0.webp">';
  document.body.appendChild(btn);

  const tooltip = document.createElement("div");
  tooltip.className = "faq-tooltip";
  tooltip.innerHTML = '¿Tienes preguntas? <button id="faq-open" style="margin-left: auto;">Abrir</button> <button id="close-tooltip">×</button>';
  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.style.display = "flex";
    setTimeout(() => tooltip.style.display = "none", 15000);
  }, 10000);

  document.addEventListener("click", function (e) {
    if (e.target.id === "close-tooltip") tooltip.remove();
  });

  const popup = document.createElement("div");
  popup.id = "faq-popup";
  popup.innerHTML = `
    <div class="faq-header">
      <a href="/"><img src="https://i.ibb.co/67q1GnZq/Hola-digital-letras-Photoroom-trans.png" alt="Hola Digital" style="height: 26px; margin-right: auto;"></a>
      <strong style="flex-grow: 1; text-align: center;">Preguntas frecuentes</strong>
      <a href="https://api.whatsapp.com/send/?phone=526681317965&text&type=phone_number&app_absent=0" target="_blank">
<a href="https://api.whatsapp.com/send/?phone=526681317965&text&type=phone_number&app_absent=0" target="_blank" title="Escríbeme por WhatsApp">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
       alt="WhatsApp"
       style="height: 34px; margin-left: 20px; animation: beat 1.2s infinite; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.25);">
</a>
<button id="faq-close">×</button>
    </div>
    <input type="text" placeholder="Buscar..." class="faq-search" id="faq-search">
    
    <div id="faq-list"></div>
    <div class="faq-footer">Herramienta creada por "Hola Digital"</div>
  `;
  document.body.appendChild(popup);

  const faqs = [

  {'q': '¿Qué tipo de chatbot puedo integrar en mi sitio?', 'a': 'Hola Digital ofrece distintos niveles de chatbot, desde versiones esenciales hasta opciones con mayor inteligencia y personalización. Puedes conocer el plan esencial aquí: <a href="https://chatbots.holadigital.online/esencial" target="_blank">https://chatbots.holadigital.online/esencial</a>'},
  {'q': '¿Hola Digital ofrece soporte técnico después de publicar el sitio?', 'a': 'Sí. Todos los planes incluyen soporte continuo para ajustes menores, mantenimiento técnico, copias de respaldo y mejoras según el avance de tu proyecto.'},
  {'q': '¿Qué diferencia a Hola Digital de otras agencias?', 'a': 'Hola Digital ofrece un trato directo, tiempos de entrega rápidos y personalización completa, todo sin procesos complicados ni intermediarios. La prioridad es lograr resultados reales, no solo entregar un sitio web bonito.'},
  {'q': '¿Qué tipo de empresas o personas pueden contratar Hola Digital?', 'a': 'Cualquier persona, negocio o emprendimiento que necesite presencia en línea puede beneficiarse. Se trabaja tanto con profesionales independientes como con pymes y marcas que desean mejorar su imagen digital.'},
  {'q': '¿Puedo actualizar mi sitio más adelante si mi negocio crece?', 'a': 'Sí. Tu sitio se puede ampliar en cualquier momento: agregar secciones, herramientas, servicios nuevos, o incluso rediseñar completamente si lo deseas.'},
  {'q': '¿Hola Digital también ofrece correo personalizado como contacto@miempresa.com?', 'a': 'Sí. Todos los planes incluyen cuentas de correo profesional vinculadas a tu dominio para que tu negocio proyecte una imagen confiable.'},
  {'q': '¿Qué pasa si necesito una herramienta específica que no está incluida?', 'a': 'Puedes solicitar herramientas adicionales según las necesidades de tu sitio. Se evalúa cada caso para ofrecer una solución personalizada y accesible.'},
  {'q': '¿Puedo pedir cambios en mi sitio después de publicado?', 'a': 'Sí. Puedes solicitar ajustes en contenido, imágenes, secciones o diseño general. Algunos planes incluso te permiten hacer cambios tú mismo desde un panel intuitivo.'},
  {'q': '¿Qué herramientas puedo conservar si solo quiero pagar $600 MXN al mes?', 'a': 'Puedes elegir conservar hasta 3 herramientas, como mapas interactivos, redes sociales en vivo, formularios personalizados, chatbot esencial, encuestas y otras. Tú decides cuáles se quedan activas según lo que más necesites.'},
  {'q': '¿Hola Digital ofrece funciones para vender productos en línea?', 'a': 'Sí. Puedes integrar una tienda digital completa, catálogos, medios de pago y sistemas de pedidos para comenzar a vender en línea desde tu sitio.'},
  {'q': '¿Qué diferencia hay entre el chatbot esencial y el básico?', 'a': 'El plan esencial responde preguntas frecuentes y ofrece respuestas simples automatizadas. El plan básico es más inteligente: puede recordar contexto, ofrecer recomendaciones, e incluso tener una conversación más fluida con tus clientes.'},
  {'q': '¿Es posible tener animaciones o efectos especiales en mi sitio?', 'a': 'Sí. Se pueden agregar transiciones suaves, efectos de entrada, elementos flotantes, avisos animados y mucho más, siempre que no afecten la velocidad de carga.'},
  {'q': '¿Cuánto cuesta agregar herramientas extra al plan de $600 MXN?', 'a': 'Cada herramienta adicional tiene un costo de $135 MXN al mes. Si deseas herramientas más avanzadas, se te dará una cotización personalizada según tu caso.'},
  {'q': '¿El sitio web se puede ver bien en cualquier celular o computadora?', 'a': 'Sí. Todos los sitios son adaptables y están optimizados para que funcionen perfectamente en móviles, tablets y computadoras de escritorio.'},
  {'q': '¿Puedo solicitar que mi sitio tenga un aviso de privacidad o términos y condiciones?', 'a': 'Sí. Se pueden incluir páginas legales como aviso de privacidad, política de cookies o términos y condiciones, ya sea visibles en el menú o en un apartado secundario.'},
  {'q': '¿El sitio puede mostrar automáticamente mensajes emergentes o promociones?', 'a': 'Sí. Puedes activar herramientas que muestren mensajes personalizados como promociones, anuncios o avisos importantes para captar la atención de tus visitantes.'},
  {'q': '¿Puedo tener un formulario para recibir correos o mensajes de clientes?', 'a': 'Sí. Se pueden integrar formularios de contacto conectados a tu correo o base de datos, y también automatizar respuestas si lo deseas.'},
  {'q': '¿Mi sitio podrá mostrar mi ubicación con un mapa interactivo?', 'a': 'Sí. Se puede mostrar un mapa que señale tu ubicación exacta, útil para negocios físicos, consultorios, oficinas, puntos de entrega, entre otros.'},
  {'q': '¿Hola Digital puede ayudarme a elegir el mejor nombre para mi dominio?', 'a': 'Sí. Si aún no tienes dominio, se te puede orientar para encontrar uno corto, claro y profesional que represente bien tu marca.'},
{'q': '¿Qué es Hola Digital y qué servicios ofrece?', 'a': 'Hola Digital es un servicio profesional enfocado en el desarrollo de sitios web personalizados, rápidos y eficientes. También ofrece herramientas interactivas como chatbots, encuestas, formularios, reseñas, mapas y más.'},
  {'q': '¿Qué tipo de chatbot puedo integrar en mi sitio?', 'a': 'Hola Digital ofrece distintos niveles de chatbot, desde versiones esenciales hasta opciones con mayor inteligencia y personalización. Puedes conocer el plan esencial aquí: <a href="https://chatbots.holadigital.online/esencial" target="_blank">https://chatbots.holadigital.online/esencial</a>'},
  {'q': '¿Hola Digital ofrece ayuda con marketing digital?', 'a': 'Sí. Aunque el enfoque principal es el diseño web, también se pueden integrar soluciones de contacto directo, branding visual, e incluso se está desarrollando una sección especializada en estrategias de marketing digital.'},
  {'q': '¿Qué pasa si ya tengo un dominio?', 'a': 'Puedes usar tu dominio actual sin problema. Solo necesitas acceso al panel de DNS para configurarlo, o bien, puedes transferirlo si lo prefieres.'},
  {'q': '¿Puedo contratar solo el chatbot sin una página web?', 'a': 'Sí. Es posible integrar un chatbot en cualquier sitio, incluso si no fue creado por Hola Digital. Solo se requiere insertar un pequeño fragmento de código.'},
  {'q': '¿Dónde puedo ver los planes?', 'a': "Los planes están disponibles en <a href='https://planes.holadigital.online' target='_blank'>https://planes.holadigital.online</a>"},
  {'q': '¿En cuánto tiempo estará lista la página web?', 'a': 'Depende de la complejidad del proyecto, pero normalmente se publica primero la página de inicio junto con otra sección en pocos días, y se continúa actualizando.'},
  {'q': '¿Dónde te puedo contactar?', 'a': "A través de mi WhatsApp, <a href='https://api.whatsapp.com/send/?phone=526681317965&text&type=phone_number&app_absent=0' target='_blank'>da click aquí</a>."},
  {'q': '¿Es posible revisar trabajos realizados previamente?', 'a': "Sí, se puede acceder a sitios en administración desde <a href='https://holadigital.online/sitiosenadministracion' target='_blank'>https://holadigital.online/sitiosenadministracion</a>"},
  {'q': '¿El chatbot está incluido sin costo?', 'a': 'Durante los primeros 3 meses el chatbot se incluye sin costo. Al finalizar ese periodo, puedes conservar 3 herramientas dentro del plan mensual de $600 MXN. Si decides incluir el chatbot como una de ellas, tendrás la versión esencial sin costo adicional, o puedes optar por la versión básica pagando un total de $735 MXN al mes. Si no incluyes el chatbot entre tus 3 herramientas, puedes integrarlo como extra: $135 MXN para la versión esencial (total $735 MXN) o $200 MXN para la versión básica (total $800 MXN).'},
  {'q': '¿Qué significa contar con SSL gratis y protección contra ataques DDoS?', 'a': 'El sitio estará protegido mediante conexión segura (HTTPS), lo que resguarda la información de los visitantes. También estará blindado frente a intentos de bloqueo o saturación por ataques digitales.'},
  {'q': '¿Cómo se confirma que el sitio será creado tras realizar el pago?', 'a': "Primero se solicita únicamente el pago del dominio .com. Una vez recibido, el sitio se activa con un aviso de 'Sitio en construcción por Hola Digital', además de mostrar enlaces a redes sociales, número de contacto y WhatsApp."},
  {'q': '¿Qué sucede si me atraso en un pago?', 'a': 'Si hay una razón válida, el sitio puede mantenerse activo. Si no hay contacto, se suspende temporalmente hasta regularizar el servicio.'},
  {'q': '¿Se cobran intereses si me atraso?', 'a': 'Se aplica un cargo de 2% de interés por cada día de atraso.'},
  {'q': '¿Puedo modificar el contenido de mi sitio después?', 'a': 'Sí, se pueden solicitar cambios. Algunos planes también permiten editar directamente.'},
  {'q': '¿El sitio funcionará en celulares?', 'a': 'Sí, todos los sitios son responsivos y se ven bien en computadoras, móviles y tablets.'},
  {'q': '¿Puedo agregar una tienda en línea?', 'a': 'Sí. Los planes avanzados incluyen eCommerce e integración con plugins como Amazon Afiliados.'},
  {'q': '¿Incluye posicionamiento en Google?', 'a': 'Sí. El sitio se optimiza para buscadores y se registra en Google Maps para mayor visibilidad.'},
  {'q': '¿Puedo tener correo con mi dominio?', 'a': 'Sí. Los planes incluyen correos personalizados como contacto@tusitio.com para una imagen más profesional.'},
  {'q': '¿Hay límite de secciones en el sitio?', 'a': 'En sí, depende del plan contratado pero no hay un límite fijo.'},
  {'q': '¿Puedo recibir pagos en línea?', 'a': 'Sí, se pueden integrar distintos métodos de pago como tarjetas, transferencias y plataformas digitales.'},
  {'q': '¿Tendré acceso a estadísticas del sitio?', 'a': 'Sí. Se puede integrar Google Analytics u otras herramientas para ver visitas, comportamiento y más.'},
  {'q': '¿Cuánto tiempo toma desarrollar el sitio completo?', 'a': 'El tiempo promedio es de 3 a 7 días hábiles, dependiendo de la disponibilidad del contenido necesario.'},
  {'q': '¿Qué formas de pago se aceptan?', 'a': 'Se reciben transferencias bancarias, tarjetas de crédito y plataformas digitales seleccionadas.'},
  {'q': '¿Se puede integrar un blog?', 'a': 'Sí, es posible incluir una sección de artículos o novedades que se puede actualizar periódicamente.'},
  {'q': '¿El plan mensual incluye mantenimiento?', 'a': 'Sí, se cubren ajustes básicos, mejoras técnicas, seguridad y copias de respaldo dentro del plan activo.'},
  {'q': '¿Hay permanencia forzosa o contrato?', 'a': 'No se requiere contrato. La suscripción puede cancelarse en cualquier momento con previo aviso.'},
  {'q': '¿Puede cambiarse de plan después de contratado?', 'a': 'Sí, el cambio de plan se puede realizar en cualquier momento sin restricción.'},

    {'q': '¿Puedo solicitar cambios después de que el sitio ya esté publicado?', 'a': 'Sí. Todos los planes permiten solicitar ajustes posteriores. Algunos planes incluso permiten realizar cambios directamente desde el panel de administración.'},
    {'q': '¿Qué pasa si ya tengo una identidad visual o logotipo?', 'a': 'Se puede trabajar perfectamente con tu identidad ya existente. Adaptamos el diseño del sitio web para que mantenga coherencia visual con tu logotipo, colores y estilo de marca.'},
    {'q': '¿Qué tipo de herramientas se pueden incluir en mi sitio?', 'a': 'Podemos integrar herramientas como encuestas, reseñas, botones de contacto, mapas interactivos, formularios personalizados, agendas, galerías y más. Todo dependerá del plan contratado y de las necesidades del proyecto.'},
    {'q': '¿Se puede enlazar mi sitio con redes sociales?', 'a': 'Sí. Podemos agregar accesos directos a tus redes sociales y hasta mostrar publicaciones en vivo desde Instagram, Facebook o TikTok dentro del sitio.'},
    {'q': '¿El sitio está optimizado para que se vea bien en celulares?', 'a': 'Sí. Todos los sitios desarrollados por Hola Digital son completamente responsivos. Esto significa que se adaptan automáticamente a celulares, tablets y computadoras.'},
    {'q': '¿Qué incluye el mantenimiento mensual?', 'a': 'El mantenimiento incluye actualizaciones técnicas, respaldo de seguridad, monitoreo de disponibilidad y cambios menores en el contenido, según el plan contratado.'},

    {'q': '¿Puedo ver avances antes de que el sitio esté terminado?', 'a': 'Sí. Puedes revisar avances parciales para asegurarte de que todo va alineado con tu visión. Se te compartirá una vista previa privada antes de la publicación final.'},
    {'q': '¿Qué pasa si no tengo contenido para el sitio (fotos, texto)?', 'a': 'No te preocupes. Podemos ayudarte a redactar textos profesionales y utilizar imágenes de alta calidad libres de derechos para que tu sitio luzca completo y funcional desde el inicio.'},
    {'q': '¿Es posible integrar un sistema de reservas o citas?', 'a': 'Sí. Podemos incorporar un calendario interactivo para agendar citas, recibir notificaciones por correo y sincronizar con herramientas externas como Google Calendar.'},
    {'q': '¿Puedo usar mi sitio web como portafolio profesional?', 'a': 'Claro. Muchos clientes usan su sitio como carta de presentación digital. Podemos destacar tus trabajos, servicios, testimonios y enlaces de contacto en un formato atractivo.'},
    {'q': '¿Hola Digital puede ayudarme a migrar mi sitio actual?', 'a': 'Sí. Podemos ayudarte a trasladar tu sitio desde otro proveedor, optimizar su contenido y rediseñarlo para que sea más moderno, funcional y seguro.'}




];


  function renderFAQs(filter = "") {
    const listContainer = document.getElementById("faq-list");
    const keyword = filter.toLowerCase();
    const filtered = faqs.filter(f => f.q.toLowerCase().includes(keyword));
    localStorage.setItem("ultima_busqueda", filter);
    if (filtered.length > 0) {
      localStorage.setItem("ultima_pregunta", filtered[0].q);
    }

    listContainer.innerHTML = filtered.map(f => `
      <div class="faq-item">
        <div class="faq-question">${highlight(f.q, filter)}</div>
        <div class="faq-answer">${highlight(f.a, filter)}</div>
      </div>
    `).join('') || "<div style='padding:15px;'>No se encontraron coincidencias.</div>";

    const ultima = localStorage.getItem("ultima_pregunta");
    if (ultima) {
      
    }
  }

  function highlight(text, keyword) {
    if (!keyword) return text;
    const pattern = new RegExp(`(${keyword})`, 'gi');
    return text.replace(pattern, `<span style="background-color: #e0f2fe; color: #0c4a6e; font-weight:bold;">$1</span>`);
  }

  document.getElementById("faq-open").onclick = () => {
    document.getElementById("faq-popup").style.display = "block";
    document.querySelector(".faq-tooltip")?.remove();
    renderFAQs();
  };

  document.getElementById("faq-button").addEventListener("click", () => {
    document.getElementById("faq-popup").style.display = "block";
    document.querySelector(".faq-tooltip")?.remove();
    renderFAQs();
  });

  document.getElementById("faq-close").addEventListener("click", () => {
    document.getElementById("faq-popup").style.display = "none";
  });

  document.getElementById("faq-search").addEventListener("input", e => {
    renderFAQs(e.target.value);
  });

  window.addEventListener("click", function (e) {
    const popup = document.getElementById("faq-popup");
    const btn = document.getElementById("faq-button");
    if (!popup.contains(e.target) && !btn.contains(e.target)) {
      popup.style.display = "none";
    }
  });
});
</script>
