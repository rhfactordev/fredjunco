<template>
  <main>
    <section class="hero-image w-full h-screen relative bg-cover">
      <div
        class="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#1C3433E5]/90 to-[#1C3433E5]/40 z-20"
      ></div>
      <Header background-color="transparent" />
      <div class="h-full flex items-center">
        <article
          class="space-y-8 pl-50 w-[calc(100vw/2-12.5rem)] z-30 relative"
        >
          <div class="space-y-8">
            <h1 class="font-semibold text-white text-6xl">
              Transforme sua equipe em uma
              <span class="text-[#53CC6C]">potência de Resultados!</span>
            </h1>
            <p class="text-white text-lg leading-[150%]">
              Com mais de 20 anos de experiência, Fred Junco oferece
              treinamentos In Company que resolvem problemas específicos e
              otimizam o desempenho da sua equipe.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="font-semibold text-[#53CC6C] border border-[#53CC6C] rounded-md px-10 py-5 inline-block hover:bg-[#53CC6C] hover:text-white duration-200"
            >Entre em contato com o Fred</NuxtLink
          >
        </article>
      </div>
    </section>
    <section class="bg-[#2B2D3D] w-full flex">
      <div class="flex-1 home-in-company-image bg-center"></div>
      <article class="flex-1 p-16">
        <div class="space-y-6 mb-8">
          <h2 class="text-[#53CC6C] font-bold text-5xl">In Company</h2>
          <p class="text-white font-normal text-lg leading-[150%]">
            O maior desafio do RH é garantir um ambiente de trabalho produtivo e
            reter talentos. Fred Junco oferece treinamentos In Company
            personalizados que diagnosticam as necessidades da sua empresa e
            apresentam soluções práticas para aumentar a produtividade, reduzir
            turnover e melhorar a satisfação no ambiente corporativo.
          </p>
        </div>
        <ul class="text-white text-lg font-normal space-y-4 mb-16">
          <li>
            <NuxtImg
              src="icons/users-icon.svg"
              alt="Fred Junco"
              class="size-10 inline-block mr-2"
            />
            Até 200 participantes
          </li>
          <li>
            <NuxtImg
              src="icons/warranty-icon.svg"
              alt="Fred Junco"
              class="size-10 inline-block mr-2"
            />
            Garantia de Satisfação
          </li>
          <li>
            <NuxtImg
              src="icons/mac-browser-icon.svg"
              alt="Fred Junco"
              class="size-10 inline-block mr-2"
            />
            Possibilidade On-Line
          </li>
        </ul>
        <NuxtLink
          to="/contact"
          class="font-semibold text-white bg-[#53CC6C] border border-[#53CC6C] rounded-md px-10 py-5 inline-block"
          >Quero me cadastrar no In Company</NuxtLink
        >
      </article>
    </section>
  </main>
  <Footer />
</template>
