<script>
  import {
    Header,
    HeaderAction,
    HeaderUtilities,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderPanelDivider,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
  } from "carbon-components-svelte";
import { User20 } from "carbon-icons-svelte";

  let isSideNavOpen = false;
</script>

<Header company="IBM" platformName="Carbon Svelte" bind:isSideNavOpen>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderUtilities>
		<HeaderAction icon={User20}>
			<HeaderPanelLinks>
				<div class="mx-4">
					<h4>La Ode Muhammad Al Fatih</h4>
					<h5 class="mt-2">lamualfa@atrium.com</h5>
				</div>
				<HeaderPanelDivider />
				<HeaderPanelLink href="/backoffice/profile">Profile</HeaderPanelLink>
				<HeaderPanelLink href="/sign/out">Sign Out</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>

  <SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink  text="Overview" href="/" />
      <SideNavLink  text="Peserta" href="/" />
      <SideNavLink  text="Pelaksanaan" href="/" />
      <SideNavDivider/>
      <SideNavLink  text="Response" href="/" />
    </SideNavItems>
  </SideNav>
</Header>

<Content>
  <Grid>
    <slot/>
  </Grid>
</Content>
