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
    <section class="space-y-16 py-48">
      <div class="mx-48 flex items-center gap-8">
        <h2 class="text-[#1C3433] font-bold text-5xl">Vídeos do Fred</h2>
        <p class="text-[#6B6A66] font-normal text-lg leading-[150%] max-w-xl">
          Explore uma seleção de conteúdos exclusivos, incluindo palestras,
          vídeos e insights compartilhados por Fred Junco.
        </p>
        <PageController class-name="ml-auto" />
      </div>
      <ul
        class="flex items-center text-white font-semibold text-2xl text-center overflow-x-hidden gap-8"
      >
        <li
          class="group overflow-hidden h-[30rem] w-96 first:ml-48 last:mr-48 bg-slate-900 rounded-2xl cursor-pointer"
        >
          <a
            href="#"
            class="relative group overflow-hidden flex flex-col justify-end items-center space-y-6 size-full p-8"
          >
            <figure class="absolute top-0 left-0 size-full">
              <div class="relative size-full">
                <NuxtImg
                  src="img/fred-video-1.jpg"
                  alt="Vídeo 1"
                  class="relative z-10 scale-175 group-hover:scale-200 duration-200"
                />
                <div
                  class="absolute top-0 left-0 size-full z-20 bg-gradient-to-t from-black/70 to-black/0"
                ></div>
              </div>
            </figure>
            <div class="space-y-6 z-30">
              <article class="space-y-1">
                <h4>Como me enganar como cliente em 7 passos</h4>
                <span class="text-lg font-normal"> 05 abr de 2022 </span>
              </article>
              <span href="#" class="text-xl hover:underline">
                Acessar agora
                <NuxtImg
                  src="icons/arrow-up-right-icon.svg"
                  alt="->"
                  class="ml-2 size-5 inline-block white-filter"
                />
              </span>
            </div>
          </a>
        </li>
        <li
          class="group overflow-hidden h-[30rem] w-96 first:ml-48 last:mr-48 bg-slate-900 rounded-2xl cursor-pointer"
        >
          <a
            href="#"
            class="relative group overflow-hidden flex flex-col justify-end items-center space-y-6 size-full p-8"
          >
            <figure class="absolute top-0 left-0 size-full">
              <div class="relative size-full">
                <NuxtImg
                  src="img/fred-video-2.jpg"
                  alt="Vídeo 2"
                  class="relative z-10 scale-175 group-hover:scale-200 duration-200"
                />
                <div
                  class="absolute top-0 left-0 size-full z-20 bg-gradient-to-t from-black/70 to-black/0"
                ></div>
              </div>
            </figure>
            <div class="space-y-6 z-30">
              <article class="space-y-1">
                <h4>Como me enganar como cliente em 7 passos</h4>
                <span class="text-lg font-normal"> 05 abr de 2022 </span>
              </article>
              <span href="#" class="text-xl hover:underline">
                Acessar agora
                <NuxtImg
                  src="icons/arrow-up-right-icon.svg"
                  alt="->"
                  class="ml-2 size-5 inline-block white-filter"
                />
              </span>
            </div>
          </a>
        </li>
        <li
          class="group overflow-hidden h-[30rem] w-96 first:ml-48 last:mr-48 bg-slate-900 rounded-2xl cursor-pointer"
        >
          <a
            href="#"
            class="relative group overflow-hidden flex flex-col justify-end items-center space-y-6 size-full p-8"
          >
            <figure class="absolute top-0 left-0 size-full">
              <div class="relative size-full">
                <NuxtImg
                  src="img/fred-video-3.jpg"
                  alt="Vídeo 3"
                  class="relative z-10 scale-175 group-hover:scale-200 duration-200"
                />
                <div
                  class="absolute top-0 left-0 size-full z-20 bg-gradient-to-t from-black/70 to-black/0"
                ></div>
              </div>
            </figure>
            <div class="space-y-6 z-30">
              <article class="space-y-1">
                <h4>Como me enganar como cliente em 7 passos</h4>
                <span class="text-lg font-normal"> 05 abr de 2022 </span>
              </article>
              <span href="#" class="text-xl hover:underline">
                Acessar agora
                <NuxtImg
                  src="icons/arrow-up-right-icon.svg"
                  alt="->"
                  class="ml-2 size-5 inline-block white-filter"
                />
              </span>
            </div>
          </a>
        </li>
        <li
          class="group overflow-hidden h-[30rem] w-96 first:ml-48 last:mr-48 bg-slate-900 rounded-2xl cursor-pointer"
        >
          <a
            href="#"
            class="relative group overflow-hidden flex flex-col justify-end items-center space-y-6 size-full p-8"
          >
            <figure class="absolute top-0 left-0 size-full">
              <div class="relative size-full">
                <NuxtImg
                  src="img/fred-video-4.jpg"
                  alt="Vídeo 4"
                  class="relative z-10 scale-175 group-hover:scale-200 duration-200"
                />
                <div
                  class="absolute top-0 left-0 size-full z-20 bg-gradient-to-t from-black/70 to-black/0"
                ></div>
              </div>
            </figure>
            <div class="space-y-6 z-30">
              <article class="space-y-1">
                <h4>Como me enganar como cliente em 7 passos</h4>
                <span class="text-lg font-normal"> 05 abr de 2022 </span>
              </article>
              <span href="#" class="text-xl hover:underline">
                Acessar agora
                <NuxtImg
                  src="icons/arrow-up-right-icon.svg"
                  alt="->"
                  class="ml-2 size-5 inline-block white-filter"
                />
              </span>
            </div>
          </a>
        </li>
        <li
          class="group overflow-hidden h-[30rem] w-96 first:ml-48 last:mr-48 bg-slate-900 rounded-2xl cursor-pointer"
        >
          <a
            href="#"
            class="relative group overflow-hidden flex flex-col justify-end items-center space-y-6 size-full p-8"
          >
            <figure class="absolute top-0 left-0 size-full">
              <div class="relative size-full">
                <NuxtImg
                  src="img/fred-video-5.jpg"
                  alt="Vídeo 5"
                  class="relative z-10 scale-175 group-hover:scale-200 duration-200"
                />
                <div
                  class="absolute top-0 left-0 size-full z-20 bg-gradient-to-t from-black/70 to-black/0"
                ></div>
              </div>
            </figure>
            <div class="space-y-6 z-30">
              <article class="space-y-1">
                <h4>Como me enganar como cliente em 7 passos</h4>
                <span class="text-lg font-normal"> 05 abr de 2022 </span>
              </article>
              <span href="#" class="text-xl hover:underline">
                Acessar agora
                <NuxtImg
                  src="icons/arrow-up-right-icon.svg"
                  alt="->"
                  class="ml-2 size-5 inline-block white-filter"
                />
              </span>
            </div>
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
    <section class="bg-[#F5F2EC] p-48 space-y-16">
      <div class="flex items-center gap-8">
        <h2 class="text-[#1C3433] font-bold text-5xl">Blog do Fred</h2>
        <p class="text-[#6B6A66] font-normal text-lg leading-[150%] max-w-xl">
          Explore conteúdos e artigos sobre o mundo do RH e relações
          interpessoais compartilhados por Fred Junco.
        </p>
      </div>
      <ul class="flex items-center font-semibold text-[#1C3433] text-2xl gap-8">
        <li class="group flex flex-col w-1/3 cursor-pointer">
          <figure class="relative overflow-hidden h-80 w-full rounded-t-3xl">
            <NuxtImg
              src="img/fred-blog-1.jpg"
              alt="Post 1"
              class="w-full absolute top-0 left-0 group-hover:scale-125 duration-200"
            />
          </figure>
          <div class="p-8 space-y-6 bg-white rounded-b-3xl">
            <h4>Como me enganar como cliente em 7 passos</h4>
            <span href="#" class="text-xl text-[#53CC6C] hover:underline">
              Ver conteúdo
              <NuxtImg
                src="icons/arrow-up-right-icon.svg"
                alt="->"
                class="size-5 inline-block"
              />
            </span>
          </div>
        </li>
        <li class="group flex flex-col w-1/3 cursor-pointer">
          <figure class="relative overflow-hidden h-80 w-full rounded-t-3xl">
            <NuxtImg
              src="img/fred-blog-2.jpg"
              alt="Post 2"
              class="w-full absolute top-0 left-0 group-hover:scale-125 duration-200"
            />
          </figure>
          <div class="p-8 space-y-6 bg-white rounded-b-3xl">
            <h4>Como me enganar como cliente em 7 passos</h4>
            <span href="#" class="text-xl text-[#53CC6C] hover:underline">
              Ver conteúdo
              <NuxtImg
                src="icons/arrow-up-right-icon.svg"
                alt="->"
                class="size-5 inline-block"
              />
            </span>
          </div>
        </li>
        <li class="group flex flex-col w-1/3 cursor-pointer">
          <figure class="relative overflow-hidden h-80 w-full rounded-t-3xl">
            <NuxtImg
              src="img/fred-blog-3.jpg"
              alt="Post 3"
              class="w-full absolute top-0 left-0 group-hover:scale-125 duration-200"
            />
          </figure>
          <div class="p-8 space-y-6 bg-white rounded-b-3xl">
            <h4>Como me enganar como cliente em 7 passos</h4>
            <span href="#" class="text-xl text-[#53CC6C] hover:underline">
              Ver conteúdo
              <NuxtImg
                src="icons/arrow-up-right-icon.svg"
                alt="->"
                class="size-5 inline-block"
              />
            </span>
          </div>
        </li>
      </ul>
      <div class="flex justify-center">
        <a
          to="#"
          class="group font-semibold text-[#53CC6C] text-xl border border-[#53CC6C] rounded-md px-10 py-5 inline-block hover:bg-[#53CC6C] hover:text-white duration-200 cursor-pointer"
          >Acesse o blog do Fred Junco
          <NuxtImg
            src="icons/arrow-up-right-icon.svg"
            alt="->"
            class="ml-4 size-6 inline-block group-hover:white-filter"
          />
        </a>
      </div>
    </section>
    <section class="p-48 flex items-center">
      <div class="flex-1 p-16">
        <NuxtImg
          src="img/fred-home-contact.jpg"
          alt="Fred Junco"
          class="rounded-3xl"
        />
      </div>
      <div class="flex-1 p-16 space-y-8">
        <h2 class="text-[#1C3433] font-bold text-5xl">Quem é Fred Junco?</h2>
        <h3 class="font-bold text-lg text-[#1C3433] uppercase">
          PALESTRANTE | LIDERANÇA | NEGOCIAÇÃO | NEUROVENDAS | TREINAMENTO
          CORPORATIVO | GESTÃO COMERCIAL
        </h3>
        <p class="font-normal text-lg text-[#6B6A66]">
          Com uma formação robusta e mais de 20 anos de experiência em liderança
          e vendas, Fred Junco é reconhecido por sua abordagem estratégica e
          personalizada. Sua metodologia exclusiva de treinamento já ajudou
          milhares de profissionais a atingirem resultados extraordinários.
          Conheça suas conquistas, prêmios e metodologias que fazem a diferença
          no mercado corporativo.
        </p>
        <a
          to="#"
          class="group font-semibold text-[#53CC6C] text-xl border border-[#53CC6C] rounded-md px-10 py-5 inline-block hover:bg-[#53CC6C] hover:text-white duration-200 cursor-pointer"
        >
          Quero falar com o Fred Junco

          <NuxtImg
            src="icons/arrow-up-right-icon.svg"
            alt="->"
            class="ml-4 size-6 inline-block group-hover:white-filter"
          />
        </a>
      </div>
    </section>
    <ClientSection />
    <section class="p-64">
      <div class="flex items-center bg-[#2B2D3D] rounded-3xl">
        <article class="flex-1">
          <div class="space-y-16 p-32 pr-0">
            <h2 class="text-[#53CC6C] font-bold text-5xl">In Company</h2>
            <p class="font-normal text-lg text-white">
              Com uma formação robusta e mais de 20 anos de experiência em
              liderança e vendas, Fred Junco é reconhecido por sua abordagem
              estratégica e personalizada. Sua metodologia exclusiva de
              treinamento já ajudou milhares de profissionais a atingirem
              resultados extraordinários. Conheça suas conquistas, prêmios e
              metodologias que fazem a diferença no mercado corporativo.
            </p>
            <InCompanyList />
            <div class="group relative flex w-fit z-40">
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
        <figure class="relative flex-1 overflow-hidden">
          <NuxtImg
            src="img/fred-home-in-company.jpg"
            alt="In Company"
            class="relative z-10"
          />
          <div
            class="absolute size-full top-0 left-0 bg-gradient-to-l from-[#2B2D3D]/0 to-[#2B2D3D] z-20"
          ></div>
        </figure>
      </div>
    </section>
  </main>
  <Footer />
</template>
