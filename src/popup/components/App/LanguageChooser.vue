<template>
    <div class="absolute pin-t pin-r">
        <select name="language" 
        id="language" 
        class="bg-transparent px-2 py-3 outline-none text-white mr-2"
        @change="$store.dispatch('app/changeLocale')">
            <option value="en-US" class="text-black">English</option>
            <option value="es-ES" class="text-black">Spanish</option>
        </select>
    </div>
</template>