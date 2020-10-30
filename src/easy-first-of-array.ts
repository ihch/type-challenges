type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

// conditional type というやつ
// T extends any[] => Tはanyのリストという制約
// T extends [] ? never : T[0] => Tは空のリストという制約がtruthyならnever,
//   falsyならTの0番目の型を返す
type First<T extends any[]> = T extends [] ? never : T[0];

type head1 = First<arr1>;
type head2 = First<arr2>;
