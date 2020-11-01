type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

// T extends any[] => Tはanyのリストという制約
// T['length'] => Tは型のリストだから型としてlengthをもつ
//   T.lengthはできない
type Length<T extends any[]> = T['length'];

type teslaLength = Length<tesla>;
type spaceXLength = Length<spaceX>;
