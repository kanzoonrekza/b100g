"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { PrismicNextLink } from "@prismicio/next";
import { Fragment, useState } from "react";
import { NavigationDocument } from "../../prismicio-types";

interface Props {
	nav: NavigationDocument<string>;
}

export default function MobileNavToggle(props: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className="absolute right-0 z-50 md:hidden"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<Bars2Icon className="w-10 h-10" />
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="transition ease-out duration-300 transform"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div className="fixed inset-y-0 right-0 w-2/5 h-screen overflow-y-auto">
							<Dialog.Panel className="w-full h-screen max-w-md p-6 overflow-hidden text-lg text-left transition-all transform bg-black shadow-xl">
								<nav>
									<ul className="flex flex-col items-start justify-start gap-6">
										{props.nav.data.nav_group.map((link: any) => (
											<li key={link.id}>
												<PrismicNextLink
													field={link.nav_link}
												>
													{link.nav_label}
												</PrismicNextLink>
											</li>
										))}
									</ul>
								</nav>
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}