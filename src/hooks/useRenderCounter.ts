import { useRef } from 'react';

export function useRenderCounter(componentName: string) {
  const counter = useRef(0);

  counter.current += 1;

  console.log(
    `${componentName} renderizou ${counter.current} ${counter.current === 1 ? 'vez' : 'vezes'
    }.`,
  );
}
