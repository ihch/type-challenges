import { Expect, Equal } from '../index.d';

// HelloWorldをstringと等価な型にする
// type HelloWorld = any;

// my answer
type HelloWorld = string;

type test = Expect<Equal<HelloWorld, string>>;
