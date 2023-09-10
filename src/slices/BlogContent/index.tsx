import { LinkIcon } from "@heroicons/react/24/solid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = SliceComponentProps<Content.BlogContentSlice>;

/**
 * Component for "BlogContent" Slices.
 */
const BlogContent = ({ slice }: BlogContentProps): JSX.Element => {
	console.log(slice);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{slice.variation == "sectionTitle" && (
				<h2 className="">
					<Link
						id={slice.primary.section_title?.toString()}
						href={`#${slice.primary.section_title}`}
						className="flex items-center gap-3 w-fit group"
					>
						{slice.primary.section_title}
						<LinkIcon className="hidden w-6 h-6 group-hover:block group-focus:block" />
					</Link>
				</h2>
			)}
			{slice.items.map((item: any) => (
				<>
					<PrismicNextImage
						field={item.image}
						className="object-contain mx-auto max-h-60"
					/>
					<PrismicRichText field={item.text} key={item.id} />
				</>
			))}
		</section>
	);
};

export default BlogContent;
