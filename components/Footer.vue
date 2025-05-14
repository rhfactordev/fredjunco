<template>
  <footer class="bg-[#1C3433] space-y-8 md:space-y-16 p-8 md:p-16">
    <div
      class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-8"
    >
      <div class="flex flex-col gap-8 flex-1 mb-6 md:mb-0">
        <NuxtImg
          src="img/fred-junco-logo.png"
          alt="Fred Junco Conexões e Negócios"
          class="white-filter w-60"
        />
        <ul class="flex flex-row gap-4">
          <li>
            <a to="#">
              <NuxtImg
                src="icons/instagram-icon.svg"
                alt="Instagram"
                class="size-12"
              />
            </a>
          </li>
          <li>
            <a to="#">
              <NuxtImg
                src="icons/facebook-icon.svg"
                alt="Facebook"
                class="size-12"
              />
            </a>
          </li>
          <li>
            <a to="#">
              <NuxtImg
                src="icons/linkedin-icon.svg"
                alt="LinkedIn"
                class="size-12"
              />
            </a>
          </li>
          <li>
            <a to="#">
              <NuxtImg
                src="icons/youtube-icon.svg"
                alt="YouTube"
                class="size-12"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="flex-1 md:flex-2">
        <h2
          class="font-inter font-extrabold text-[#53CC6C] text-xl mb-6 text-center md:text-left"
        >
          Links
        </h2>
        <ul
          class="text-white text-base font-normal flex flex-col items-center md:grid grid-cols-2 gap-4"
        >
          <li>
            <NuxtLink class="hover:underline" to="/"> Página Inicial </NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline" to="/contact">
              Quem é Fred Junco?
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline" to="/in-company">
              In Company
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline" to="/contact">
              Contatos
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <h2
          class="font-inter font-extrabold text-[#53CC6C] text-xl mb-6 text-center md:text-left"
        >
          Contatos
        </h2>
        <ul
          class="text-white text-base font-normal space-y-4 text-center md:text-left"
        >
          <li>
            <a href="mailto:contato@fredjunco.com.br">
              <NuxtImg
                src="icons/email-icon.svg"
                alt="E-mail"
                class="size-6 inline-block mr-2"
              />
              <span>contato@fredjunco.com.br</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5531999925522">
              <NuxtImg
                src="icons/whatsapp-icon.svg"
                alt="Telefone"
                class="size-6 inline-block mr-2"
              />
              <span>(31) 99992-5522</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="inline-block h-px bg-[#2C5250] w-full"></div>
    <p class="article-text !text-white text-center cursor-default">
      Fred Junco - Copyright &copy;{{ currentYear }}
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
