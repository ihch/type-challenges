// implement the built-in Pick<T, K> generic without using it

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyPick<T, S> = {[K in keyof T && K in keyof S]: T[K]};

// keyof T => 'title' | 'description' | 'completed';
// S は T の部分集合という制約をつける
// 型変数P 型Pが型集合Sに存在するとき型Pをkey、T.Pの値の型を得る
type MyPick<T, S extends keyof T> = { [P in S]: T[P] };

// あそこにreadonlyをつけると読み取り専用のプロパティを定義できる
// type MyPick<T, S extends keyof T> = { readonly [P in S]: T[P] };

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
