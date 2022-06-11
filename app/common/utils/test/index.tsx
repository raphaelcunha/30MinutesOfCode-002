import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { WrapperAppProvider } from 'unit-test/wrapperTest'

export type TRenderProps = {
  children: React.ReactNode
}

const render = (ui: React.ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC<TRenderProps> = ({ children }) => {
    return <WrapperAppProvider>{children}</WrapperAppProvider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
