import { Box, FormControl, Select, SelectProps } from '@chakra-ui/core';
import { FieldError } from 'react-hook-form';
import useSWR from 'swr';
import { Model } from '../database/getModels';

export interface ModelSelectProps extends SelectProps {
	// name: string;
	make: string;
	models: Model[];
	error: FieldError;
	register: any;
}

export function ModelSelect({
	make,
	models,
	register,
	error,
	...props
}: ModelSelectProps) {
	const { data, isValidating } = useSWR<Model[]>(`/api/models?make=${make}`, {
		dedupingInterval: 60000,
	});
	const newModels = data || models;
	return (
		<Box>
			<FormControl as="fieldset" isInvalid={!!error} isDisabled={isValidating}>
				<Select ref={register({ required: true })} {...props}>
					<option value="all">Model (any)</option>
					{newModels.map((m) => (
						<option
							key={m.model}
							value={m.model}
						>{`${m.model} (${m.count})`}</option>
					))}
				</Select>
				{/* <FormErrorMessage>
			{errors.model && errors.model.message}
		</FormErrorMessage> */}
			</FormControl>
		</Box>
	);
}
