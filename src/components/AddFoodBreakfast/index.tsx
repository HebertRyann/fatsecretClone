import React, {
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Container } from './styles';

export interface AddFoodBreakfastHandlers {
  openModal: () => void;
}

export const AddFood: React.ForwardRefRenderFunction<AddFoodBreakfastHandlers> = (
  { ...rest },
  ref,
) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const openModal = useCallback(() => {
    setVisibleModal(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const closeModal = useCallback(() => {
    setVisibleModal(false);
  }, []);

  if (!visibleModal) {
    return null;
  }
  return <Container {...rest} />;
};
export default forwardRef(AddFood);
