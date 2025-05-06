<template>
    <header class="w-full flex flex-row items-center justify-between bg-[#1C3433] py-8 px-16">
        <NuxtImg
            src="fred-junco-logo.png"
            class="h-16"
        />
        <nav>
            <ul class="flex flex-row gap-8 text-white text-lg font-semibold">
                <NuxtLink to="/" class="py-2.5 px-5">Página inicial</NuxtLink>
                <NuxtLink to="/contact" class="py-2.5 px-5">Contato</NuxtLink>
                <NuxtLink to="/in-company" class="border border-white rounded-md py-2.5 px-5">In Company</NuxtLink>
            </ul>
        </nav>
    </header>
</template>