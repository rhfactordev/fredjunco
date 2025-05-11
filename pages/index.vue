<template>
  <main>
    <section
      class="hero-image w-full h-screen relative bg-cover overflow-y-hidden"
    >
      <div
        class="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#1C3433E5]/90 to-[#1C3433E5]/40 z-20"
      ></div>
      <Header background-color="transparent" />
      <div class="h-full flex items-center">
        <article
          class="space-y-8 pl-50 w-[calc(100vw/2-12.5rem)] z-30 relative"
        >
          <div class="space-y-8">
            <h1 class="font-semibold text-white text-6xl leading-16">
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
            class="font-semibold text-[#53CC6C] text-xl border border-[#53CC6C] rounded-md px-10 py-5 inline-block hover:bg-[#53CC6C] hover:text-white duration-200"
            >Entre em contato com o Fred</NuxtLink
          >
        </article>
      </div>
    </section>
    <section class="bg-[#2B2D3D] w-full h-screen flex">
      <div class="flex-1 home-in-company-image bg-top bg-clip"></div>
      <article class="flex-1">
        <div class="m-16">
          <div class="space-y-6 mb-8">
            <h2 class="text-[#53CC6C] font-bold text-5xl">In Company</h2>
            <p class="text-white font-normal text-lg leading-[150%]">
              O maior desafio do RH é garantir um ambiente de trabalho produtivo
              e reter talentos. Fred Junco oferece treinamentos In Company
              personalizados que diagnosticam as necessidades da sua empresa e
              apresentam soluções práticas para aumentar a produtividade,
              reduzir turnover e melhorar a satisfação no ambiente corporativo.
            </p>
          </div>
          <InCompanyList />
          <div class="group relative flex w-fit">
            <span
              class="absolute inset-0 border border-transparent group-hover:border-[#53CC6C] group-hover:animate-ping rounded-md"
            ></span>
            <NuxtLink
              to="/contact"
              class="relative inline-flex font-semibold text-white text-xl bg-[#53CC6C] rounded-md px-10 py-5"
            >
              Quero me cadastrar no In Company
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>
    <section class="w-full h-screen flex">
      <article class="flex-1">
        <div class="m-16">
          <div class="space-y-6 mb-8">
            <h2 class="text-[#669997] font-bold text-5xl">
              Mentoria Xeque-Mate
            </h2>
            <p class="text-[#6B6A66] font-normal text-lg leading-[150%]">
              A Mentoria Xeque-Mate é um programa completo focado em vendas e
              experiência do cliente (CX). Desenvolvida por Fred Junco, a
              mentoria ajuda profissionais a aprimorar estratégias, técnicas e
              mindset para atingir resultados extraordinários no mercado.
            </p>
          </div>
          <CheckedList
            id="checkmate"
            :items="[
              'Para Empreendedores',
              'Para Líderes Comerciais',
              'Para Empresas que Faturam até 100k por Mês',
            ]"
          />
          <NuxtLink
            to="/contact"
            class="mt-16 inline-block font-semibold text-[#669997] text-xl border border-[#669997] hover:bg-[#669997] hover:text-white rounded-md px-10 py-5 duration-200"
          >
            Quero conhecer a Mentoria
          </NuxtLink>
        </div>
      </article>
      <div class="flex-1 home-checkmate-image bg-top bg-clip"></div>
    </section>
    <section class="w-full h-screen bg-[#FFF8F4] flex">
      <article class="flex-1">
        <div class="m-16">
          <div class="space-y-6 mb-8">
            <h2 class="text-[#E9763D] font-bold text-5xl">Quick Wins</h2>
            <q class="font-medium text-2xl tracking-tight not-italic no-quotes">
              <NuxtImg
                src="icons/quote-icon.svg"
                class="inline-block h-5 mr-2"
              />
              Aprendizados para colocar em ação e alcançar resultados imediatos
              <NuxtImg
                src="icons/quote-icon.svg"
                class="inline-block rotate-180 h-5 ml-2"
              />
            </q>
            <p class="text-[#6B6A66] font-normal text-lg leading-[150%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              vitae doloremque a, vero cupiditate maxime aperiam fugiat deserunt
              accusantium mollitia eaque unde ad voluptatibus, iure iste
              perferendis temporibus odio molestias.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="mt-16 inline-block font-semibold text-[#E9763D] text-xl border border-[#E9763D] hover:bg-[#E9763D] hover:text-white rounded-md px-10 py-5 duration-200"
          >
            Quero adquirir meu livro
          </NuxtLink>
        </div>
      </article>
      <div class="flex-1 relative overflow-y-hidden">
        <div
          class="relative home-quick-wins-image size-full bg-top bg-clip z-20"
        ></div>
        <div
          class="absolute top-16 bg-[#E9763D] size-full z-10 rounded-3xl"
        ></div>
      </div>
    </section>
    <section class="space-y-16">
      <div>
        <h2 class="text-[#1C3433] font-bold text-5xl">Vídeos do Fred</h2>
        <p class="text-[#6B6A66] font-normal text-lg leading-[150%]">
          Explore uma seleção de conteúdos exclusivos, incluindo palestras,
          vídeos e insights compartilhados por Fred Junco.
        </p>
      </div>
      <ul class="text-white font-semibold text-2xl text-center">
        <li
          class="w-lg first:ml-48 last:ml-48 bg-slate-900 space-y-6 rounded-2xl p-4"
        >
          <article class="space-y-1">
            <h4>Como me enganar como cliente em 7 passos</h4>
            <span class="text-lg font-normal"> 05 abr de 2022 </span>
          </article>
          <a href="#" class="text-xl">
            Acessar agora
            <NuxtImg
              src="icons/arrow-up-right-icon.svg"
              alt="->"
              class="ml-2 size-5 inline-block white-filter"
            />
          </a>
        </li>
      </ul>
      <div class="flex justify-center">
        <a
          to="#"
          class="group font-semibold text-[#53CC6C] text-xl border border-[#53CC6C] rounded-md px-10 py-5 inline-block hover:bg-[#53CC6C] hover:text-white duration-200 cursor-pointer"
          >Acesse o canal do Fred Junco
          <NuxtImg
            src="icons/arrow-up-right-icon.svg"
            alt="->"
            class="ml-4 size-6 inline-block group-hover:white-filter"
          />
        </a>
      </div>
    </section>
    <ClientSection />
  </main>
  <Footer />
</template>
