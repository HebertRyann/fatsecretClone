import React, {
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Container } from './styles';

export interface AddFoodLunchHandlers {
  openModal: () => void;
}

export const AddFood: React.ForwardRefRenderFunction<AddFoodLunchHandlers> = (
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
  return (
    <Container {...rest}>
      <form>
        <input type="text" />
        <button type="button">Adicionar</button>
        <button type="button" onClick={closeModal}>
          X
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>arroz</td>
            <td>120g</td>
            <td>300kcl</td>
          </tr>
          <tr>
            <td>arroz</td>
            <td>120g</td>
            <td>300kcl</td>
          </tr>
          <tr>
            <td>arroz</td>
            <td>120g</td>
            <td>300kcl</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default forwardRef(AddFood);
