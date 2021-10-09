<script>
    import {
      SkipToContent,
      Header,
      HeaderUtilities,
    } from "carbon-components-svelte";
  </script>
  <div class="w-screen">
    <Header company="Biro Inovasi Pembelajaran" platformName="PEKERTI" href="/pekerti">
      <div slot="skip-to-content">
        <SkipToContent />
      </div>
      <HeaderUtilities>
      </HeaderUtilities>
    </Header>
    <slot />
  </div>