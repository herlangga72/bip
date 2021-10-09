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
    import { url } from '@roxi/routify'
    let user = {
        name: 'Herlangga Yusuf Syailendra',
        email: 'herlangga72@gmail.com',
    };

    let sidebar = [
        {
            text: 'PEKERTI',
            body: [
                { text: 'Overview', ref: '' },
                { text: 'Peserta', ref: '/pekerti/peserta' },
                { text: 'PEKERTI', ref: '/pekerti/gelombang' },
                { text: 'Media Management', ref: '/pekerti/media' }
            ],
        },
        {
            text: 'Site Management',
            body: [{ text: 'Users', ref: '/user_manager' }],
        },
    ];

    let isSideNavOpen = false;
</script>

<Header company="Biro Inovasi Pembelajaran" platformName="Admin Dashboard" bind:isSideNavOpen>
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
                <HeaderPanelLink href="/backoffice/profile">Profile</HeaderPanelLink>
                <HeaderPanelLink href="/sign/out">Sign Out</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>

    <SideNav bind:isOpen={isSideNavOpen}>
        <SideNavItems>
            {#each sidebar as menu_header}
                <SideNavMenu text={menu_header.text} expanded>
                    {#each menu_header.body as menu}
                        <SideNavMenuItem href={ $url() + menu.ref} text={menu.text} />
                    {/each}
                </SideNavMenu>
            {/each}
        </SideNavItems>
    </SideNav>
</Header>

<Content>
    <Grid>
        <slot />
    </Grid>
</Content>
