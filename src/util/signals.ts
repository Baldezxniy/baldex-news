const SIGNAL_MARK = Symbol('SIGNAL_MARK');

export type Signal<T = any> = ((() => T) & {
  readonly [SIGNAL_MARK]: symbol;
  subscribe: (cb: AnyToVoidFunction) => NoneToVoidFunction;
});

export function isSignal(obj: any): obj is Signal {
  return typeof obj === 'function' && SIGNAL_MARK in obj;
}
