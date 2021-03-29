import React, { useCallback } from 'react';

import { SmallButton } from './styles';

interface DeleteButtonProps {
  id: number;
  onDeleteClick: (id: number) => void;
}

export function DeleteButton({ id, onDeleteClick }: DeleteButtonProps): JSX.Element {
  const deleteClick = useCallback(() => {
    onDeleteClick(id);
  }, [id, onDeleteClick])

  return (
    <SmallButton onClick={deleteClick}>&times;</SmallButton>
  );
}
