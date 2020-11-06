type T = '1' | '2';
type U = '2';

// 型の中身ごとに評価される
// T extends U => TはUのサブセットという制約
// ... ? never : T => truthyならnever(除外), falsyなら型変数Tを返す
type MyExclude<T, U> = T extends U ? never : T;

type Hoge = MyExclude<T, U>;
