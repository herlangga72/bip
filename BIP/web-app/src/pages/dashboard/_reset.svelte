<Header company="Biro Inovasi Pembelajaran" platformName="Dashboard" bind:isSideNavOpen href="/dashboard">
    <div slot="skip-to-content">
        <SkipToContent />
    </div>
    <HeaderUtilities>
        <HeaderAction icon={User20}>
            <HeaderPanelLinks>
                <div class="mx-4">
                    <h4>{user.name}</h4>
                    <h5 class="mt-2">{user.email}</h5>
                </div>
                <HeaderPanelDivider />
                <HeaderPanelLink href="/dashboard/profile">Profile</HeaderPanelLink>
                <HeaderPanelLink href="/sign/out">Sign Out</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>

    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            {#each $layout.children as node}
                {#if node.children != ''}
                    <SideNavMenu text={node.title.toLocaleUpperCase()} expanded>
                        {#if node.children != ''}
                            {#each node.children as menu}
                                <SideNavMenuItem
                                    href={$url(menu.path)}
                                    isSelected={$isActive(menu.path)}
                                    text={menu.title.toLocaleUpperCase()}
                                />
                            {/each}
                        {/if}
                    </SideNavMenu>
                {:else}
                    <SideNavMenuItem
                        href={$url(node.path)}
                        isSelected={$isActive(node.path)}
                        text={node.title.toLocaleUpperCase()}
                    />
                {/if}
            {/each}
        </SideNavItems>
    </SideNav>
</Header>

<Content>
    <Grid>
        <slot />
    </Grid>
</Content>

<script>
    import {
        Header,
        HeaderAction,
        HeaderUtilities,
        HeaderPanelLink,
        HeaderPanelLinks,
        HeaderPanelDivider,
        SideNavMenu,
        SideNavMenuItem,
        SideNav,
        SideNavItems,
        SkipToContent,
        Content,
        Grid,
    } from 'carbon-components-svelte';
    import { User20 } from 'carbon-icons-svelte';
    import { isActive, layout, url } from '@roxi/routify';
    let user = {
        name: 'Herlangga Yusuf Syailendra',
        email: 'herlangga72@gmail.com',
    };

    let isSideNavOpen = false;
</script>
