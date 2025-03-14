import React, { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import {
    FormControl, FormErrorMessage, FormHelperText, FormLabel, Textarea
} from '@chakra-ui/react';

import { useErrorMessage } from '../hooks/useErrorMessage';
import { useStyles } from '../hooks/useStyles';
import { FieldProps, FieldStyles, TextAreaFieldSchema } from '../types';

export const TextAreaField: FC<FieldProps<TextAreaFieldSchema>> = ({
  id,
  name,
  field,
  defaultValue,
}) => {
  const {
    label,
    placeholder,
    helperText,
    isRequired,
    shouldDisplay,
    styles = {},
  } = field;

  const fieldStyles = useStyles<FieldStyles>('textAreaField', styles);

  const { register, watch } = useFormContext();

  const errorMessage = useErrorMessage(name, label);

  const values = watch(name);

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);

  return isVisible ? (
    <FormControl
      isRequired={isRequired}
      isInvalid={!!errorMessage}
      {...fieldStyles.control}
    >
      {!!label && (
        <FormLabel htmlFor={name} {...fieldStyles.label}>
          {label}
        </FormLabel>
      )}
      <Textarea
        data-testid={id}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue || ''}
        {...fieldStyles.input}
      />
      {!!helperText && (
        <FormHelperText {...fieldStyles.helperText}>
          {helperText}
        </FormHelperText>
      )}
      <FormErrorMessage {...fieldStyles.errorMessage}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  ) : null;
};
