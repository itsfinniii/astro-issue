<script>
    import { onMount } from "svelte";

    let open = false;
    let loading = true;
    let data = null;

    function reverseActive() {
        if (open) { open = false; console.log("Navigation: Closed"); }
        else { open = true; console.log("Navigation: Opened"); }
    }

    onMount(async () => {
        try {
            const response = await fetch("/api/navigation.json");
            data = await response.json();
            console.log("Navigation: Loaded");
        } finally {
            loading = false;
        }
    })
</script>

{#if !loading}
    <div class={`flex flex-row-reverse items-center justify-between w-full absolute h-fit p-4 ${open ? "z-0" : "z-[700]"}`}>
        <button aria-label="Open Navigation" class="flex justify-center hover:cursor-pointer items-center h-10 w-10 rounded-full bg-(--primary)" onclick={reverseActive}>
            <div class="bg-amber-400 h-6 w-6"></div>
        </button>
    </div>

    {#if open}
        <button aria-label="Close Navigation" class="fixed inset-0 bg-black opacity-25 z-[500]" onclick={reverseActive}></button>
    {/if}

    {#if open}
        <div aria-label="Close Navigation" class={`flex flex-row-reverse items-center justify-between w-full absolute h-fit p-4 ${open ? "z-[5000]" : "z-0"}`}>
            <button aria-label="Close Navigation" class="flex justify-center items-center hover:cursor-pointer h-10 w-10 rounded-full bg-(--primary)" onclick={reverseActive}>
                <div class="bg-green-400 h-6 w-6"></div>
            </button>
        </div>
    {/if}

    <nav class={`text-black ${open ? "fixed -top-2 right-0 w-full flex flex-col bg-white shadow-md py-4 transition-transform duration-500 translate-y-0 max-h-screen overflow-y-auto z-[600]" : "fixed -top-2 right-0 w-full z-[600] flex flex-col bg-white shadow-md py-4 transition-transform duration-500 -translate-y-full max-h-screen overflow-y-auto"}`}>
        <div class="flex md:flex-row flex-col md:justify-start md:space-x-36 space-x-0 space-y-10 md:space-y-0 container mx-auto gap-x-14 p-8" id="navigation-content">
            {#each data.columns as column}
                <div>
                    <h3 class="text-2xl font-bold mb-1.5">{column.title}</h3>
                    <div class="flex flex-col space-y-1">
                        {#each column.links as link}
                            <a class="hover:text-(--primary) duration-200" href={link.url}>{link.text}</a>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </nav>
{/if}
