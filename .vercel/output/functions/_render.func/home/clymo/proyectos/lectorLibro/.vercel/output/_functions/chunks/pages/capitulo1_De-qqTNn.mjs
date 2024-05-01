/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, n as renderSlot, h as addAttribute, i as renderComponent, _ as __astro_tag_component__, j as Fragment, v as createVNode } from '../astro_sWy1iNKM.mjs';
import { b as $$Image, $ as $$BaseCard, a as $$BaseLayout } from './__CA-sbWSi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$5 = createAstro("https://www.github.com/jahnnho");
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Error;
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-error"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/blog/error.astro", void 0);

const $$Astro$4 = createAstro("https://www.github.com/jahnnho");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-info"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/blog/info.astro", void 0);

const $$Astro$3 = createAstro("https://www.github.com/jahnnho");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-success"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/blog/success.astro", void 0);

const $$Astro$2 = createAstro("https://www.github.com/jahnnho");
const $$Warning = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Warning;
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-warning"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/blog/warning.astro", void 0);

const $$Astro$1 = createAstro("https://www.github.com/jahnnho");
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { time, check = false, left = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(!left && "timeline-start" || left && "timeline-end", "class")}>${time}</div> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${addAttribute(!check && "w-5 h-5" || check && "w-5 h-5 text-primary", "class")}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg> </div> <div${addAttribute(!left && "timeline-end timeline-box" || left && "timeline-start timeline-box", "class")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/page/TimeLine.astro", void 0);

const $$Astro = createAstro("https://www.github.com/jahnnho");
const $$FriendCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FriendCard;
  const { title, img, desc, url, badge, target = "_blank" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "width": 100, "height": 100, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h1 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <p class="py-1 text-1xl">${desc}</p> </div> </div> </a> </div>`;
}, "/home/clymo/proyectos/lectorLibro/src/components/page/FriendCard.astro", void 0);

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "-ay-cuanto-me-vuelvo-a-querer",
    "text": "\u{1F9CA} Ay Cuanto Me Vuelvo A Querer"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode($$BaseLayout, {
    PageID: "capitulo1",
    children: createVNode($$BaseCard, {
      title: "capitulo1",
      image: "/home.webp",
      children: createVNode("div", {
        children: [createVNode(_components.h1, {
          id: "-ay-cuanto-me-vuelvo-a-querer",
          children: "\u{1F9CA} Ay Cuanto Me Vuelvo A Querer"
        }), createVNode("div", {
          className: "flex justify-center",
          children: createVNode("audio", {
            controls: true,
            className: "w-64",
            children: [createVNode("source", {
              src: "capitulo1.ogg",
              type: "audio/mpeg"
            }), createVNode(_components.p, {
              children: "Your browser does not support the audio element."
            })]
          })
        }), createVNode("p", {
          class: "text-lg font-bold mb-4",
          children: createVNode(_components.p, {
            children: ["Saber mucho puede llevarte al \xE9xito, ", createVNode("em", {
              children: "pero ser sabio te llevar\xE1 a la felicidad."
            })]
          })
        }), createVNode("h2", {
          class: "text-2xl font-bold mb-2",
          children: "Cap\xEDtulo 1. Yo, de nuevo"
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "\xA1Ay, cu\xE1nto me quiero! Para ser sincero\u2026 Para ser sincero\u2026 \xA1Para ser sincero, no lo s\xE9! Antes estaba seguro de que me amaba, me adoraba, \xA1me idolatraba! Pero ya no m\xE1s. Ahora hasta hay\r\nmomentos en los que me canso de m\xED. Es verdad, lo prometo. \xA1Es que siempre soy el mismo!"
          })
        }), createVNode("p", {
          class: "mb-4",
          children: "A veces me gustar\xEDa ser alguien diferente y no la misma persona todo el tiempo. \xA1Qu\xE9 aburrido! Ya no quiero ser m\xE1s yo\u2026 Pero entonces,"
        }), createVNode("p", {
          class: "mb-4",
          children: "\xBFqui\xE9n ser\xEDa? \xBFT\xFA? \xBF\xC9l, nosotros, vosotros, ellos\u201D?"
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Bueno, eso no lo s\xE9. La pregunta importante ac\xE1 es: \xBFme quiero? \xBFS\xED o no? \xBFEstoy seguro? \xBFS\xED o no? \xA1Estoy confundido! \xA1Qu\xE9 terrible! \xA1Ser o no ser, quererse o no quererse, esa es la cuesti\xF3n!\r\n\xBFMe amo o me odio? \xBFO las dos cosas al mismo tiempo? \xA1No puede ser, eso s\xED que ser\xEDa raro! Sentir cari\xF1o y desprecio a la vez por uno mismo. \xA1Qu\xE9 complicaci\xF3n! Esto es muy dif\xEDcil de entender.\r\nY eso que yo entiendo muchas cosas. Por ejemplo, s\xE9 que un se\xF1or muy antiguo, que se llamaba S\xF3crates, dijo: \u201CCon\xF3cete a ti mismo\u201D. Yo me conoc\xED y me ca\xED tan bien que me hice mi mejor amigo."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Pero esos eran otros tiempos, ahora he descubierto que quererse a uno mismo es un trabajo muy dif\xEDcil. Hay cosas que s\xED se pueden hacer, como aplaudirme por ser tan fabuloso. Pero hay otras\r\nque no, por ejemplo, cuando trato de darme besos y no logro alcanzar mi mejilla con los labios. Solo consigo parecer un elefante con la trompa chueca."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Sin ir m\xE1s lejos, hoy en la ma\xF1ana, despu\xE9s de gastar tanto tiempo en pensar si me quer\xEDa o no, me enoj\xE9. \xBFCon qui\xE9n? \xA1Conmigo, por supuesto! Estaba tan furioso que fui al espejo y me hice\r\nmuecas, me saqu\xE9 la lengua y, por si fuera poco, me tir\xE9 las orejas para verme espantoso y asustarme mucho. Pero claro, ese otro yo es simplemente mi reflejo en el espejo y me copia todo lo\r\nque hago. Sin embargo, hay una diferencia: \xE9l tiene que quedarse dentro del espejo, en cambio yo puedo ir a muchas partes. Aunque quiz\xE1s dentro del espejo haya un mundo que yo no conozco y \xE9l\r\ns\xED\u2026 Como castigo por pelear conmigo mismo decid\xED encerrarme en el ropero. \xA1Fue imposible! Primero me par\xE9 dentro, pero nadie cerraba la puerta por fuera. Despu\xE9s sal\xED y empuj\xE9 la puerta con\r\nfuerza. Me gritaba a m\xED mismo: \xAB\xA1Sufre, sufre!\xBB, pero no sufr\xEDa nada, porque en realidad no estaba encerrado. En vez de sufrir me dio m\xE1s y m\xE1s risa. Luego me quise esconder de m\xED mismo. Eleg\xED\r\nel lugar perfecto: debajo de la cama, All\xED nunca me encontrar\xEDa. Cerr\xE9 los ojos, cont\xE9 hasta diez, los abr\xED de nuevo\u2026 \xA1y ah\xED estaba! Me descubr\xED inmediatamente. \xA1Qu\xE9 fastidio! A veces es muy\r\nmalo ser tan bueno para jugar a las escondidas."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Despu\xE9s me hice la ley del hielo y no me habl\xE9 por un mont\xF3n de tiempo. Creo que fueron como veinti\xFAn segundos. Pero no resist\xED m\xE1s, porque necesitaba hablar conmigo para contarme el gran\r\nproblema que ten\xEDa, es decir, mi falta de amor por m\xED mismo. Adem\xE1s, si resulta que no soy mi amigo, por lo menos no quiero convertirme en mi enemigo. \xA1Ser\xEDa terrible! \xA1Yo, enemigo m\xEDo! Me\r\nhar\xEDa la vida imposible. Creo que nadie ser\xEDa capaz de soportar a alguien como yo, mucho menos yo mismo."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Decid\xED salir al jard\xEDn para pensar mejor estos temas con mi superdotado cerebro y mi humilde coraz\xF3n. Me sent\xEDa muy deprimido por mi crisis de identidad. Camin\xE9 por el pasto, paso tras paso,\r\nlentamente, hasta llegar a mi \xE1rbol, pero no tuve fuerzas para subir, as\xED que me qued\xE9 apoyado en \xE9l, sujet\xE1ndome del tronco con los brazos abiertos para no caerme al suelo de tan triste que\r\nestaba."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014\xBFEst\xE1s abrazando al \xE1rbol? \u2014pregunt\xF3 la voz de esa ni\xF1a que yo conoc\xEDa. Era mi vecina, que a\xFAn no me dec\xEDa su nombre."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014\xBFAbrazando al \xE1rbol? \u2014le pregunt\xE9 yo de vuelta, muy extra\xF1ado. \xBFPor qu\xE9 querr\xEDa abrazar a un \xE1rbol? Mejor me abrazo a m\xED mismo y listo."
        }), createVNode("p", {
          class: "mb-4",
          children: "Ella trat\xF3 de ordenar su pelo, que inmediatamente le desobedeci\xF3 y volvi\xF3 a quedar igual de desordenado que al principio."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014No \u2014me dijo sonriendo\u2014. Se abrazan los \xE1rboles para recibir su energ\xEDa. Es el poder c\xF3smico de la naturaleza, como dice mi mam\xE1."
        }), createVNode("p", {
          class: "mb-4",
          children: "Yo me ech\xE9 a re\xEDr a carcajadas."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014 \xA1T\xFA eres muy c\xF3smica, me haces re\xEDr! \u2014exclam\xE9, sin soltar el tronco, para que no se fuera a caer el \xE1rbol (no yo)."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014No comprendes \u2014me explic\xF3 ella\u2014 , no dije \u201Cc\xF3mico\u201D, que quiere decir divertido, sino \u201Cc\xF3smico\u201D, que significa que es del cosmos, del universo."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014 Ahhh, est\xE1 bien \u2014 le dije para que se quedara tranquila. Esa ni\xF1a habla muy raro y, m\xE1s encima, pretende que uno entienda las cosas extra\xF1as que dice."
        }), createVNode("p", {
          class: "mb-4",
          children: "Ella abraz\xF3 el \xE1rbol y cerr\xF3 los ojos."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014Mira, conc\xE9ntrate como yo y pronto vas a sentir un hormigueo en el cuerpo."
        }), createVNode("p", {
          class: "mb-4",
          children: createVNode(_components.p, {
            children: "Como soy muy educado, le hice caso. \xA1Y fue incre\xEDble! Pronto sent\xED un peque\xF1o hormigueo. Despu\xE9s un hormigueo m\xE1s grande. \xA1Y despu\xE9s una picaz\xF3n terrible! Abr\xED los ojos y un mont\xF3n de hormigas\r\nhab\xEDan caminado desde el tronco y se hab\xEDan metido por debajo de mi ropa."
          })
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014\xA1Aaaayyy, mam\xE1! \u2014grit\xE9 con todas mis fuerzas."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014Ups \u2014 dijo ella mientras yo corr\xEDa dando vueltas, rasc\xE1ndome de pies a cabeza."
        }), createVNode("p", {
          class: "mb-4",
          children: "Al final logr\xE9 sacudirme las hormigas y qued\xE9 agotado."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014Creo que esto de la energ\xEDa c\xF3smica no es para m\xED."
        }), createVNode("p", {
          class: "mb-4",
          children: "\u2014Bueno \u2014dijo ella, sonriendo\u2014, fue c\xF3smica y tambi\xE9n un poco c\xF3mica."
        }), createVNode("p", {
          children: "Y los dos nos re\xEDmos hasta caernos sobre el pasto. Por suerte, el \xE1rbol se qued\xF3 en su lugar y no nos cay\xF3 encima."
        })]
      })
    })
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/capitulo1";
const file = "/home/clymo/proyectos/lectorLibro/src/pages/capitulo1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/clymo/proyectos/lectorLibro/src/pages/capitulo1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
