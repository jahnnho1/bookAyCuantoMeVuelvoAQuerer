/* empty css                           */
import { _ as __astro_tag_component__, j as Fragment, v as createVNode } from '../astro_sWy1iNKM.mjs';
import { b as $$Image, $ as $$BaseCard, a as $$BaseLayout } from './__CA-sbWSi.mjs';
import './capitulo1_De-qqTNn.mjs';
import 'clsx';

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
    ...props.components
  };
  return createVNode($$BaseLayout, {
    PageID: "home",
    children: createVNode($$BaseCard, {
      title: "home",
      image: "/cap2.webp",
      children: createVNode("div", {
        children: [createVNode(_components.h1, {
          id: "-ay-cuanto-me-vuelvo-a-querer",
          children: "\u{1F9CA} Ay Cuanto Me Vuelvo A Querer"
        }), createVNode("div", {
          class: "bg-blue-100 p-4 rounded-md shadow-md  my-8",
          children: [createVNode("p", {
            class: "text-lg text-black font-bold mb-2",
            children: "\xBFCu\xE1l es el nombre del protagonista?"
          }), createVNode("p", {
            class: "text-black-800 text-black",
            children: " El nombre del protagonista es M\xE1ximo."
          })]
        }), createVNode("div", {
          class: "bg-blue-100 p-4 rounded-md shadow-md my-8",
          children: [createVNode("p", {
            class: "text-lg text-black font-bold mb-2",
            children: "\xBFCu\xE1l es el nombre de la amiga del protagonista?"
          }), createVNode("p", {
            class: "text-gray-800 text-black",
            children: "El nombre de la amiga del protagonista es Soledad."
          })]
        }), createVNode("div", {
          class: "bg-blue-100 p-4 rounded-md shadow-md my-8",
          children: [createVNode("p", {
            class: "text-lg text-black font-bold mb-2",
            children: "\xBFCu\xE1les son algunas caracter\xEDsticas psicol\xF3gicas?"
          }), createVNode("p", {
            class: "text-gray-800 text-black",
            children: "El personaje principal, M\xE1ximo, muestra caracter\xEDsticas psicol\xF3gicas como la valent\xEDa al enfrentar sus propios miedos y la empat\xEDa al intentar ayudar a su amiga."
          })]
        }), createVNode("div", {
          class: "bg-blue-100 p-4 rounded-md shadow-md my-8",
          children: [createVNode("p", {
            class: "text-lg text-black font-bold mb-2",
            children: " \xBFQu\xE9 suceder\xEDa si estuviera de cumplea\xF1os todos los d\xEDas, al igual que el personaje del cuento?"
          }), createVNode("p", {
            class: "text-gray-800 text-black",
            children: "Ser\xEDa genial al principio, con fiestas y regalos cada d\xEDa. Pero despu\xE9s de un tiempo, podr\xEDa ser aburrido y cansado. Adem\xE1s, no ser\xEDa tan especial si siempre estuviera sucediendo."
          })]
        }), createVNode("div", {
          class: "bg-blue-100 p-4 rounded-md shadow-md my-8",
          children: [createVNode("p", {
            class: "text-lg text-black font-bold mb-2",
            children: " \xBFNombre del autor que escribio el libro?"
          }), createVNode("p", {
            class: "text-gray-800 text-black",
            children: " El nombre del autor es Mauricio Paredes."
          })]
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
const url = "";
const file = "/home/clymo/proyectos/lectorLibro/src/pages/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/clymo/proyectos/lectorLibro/src/pages/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
