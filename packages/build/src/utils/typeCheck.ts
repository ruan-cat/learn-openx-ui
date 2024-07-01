// # 判断对象类型的方法

// packages/build/src/utils/typeCheck.ts
export function isObjectLike(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
