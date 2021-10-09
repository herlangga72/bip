<script>
    import { Button, PasswordInput, TextInput, Tile } from 'carbon-components-svelte';
    import { ArrowLeft24, ArrowRight24, Login24 } from 'carbon-icons-svelte';
    import { fly, slide } from 'svelte/transition';
    let nextClicked = false;
    let user = { email: '', password: '' };
</script>

<div class="w-screen h-screen flex bg-gradient-to-tr mt-10 from-transparent to-blue-400 ">
    <Tile class="sm:w-full md:w-1/3 lg:w-1/4 h-screen flex-col overflow-hidden">
        <h2 class="font-bold">Pekerti</h2>
        <h4>Sign On</h4>
        {#if !nextClicked}
            <div in:fly={{ x: -500, duration: 500 }}>
                <div class="mb-1 mt-8">
                    <TextInput labelText="E-mail" bind:value={user.email} />
                </div>
                <div class="flex flex-row-reverse">
                    <Button class="w-1/2" on:click={() => (nextClicked = true)} icon={ArrowRight24}>Next</Button>
                </div>
            </div>
        {:else}
            <div in:fly={{ x: 500, duration: 500 }}>
                <p class="mt-2 mb-1">Username <span class="font-bold">{user.email}</span></p>
                <PasswordInput labelText="Password" bind:value={user.password} />
                <div class="flex flex-row">
                    <Button class="w-1/2" on:click={() => (nextClicked = false)} kind="ghost" icon={ArrowLeft24}
                        >Back</Button
                    >
                    <Button class="w-1/2" icon={Login24} href="/dashboard">Login</Button>
                </div>
            </div>
        {/if}
        <div in:slide={{ duration: 500, delay: 500 }} class="flex flex-col text-center mt-5 pt-5">
            <p class="text-sm py-4">Belum pernah mengunjungi aplikasi ini ?</p>
            <Button kind="tertiary" icon={ArrowRight24}>Register</Button>
        </div>
    </Tile>
</div>
