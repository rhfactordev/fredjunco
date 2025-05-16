<template>
  <section class="h-full mx-auto container px-5 mb-8">

    <div class="flex flex-col md:flex-row  items-center bg-[#2B2D3D] md:rounded-3xl">
      <article class="flex-1">
        <div class="space-y-16 px-10 py-10">
          <h2 class="section-title !text-[#53CC6C]">In Company</h2>
          <p class="font-normal text-base fh:text-xl text-white">
            Com uma formação robusta e mais de 20 anos de experiência em
            liderança e vendas, Fred Junco é reconhecido por sua abordagem
            estratégica e personalizada. Sua metodologia exclusiva de
            treinamento já ajudou milhares de profissionais a atingirem
            resultados extraordinários. Conheça suas conquistas, prêmios e
            metodologias que fazem a diferença no mercado corporativo.
          </p>
          <InCompanyList />
          <div class="group relative flex mx-auto md:mx-0 w-fit z-40">
              <span
                  class="absolute inset-0 border border-transparent group-hover:border-[#53CC6C] group-hover:animate-ping rounded-md hidden md:inline"
              ></span>
            <NuxtLink
                to="/contact"
                class="link-button relative !inline-flex border-none text-white bg-[#53CC6C]"
            >
              Quero me cadastrar no In Company
            </NuxtLink>
          </div>
        </div>
      </article>
      <figure
          class="flex-1 relative overflow-hidden h-80 md:h-full w-full rounded-3xl md:rounded-l-none p-16 md:p-0"
      >
        <NuxtImg
            src="img/fred-home-in-company.jpg"
            alt="In Company"
            class="relative z-10 min-w-full min-h-full rounded-3xl md:rounded-l-none"
        />
        <div
            class="absolute size-full top-0 left-0 bg-gradient-to-l from-[#2B2D3D]/0 to-[#2B2D3D] z-20 hidden md:block"
        ></div>
      </figure>
    </div>
  </section>
</template>
