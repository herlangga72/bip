<div class="w-screen">
    <Header company="Biro Inovasi Pembelajaran" platformName="PEKERTI" href="/">
        <div slot="skip-to-content">
            <SkipToContent />
        </div>
    </Header>
    <slot />
</div>

<script>
    import { SkipToContent, Header } from 'carbon-components-svelte';
</script>
