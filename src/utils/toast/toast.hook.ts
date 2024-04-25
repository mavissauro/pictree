import { useToastStore } from '~/utils/toast/toast.store';

const useToast = () => {
  const { show, hide } = useToastStore();

  return {
    show,
    hide,
  };
};

export { useToast, useToast as default };
