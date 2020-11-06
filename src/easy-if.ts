// T extends true => Tはtrueのサブセットという制約
// ... ? S : U => truthyならS, falsyならUを返す
type If<T, S, U> = T extends true ? S : U;
// より厳密に第一型引数にextends booleanをしている人もいる
// type If<T extends boolean, S, U> = T extends true ? S : U;

type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
