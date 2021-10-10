<Content>
    <Grid>
        <Column>
            <Row>
                <Tile class="flex w-full flex-col h-72" light>
                    <h1>Selamat Datang di</h1>
                    <h2>Biro Inovasi Pembelajaran</h2>
                </Tile>
            </Row>
        </Column>
    </Grid>
</Content>
<div class="flex flex-col h-full">
    <div class="w-full bg-dark-900 p-5">
        <h3 class="text-light-50">Program</h3>
    </div>
    <div class="flex flex-row h-full">
        {#each list_menu as menu}
            <ClickableTile href={menu.ref} class="w-1/4">
                <AspectRatio>
                    <div in:fade class="w-full h-full justify-center flex items-center">
                        <h3>{menu.body}</h3>
                    </div>
                </AspectRatio>
            </ClickableTile>
        {/each}
    </div>
</div>

<script>
    import { AspectRatio, ClickableTile, Column, Content, Grid, Row, Tile } from 'carbon-components-svelte';
    import { fade } from 'svelte/transition';

    let list_menu = [
        { ref: 'https://bip.ums.ac.id/pekerti', body: 'PEKERTI' },
        { ref: 'https://bip.ums.ac.id', body: 'WEBSITE' },
        { ref: '', body: '' },
        { ref: '', body: '' },
    ];
</script>
