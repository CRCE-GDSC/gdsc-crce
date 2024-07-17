import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export function Droppable({ id, className, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className={className}>
      {children}
    </div>
  );
}
