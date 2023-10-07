import { createAutocomplete } from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import { searchClientAlgolia } from "index";
import React, { useState, useRef, useMemo } from "react";

const ProductItem = ({ nameSpanish, setValue }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="list-group-item cursor-pointer"
			style={{ backgroundColor: hovered ? "#e2e6ea" : "transparent" }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => setValue(nameSpanish)}
		>
			{nameSpanish}
		</div>
	);
};

const AlgoliaAutocomplete = (props) => {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false,
	});
	const searchClient = searchClientAlgolia;
	const autocomplete = useMemo(
		() =>
			createAutocomplete({
				placeholder:
					props.placeholder || "Escribe el nombre del equipo",
				onStateChange({ state }) {
					setAutocompleteState(state);
				},
				getSources: () => [
					{
						sourceId: "equipment-algolia-search",
						getItems: ({ query }) => {
							if (!!query) {
								return getAlgoliaResults({
									searchClient,
									queries: [
										{
											indexName: "equipment",
											query,
											params: {
												hitsPerPage: 10,
												attributesToSnippet: [
													"nameSpanish:10",
												],
												snippetEllipsisText: "...",
											},
										},
									],
								});
							} else {
								return Promise.resolve([]);
							}
						},
					},
				],
				...props,
			}),
		[props]
	);

	const formRef = useRef(null);
	const inputRef = useRef(null);
	const panelRef = useRef(null);
	const formProps = autocomplete.getFormProps({
		inputElement: inputRef.current,
	});
	const inputProps = autocomplete.getInputProps({
		inputElement: inputRef.current,
	});

	return (
		<div {...formProps} ref={formRef}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					{...inputProps}
					ref={inputRef}
				/>
			</div>
			{autocompleteState.isOpen && (
				<div
					className="autocomplete-panel mt-2"
					ref={panelRef}
					{...autocomplete.getPanelProps()}
				>
					{autocompleteState.collections.map((collection, index) => {
						const { items } = collection;
						return (
							<section key={index} className="rounded-1">
								{items.length > 0 && (
									<div
										{...autocomplete.getListProps()}
										className="list-group"
									>
										{items.map((item, index) => (
											<ProductItem
												key={index}
												setValue={props.setValue}
												{...item}
											/>
										))}
									</div>
								)}
							</section>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default AlgoliaAutocomplete;
