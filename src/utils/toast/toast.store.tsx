import { Incubator } from 'react-native-ui-lib';
import { create } from 'zustand';

type ToastStoreState = {
  toast: Incubator.ToastProps;
};

type ToastStoreAction = {
  show: (toast: Incubator.ToastProps) => void;
  hide: () => void;
};

const useToastStore = create<ToastStoreState & ToastStoreAction>((set) => ({
  toast: {
    visible: false,
    position: 'top',
    message: '',
    elevation: 10,
    autoDismiss: 200,
  },
  show: (toast: Incubator.ToastProps) => set((current) => ({ toast: { ...toast, visible: true } })),
  hide: () => set((current) => ({ toast: { ...current.toast, visible: false } })),
}));

export { useToastStore };
