import { InternalizationExample } from 'components/InternalizationExample';
import { Stack, Link } from 'expo-router';
import { Button } from 'react-native-ui-lib';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home">
          <InternalizationExample />
        </ScreenContent>
        <Link href={{ pathname: '/sign-in' }} asChild>
          <Button label="Show Details" />
        </Link>
      </Container>
    </>
  );
}
