import { Incubator } from 'react-native-ui-lib';

import { useToastStore } from '~/utils/toast/toast.store';

const { Toast } = Incubator;

export const ToastViewport = () => {
  const { toast } = useToastStore();

  return <Toast {...toast} />;
};
