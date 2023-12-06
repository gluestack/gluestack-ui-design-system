import React from 'react';

import { config } from '@custom-ui/config';
import { StyledProvider } from '@custom-ui/themed';
import { createProvider } from '@custom-ui/themed';

import { Box } from './Layout/Box/Box';
import { Center } from './Layout/Center/Center';

const TempProvider = createProvider({ StyledProvider }) as any;
TempProvider.displayName = 'Provider';

export const Provider = ({ children }: any) => {
  return (
    <TempProvider config={config}>
      <Box
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <Center>{children}</Center>
      </Box>
    </TempProvider>
  );
};
