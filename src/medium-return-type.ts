const fn = (v: boolean) => {
    if (v) return 1;
    return 2;
};

type s = typeof fn;
// (v: boolean) => 1 | 2

// T extends (arg: boolean) => infer R  => Tはboolean型の引数を一つとり、何らかの型Rを返す関数の型という制約
// ... ? R : T => truthyなら返却値の型Rを返す, falsyなら関数の型Tを返す
type MyReturnType<T> = T extends (arg: boolean) => infer R ? R : T;

type a = MyReturnType<typeof fn> // should be "1 | 2"

// T extends (arg: number) => infer R => など条件に当てはまらなかったとき
// Tが帰っている
// type a = (v: boolean) => 1 | 2

// 型引数Tをより厳密に type MyReturnType<T extends Function>と定義している人もいる
// 関数Tの引数の型をより抽象的に T extends (...args: any) としている人もいた
