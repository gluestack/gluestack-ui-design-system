import { Button, ButtonText } from '@gluestack-ui/custom-design-system';
import { VStack } from '@gluestack-ui/custom-design-system';

import React from 'react';

const ButtonAllVariants = ({}) => {
  const variants = ['solid', 'outline', 'link'];
  return (
    <VStack space="md">
      {variants.map((variant: any) => {
        return (
          <Button variant={variant} mt="$4">
            <ButtonText>{variant}</ButtonText>
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonAllVariants;
