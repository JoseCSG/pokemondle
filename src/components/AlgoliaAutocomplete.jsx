import React, { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from "@algolia/autocomplete-core";
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import {ALGOLIA_API_KEY, ALGOLIA_APP_ID} from '../../constants'
import PokemonCard from './PokemonCard';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)

const AlgoliaAutocomplete = (props) => {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false,
	});
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
											indexName: "pokemon_name",
											query,
											params: {
												hitsPerPage: 5,
												attributesToSnippet: [
													"name:10",
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
			<div className="mb-4">
				<input
					type="text"
                    className="w-full px-4 py-2 border rounded-md"
					{...inputProps}
					ref={inputRef}
				/>
			</div>
			{autocompleteState.isOpen && (
				<div
                    className="mt-2 rounded-md border border-gray-300"
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
											<PokemonCard
												key={index}
                                                name={item.name}
                                                img_url={item.img_url}
                                                types={item.types}
												weight={item.weight}
												region={item.region}
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
