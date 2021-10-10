<div class="w-screen">
    <Header company="Biro Inovasi Pembelajaran" platformName="" href="/">
        <div slot="skip-to-content">
            <SkipToContent />
        </div>
        <HeaderUtilities>
            <HeaderGlobalAction aria-label="Login" icon={Login20} on:click={$goto('/sign/in')} />
        </HeaderUtilities>
    </Header>
    <slot />
</div>

<script>
    import { goto } from '@roxi/routify';

    import { SkipToContent, Header, HeaderUtilities, HeaderGlobalAction } from 'carbon-components-svelte';
    import { Login20 } from 'carbon-icons-svelte';
</script>
