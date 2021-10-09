<script>
import { AspectRatio, ClickableTile, Column, Content, Grid, Row, Tile } from "carbon-components-svelte";


</script>

<Content>
	<Grid>
		<Column>
			<Row>
				<Tile class="flex w-full flex-col h-72" light>
					<h1>Selamat Datang,</h1>
					<h3>Biro Inovasi Pembelajaran</h3>	  
				</Tile>
			</Row>
		</Column>
	</Grid>
</Content>
<div class="flex flex-col h-full">
	<div class="w-full bg-dark-900 p-5">
		<h4 class="text-light-50">
			Program Tersedia
		</h4>
	</div>
	<div class="flex flex-row h-full">
		<ClickableTile href="/pekerti" class="w-1/2">
			<AspectRatio ratio="16x9">
				<h4>Pekerti</h4>
			</AspectRatio>
		</ClickableTile>
	</div>
</div>	  