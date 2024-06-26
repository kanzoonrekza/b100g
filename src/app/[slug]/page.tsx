import { createClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

const queryMarketingPage = (slug: string) => {
	const client = createClient();
	return client.getByUID("marketing_page", slug);
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryMarketingPage(params.slug);

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		openGraph: {
			title: page.data.meta_title,
			description: page.data.meta_description,
			images: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function MarketingPage({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryMarketingPage(params.slug);

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	);
}
