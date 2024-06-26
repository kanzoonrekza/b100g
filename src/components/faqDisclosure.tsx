"use client";
import { Disclosure } from "@headlessui/react";
import { PrismicRichText } from "@prismicio/react";

export default function FaqDisclosure(data: any) {
	const { question, answer } = data.data;

	return (
		<Disclosure>
			{({ open }) => (
				<div className="grid gap-2 px-4 py-4">
					<Disclosure.Button className="flex justify-between w-full gap-4 text-xl font-marcellus">
						<span>{question}</span>
						<span className={open ? "rotate-90 transform" : ""}>V</span>
					</Disclosure.Button>
					<Disclosure.Panel className="pr-5 text-gray-500">
						<span className="prose prose-p:m-0">
							<PrismicRichText field={answer} />
						</span>
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
}
