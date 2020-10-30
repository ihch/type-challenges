const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as constl

// T extends readonly string[] Tは読み込み専用のstring array
// P in T[number] PはTのnumber番目の文字列
// [...]: P 対応する型を返す
type TupleToObject<T extends readonly string[]> = {[P in T[number]]: P };

const result: TupleToObject<typeof tuple> = {
  tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'
} // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
