<template>
  <Header />
  <main>
    <section class="p-16 space-y-8 md:space-y-16">
      <h2 class="section-title">Quem é Fred Junco?</h2>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1 md:space-y-16">
          <NuxtImg
            src="img/fred-contact.jpg"
            alt="Fred Junco Contato"
            class="max-h-screen rounded-3xl"
          />
        </div>
        <article class="flex-1 md:px-16">
          <div class="space-y-8 mb-8">
            <h3 class="font-bold text-base text-[#1C3433] uppercase">
              PALESTRANTE | LIDERANÇA | NEGOCIAÇÃO | NEUROVENDAS | TREINAMENTO
              CORPORATIVO | GESTÃO COMERCIAL
            </h3>
            <p class="article-text">
              Com uma formação robusta e mais de 20 anos de experiência em
              liderança e vendas, Fred Junco é reconhecido por sua abordagem
              estratégica e personalizada. Sua metodologia exclusiva de
              treinamento já ajudou milhares de profissionais a atingirem
              resultados extraordinários. Conheça suas conquistas, prêmios e
              metodologias que fazem a diferença no mercado corporativo.
            </p>
            <CheckedList
              id="features"
              :items="['Professor Conquer', 'Livro', 'Prêmio X', 'Podcast']"
              class-name="font-medium"
            />
          </div>
        </article>
      </div>
    </section>
    <section class="bg-[#F5F2EC] flex flex-col md:flex-row p-16 md:gap-0 gap-8">
      <div class="flex-1 text-[#6B6A66] text-base font-normal space-y-8">
        <div class="space-y-4">
          <h4 class="font-semibold text-[#1C3433] text-xl">E-mail</h4>
          <p>
            <a href="mailto:contato@fredjunco.com.br">
              <NuxtImg
                src="icons/email-icon.svg"
                alt="E-mail"
                class="size-6 inline-block mr-2"
              />
              <span class="inline-block my-auto">contato@fredjunco.com.br</span>
            </a>
          </p>
        </div>
        <div class="space-y-4">
          <h4 class="font-semibold text-[#1C3433] text-xl">Telefone</h4>
          <p>
            <a href="https://wa.me/5531999925522">
              <NuxtImg
                src="icons/whatsapp-icon.svg"
                alt="Telefone"
                class="size-6 inline-block mr-2"
              />
              <span class="inline-block my-auto">(31) 9 9992-5522</span>
            </a>
          </p>
        </div>
        <div class="space-y-4">
          <h4 class="font-semibold text-[#1C3433] text-xl">Endereço</h4>
          <p>
            <a href="https://g.co/kgs/Gbv7f35">
              <NuxtImg
                src="icons/map-pin-icon.svg"
                alt="Telefone"
                class="size-6 inline-block mr-2"
              />
              <span class="inline-block my-auto"
                >Alameda da Paz, 47, 7520-110 Sines
              </span>
            </a>
          </p>
        </div>
        <div class="space-y-4">
          <h4 class="font-semibold text-[#1C3433] text-xl">Social</h4>
          <ul class="flex gap-4">
            <li>
              <a href="#">
                <NuxtImg
                  src="icons/linkedin-icon.svg"
                  alt="LinkedIn"
                  class="size-6"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NuxtImg
                  src="icons/facebook-icon.svg"
                  alt="Facebook"
                  class="size-6"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NuxtImg
                  src="icons/instagram-icon.svg"
                  alt="Instagram"
                  class="size-6"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NuxtImg
                  src="icons/youtube-icon.svg"
                  alt="YouTube"
                  class="size-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1 space-y-8">
        <h4 class="font-semibold text-[#1C3433] text-xl">
          Preencha o formulário abaixo para entrar em contato com Fred Junco e
          iniciar a transformação na sua empresa.
        </h4>
        <form class="grid grid-cols-2 gap-2 md:gap-8">
          <input
            class="col-span-2 md:col-span-1 bg-white border border-[#E8E8E8] placeholder-[#6B6A66] rounded-lg py-5 px-4 focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
          />
          <input
            class="col-span-2 md:col-span-1 bg-white border border-[#E8E8E8] placeholder-[#6B6A66] rounded-lg py-5 px-4 focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <!-- Pode-se mudar para number ou stirng -->
          <input
            class="col-span-2 md:col-span-1 bg-white border border-[#E8E8E8] placeholder-[#6B6A66] rounded-lg py-5 px-4 focus:outline-none"
            type="tel"
            name="phone"
            id="phone"
            pattern="^\+[0-9]{2}\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$"
            maxlength="13"
            placeholder="Telefone"
          />
          <input
            class="col-span-2 md:col-span-1 bg-white border border-[#E8E8E8] placeholder-[#6B6A66] rounded-lg py-5 px-4 focus:outline-none"
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto"
          />
          <textarea
            class="col-span-2 bg-white border border-[#E8E8E8] placeholder-[#6B6A66] rounded-lg py-5 px-4 focus:outline-none"
            rows="5"
            placeholder="Mensagem"
          ></textarea>
          <button
            type="submit"
            class="link-button !text-center col-span-2 text-white border-none bg-[#53CC6C]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
    <section class="w-full overflow-hidden">
      <div
        class="relative w-full md:w-2/3 pb-[56.25%] mx-auto google-maps-placeholder-image bg-cover bg-center"
      >
        <iframe
          class="y-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.7974439272953!2d-8.866929299999999!3d37.958515299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b9517abd94545%3A0x2fddaa4a3ec10a0b!2sAlameda%20da%20Paz%2047%207520%20110%2C%207520-110%20Sines%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1746715499240!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style="border: 0; position: absolute; top: 0; left: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </section>
    <ClientSection />
  </main>
  <Footer />
</template>

<script setup>
useHead({
  title: "Contato | Fred Junco",
});
</script>
