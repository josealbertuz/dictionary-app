import React, { ComponentProps } from 'react'
import { Input, SearchIcon, InputWrapper, SearchInputRoot, HelperText } from './SearchInput.styles'
import { Text } from '@components/Text'

type SearchInputProps = ComponentProps<typeof Input> & {
  helperText?: string
  error?: boolean
}

export const SearchInput = ({ error, helperText, ...props }: SearchInputProps) => {
  return (
    <SearchInputRoot>
      <InputWrapper>
        <Input error={error} {...props} />
        <SearchIcon name="icon-search" size="5" />
      </InputWrapper>
      <HelperText>
        {Boolean(error && helperText) && (
          <Text size="heading-s" color="error" font="inter">
            {helperText}
          </Text>
        )}
      </HelperText>
    </SearchInputRoot>
  )
}

SearchInput.displayName = 'SearchInput'
