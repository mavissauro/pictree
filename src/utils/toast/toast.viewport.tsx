import { Incubator } from 'react-native-ui-lib';

import { useToastStore } from '~/utils/toast/toast.store';

const { Toast } = Incubator;

export const ToastViewport = () => {
  const { toast, hide } = useToastStore();

  return <Toast autoDismiss={2000} swipeable centerMessage onDismiss={hide} {...toast} />;
};
