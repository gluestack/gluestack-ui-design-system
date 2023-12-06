import React from 'react';

import {
  Spinner,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/custom-design-system';

const SpinnerBasic = ({ ...props }) => <Spinner {...props} />;

SpinnerBasic.description =
  'This is a basic Spinner component example. Spinners are used to show a loading state of a component or page.';

export default SpinnerBasic;

export { Spinner, HStack, Text, VStack };
