import React from "react";
import theme from "theme";
import { Theme, Image, Box, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"faceted-search"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			height="100px"
			border-width="0 0 1px 0"
			border-style="solid"
			border-color="#0c6aff"
			background="#c6f5fe"
			display="flex"
			justify-content="space-between"
			width="100%"
			box-shadow="0 0 0 0 #c6f5fe"
			position="relative"
		>
			<Override
				slot="SectionContent"
				margin="0px 1rem 0px 1rem"
				flex-direction="row"
				align-items="center"
				justify-content="space-between"
				width="100%"
				max-width="none"
			/>
			<Link
				href="/"
				color="#000000"
				width="max-content"
				height="max-content"
				display="flex"
				align-items="center"
				text-decoration-line="initial"
				font="600 16px sans-serif"
				border-width="0 0 1px 0"
				border-color="#494949"
				hover-border-style="none"
			>
				<Box width="max-content" cursor="pointer" background="#c6f5fe">
					<Image src="https://softr-prod.imgix.net/applications/d919d2ef-4bb1-4b91-aa55-6040ea8667e1/assets/f7a75f17-313d-4759-992f-e7d351a11836.svg" display="block" />
				</Box>
			</Link>
			<Text
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -82%)"
				font="3rem sans-serif"
				border-color="#000000"
				color="#525252"
			>
				Faceted Search
			</Text>
		</Section>
		<Box background="#c3c3c3" padding="0" width="100vw" justify-content="space-between">
			<Components.ReactiveBase
				padding="20px 20px 20px 20px"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				app="good-books-ds"
				enableAppbase
				searchStateHeader
				themePreset="light"
				recordAnalytics
				width="100%"
				height="100%"
				background="#c6f5fe"
			>
				<Components.SearchBox
					title="Filter by Search"
					componentId="searchSensor"
					dataField="name, name.search"
					fieldWeights="3,1"
					placeholder="Try Searching for &quot;Paradise Lost&quot;, &quot;Road Trip&quot;,  etc."
					highlight
					URLParams
					enablePopularSuggestions
					popularSuggestionsConfig={{
						"size": 3,
						"minChars": 2,
						"index": "good-books-ds"
					}}
					enableRecentSuggestions
					recentSuggestionsConfig={{
						"size": 3,
						"index": "good-books-ds",
						"minChars": 4
					}}
				/>
				<Box display="flex" justify-content="space-between" lg-flex-direction="column">
					<Box display="flex" flex-direction="column" min-width="300px" padding="1rem 0px 1rem 0px">
						<Components.MultiList
							componentId="authorsSensor"
							dataField="authors.keyword"
							title="Filter by Authors"
							queryFormat="or"
							showCheckbox
							showCount
							showMissing
							showSearch
							showFilter
							margin="0px 0px 1rem 0px"
							sortBy="asc"
							aggregationSize="30"
							size="30"
						/>
						<Components.RangeInput
							dataField="original_publication_year"
							componentId="yearSensor"
							range={{
								"start": 1900,
								"end": 2021
							}}
							rangeLabels={{
								"start": "1900",
								"end": "2021"
							}}
							URLParams
							title="Filter by Publication Year"
						/>
					</Box>
					<Box
						width="100%"
						display="flex"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
					>
						<Box width="100%" margin="0px auto 0px auto" padding=".5rem 1rem .5rem 1rem">
							<Components.SelectedFilters showClearAll="never" />
						</Box>
						<Components.ReactiveList
							componentId="SearchResult"
							dataField="name"
							from="0"
							size="15"
							pagination
							react={{
								"and": ["searchSensor", "authorsSensor", "yearSensor"]
							}}
							paginationAt="bottom"
							margin="0px 0px 0px 2rem"
							width="100%"
						/>
					</Box>
				</Box>
			</Components.ReactiveBase>
		</Box>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61d455912ef8c7001f83eaae"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});