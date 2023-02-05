/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderHead, d as renderSlot, e as renderComponent, f as addAttribute } from './chunk.34e0a9be.js';
import 'html-escaper';

const $$Astro$8 = createAstro("https://williansmedelice.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-zinc-900 py-10 mt-4">
  <div class="container mx-auto flex flex-col md:flex-row justify-evenly text-center md:text-left gap-4">
    <div>
      <h4 class="font-bold text-xl">Site Map</h4>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/pricing">Pricing</a>
    </div>
    <div>
      <h4 class="font-bold text-xl">Site Map</h4>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
    </div>
    <div>
      <h4 class="font-bold text-xl">SocialLinks</h4>
      <a href="/">Facebook</a>
      <a href="/about">Instagram</a>
      <a href="/pricing">Twitter</a>
      <a href="/pricing">TikTok</a>
    </div>
  </div>
</footer>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/Footer.astro");

const $$Astro$7 = createAstro("https://williansmedelice.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astro Landing - ${title}</title>
  ${renderHead($$result)}</head>
  <body>
    <main class="mx-auto container md:pt-10">
      ${renderSlot($$result, $$slots["default"])}
      ${renderComponent($$result, "Footer", $$Footer, {})}
    </main>
  </body></html>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/layouts/Layout.astro");

const $$Astro$6 = createAstro("https://williansmedelice.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<header class="bg-zinc-900 flex flex-col md:flex-row p-20 gap-3 text-center md:text-left rounded-xl">
  <div>
    <h1 class="text-5xl font-bold pb-2">Protect Your Password</h1>
    <p class="my-4 text-2xl">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, debitis?
    </p>
    <button class="bg-indigo-500 px-3 py-2 hover:bg-indigo-400">Start Now</button>
  </div>
  <img src="images/fingerprint.svg" alt="" class="w-80">
</header>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/landing/Hero.astro");

const $$Astro$5 = createAstro("https://williansmedelice.github.io");
const $$More = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$More;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex flex-col py-10 md:flex-row md:p-20 gap-y-10">
  <div class="flex-1 grid grid-cols-2 gap-4">
    <div class="text-center">
      <img src="favicon.svg" class="w-20 m-auto">
      <p class="mt-4">Dev Managment</p>
    </div>
    <div class="text-center">
      <img src="favicon.svg" class="w-20 m-auto">
      <p class="mt-4">Lorem, ipsum.</p>
    </div>
    <div class="text-center">
      <img src="favicon.svg" class="w-20 m-auto">
      <p class="mt-4">Dev Managment</p>
    </div>
    <div class="text-center">
      <img src="favicon.svg" class="w-20 m-auto">
      <p class="mt-4">Dev Managment</p>
    </div>
  </div>
  <div class="flex-1 flex flex-col gap-y-10 text-center">
    <h2 class="text-5xl font-bold">Lorem ipsum dolor sit.</h2>
    <p class="text-3xl text-zinc-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
      reprehenderit!
    </p>
  </div>
</section>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/landing/More.astro");

const features = [
	{
		title: "Encrypted",
		description: "Your data is encrypted and stored in a secure database"
	},
	{
		title: "Open Source",
		description: "Your data is encrypted and stored in a secure database"
	},
	{
		title: "Free",
		description: "Your data is encrypted and stored in a secure database"
	},
	{
		title: "Fast",
		description: "Your data is encrypted and stored in a secure database"
	},
	{
		title: "Secure",
		description: "Your data is encrypted and stored in a secure database"
	},
	{
		title: "Cross Platform",
		description: "Your data is encrypted and stored in a secure database"
	}
];

const $$Astro$4 = createAstro("https://williansmedelice.github.io");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="text-center font-bold text-5xl mt-10">Features</h1>
<div class="grid md:grid-cols-3 gap-4 p-4">
  ${features.map((feature) => renderTemplate`<div class="bg-slate-800 p-10 rounded-xl">
        <h2 class="text-2xl font-bold my-4">${feature.title}</h2>
        <p>${feature.description}</p>
      </div>`)}
</div>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/landing/Features.astro");

const $$Astro$3 = createAstro("https://williansmedelice.github.io");
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${maybeRenderHead($$result)}<section class="bg-zinc-900 p-20 rounded-xl my-4 text-center">
  <h2 class="text-5xl font-bold my-5">About Us</h2>
  <p class="text-zinc-300">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iste aliquid
    autem nostrum ipsam eos maxime ex deleniti in modi sit obcaecati cupiditate
    alias perferendis cumque eligendi, fugit expedita eum!
  </p>
</section>`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/landing/About.astro");

const projects = [
	{
		title: "Project 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi reprehenderit fuga, tenetur maiores minima quasi distinctio necessitatibus placeat laborum, architecto voluptatum labore debitis minus amet magnam quam. Optio illo id in, nihil suscipit facilis facere omnis? Officia accusantium exercitationem labore accusamus nostrum velit incidunt voluptas laborum fuga. Necessitatibus, architecto.",
		image: "images/fingerprint.svg"
	},
	{
		title: "Farm Land 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi reprehenderit fuga, tenetur maiores minima quasi distinctio necessitatibus placeat laborum, architecto voluptatum labore debitis minus amet magnam quam. Optio illo id in, nihil suscipit facilis facere omnis? Officia accusantium exercitationem labore accusamus nostrum velit incidunt voluptas laborum fuga. Necessitatibus, architecto.",
		image: "images/fingerprint.svg"
	},
	{
		title: "Farm Land 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi reprehenderit fuga, tenetur maiores minima quasi distinctio necessitatibus placeat laborum, architecto voluptatum labore debitis minus amet magnam quam. Optio illo id in, nihil suscipit facilis facere omnis? Officia accusantium exercitationem labore accusamus nostrum velit incidunt voluptas laborum fuga. Necessitatibus, architecto.",
		image: "images/fingerprint.svg"
	},
	{
		title: "Farm Land 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi reprehenderit fuga, tenetur maiores minima quasi distinctio necessitatibus placeat laborum, architecto voluptatum labore debitis minus amet magnam quam. Optio illo id in, nihil suscipit facilis facere omnis? Officia accusantium exercitationem labore accusamus nostrum velit incidunt voluptas laborum fuga. Necessitatibus, architecto.",
		image: "images/fingerprint.svg"
	}
];

const $$Astro$2 = createAstro("https://williansmedelice.github.io");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead($$result)}<h2 class="font-bold text-5xl my-8 text-center">Projects</h2>
${projects.map((project) => renderTemplate`<div class="flex flex-col md:flex-row mb-2 text-center md:text-left">
      <div class="flex-1 p-4">
        <h2 class="font-bold text-2xl my-4">${project.title}</h2>
        <p class="my-2">${project.description}</p>
        <button class="bg-indigo-500 px-3 py-2 hover:bg-indigo-400">
          More info
        </button>
      </div>
      <div class="flex-1">
        <img${addAttribute(project.image, "src")} class="w-72 m-auto">
      </div>
    </div>`)}`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/components/landing/Projects.astro");

const $$Astro$1 = createAstro("https://williansmedelice.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenidos a mi sitio" }, { "default": () => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "More", $$More, {})}${renderComponent($$result, "Features", $$Features, {})}${renderComponent($$result, "About", $$About$1, {})}${renderComponent($$result, "Projects", $$Projects, {})}` })}`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/pages/index.astro");

const $$file$1 = "/home/williansmedelice/Escritorio/astro-landing-page/src/pages/index.astro";
const $$url$1 = "/astro-landingpage";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://williansmedelice.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca del sitio" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<h1>About</h1><p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi neque
    animi molestias reiciendis ex praesentium autem eius aliquid delectus
    voluptas vel consectetur iusto eveniet, in labore ut rem cupiditate.
    Assumenda voluptatibus pariatur aliquam laborum tempora aperiam facilis
    sequi a ipsa alias? Odio eum dolore possimus ipsa commodi atque, perferendis
    quod repellendus quo harum eveniet vel inventore facere repudiandae saepe
    beatae, adipisci quia ducimus eius sunt laborum. Impedit nisi deleniti vero
    corrupti minima, sequi, laborum quis accusamus soluta fuga nihil ratione
    alias odio id voluptatem tempore esse autem ab sed! Eius animi officia
    repellendus placeat dicta natus autem unde quibusdam.
  </p>` })}`;
}, "/home/williansmedelice/Escritorio/astro-landing-page/src/pages/about.astro");

const $$file = "/home/williansmedelice/Escritorio/astro-landing-page/src/pages/about.astro";
const $$url = "/astro-landingpage/about";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
