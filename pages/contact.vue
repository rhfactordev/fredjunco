<template>
  <Header />
  <main>
    <section class="flex flex-col md:flex-row items-center">
      <div>
        <h2 class="font-bold text-5xl text-[#1C3433]">Quem é Fred Junco?</h2>
        <NuxtImg
              src="fred-contact.jpg"
              alt="Fred Junco"
              class="max-w-[50vw] rounded-3xl"
        />
      </div>
      <article>
        <div>
          <h3 class="font-bold text-lg text-[#1C3433]">PALESTRANTE | LIDERANÇA | NEGOCIAÇÃO | NEUROVENDAS | TREINAMENTO CORPORATIVO | GESTÃO COMERCIAL</h3>
          <p class="font-normal text-lg text-[#6B6A66]">
            Com uma formação robusta e mais de 20 anos de experiência em liderança e vendas, Fred Junco é reconhecido por sua abordagem estratégica e personalizada. Sua metodologia exclusiva de treinamento já ajudou milhares de profissionais a atingirem resultados extraordinários. Conheça suas conquistas, prêmios e metodologias que fazem a diferença no mercado corporativo.
          </p>
          <ul class="flex flex-col gap-4 font-medium text-lg text-[#1C3433]">
            <li class="flex items-center gap-4">
              <NuxtImg
                src="icons/checked-icon.svg"
                alt="Fred Junco"
                class="size-8"
              />
              Professor Conquer
            </li>
            <li class="flex items-center gap-4">
              <NuxtImg
                src="icons/checked-icon.svg"
                alt="Fred Junco"
                class="size-8"
              />
              Livro
            </li>
            <li class="flex items-center gap-4">
              <NuxtImg
                src="icons/checked-icon.svg"
                alt="Fred Junco"
                class="size-8"
              />
              Prêmio X
            </li>
            <li class="flex items-center gap-4">
              <NuxtImg
                src="icons/checked-icon.svg"
                alt="Fred Junco"
                class="size-8"
              />
              Podcast
            </li>
          </ul>
        </div>
      </article>
    </section>
    <section class="bg-[#F5F2EC]">
      <div>
        <div>
          <h3>E-mail</h3>
          <p>
            
            <span>contato@fredjunco.com.br</span>
          </p>
        </div>
      </div>
      <form></form>
    </section>
  </main>
</template>