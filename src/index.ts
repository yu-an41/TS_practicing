// ---------- 基本類型 -------------

let str = 'Yvonne'

let num: number = 1000
let boo: boolean = true
let n:null = null
let un:undefined = undefined

let test: any = true

// 陣列

let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aaa', 'bbb']]

// 元祖
let tuple: [number, string, boolean]= [1, 'a', true]
let tuple2: [string, string][] = [['a','b']]

//  ---------- Enum 枚舉 -------------
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const status1 = LiveStatus.SUCCESS
console.log(status1);

//  ---------- Union ------------- 
let aaa: number | string;
aaa = 1000
aaa = 'str'


//  ---------- type -------------
type A = number | string
type B = boolean | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1 = true

//  ---------- interface -------------
interface User {
    name: string;
    age: number;
    
}

//  ---------- object -------------
type Card = {
    name: string
    desc: string
}
// 如果希望類型是可以擴充的，就用interface
// 會繼承原本的，再新增新的類型
interface Card2 {
    name: string
    desc: string
}

interface Card2 {
    age?: number
    // ? 選填（可以接受為undeifined）
}

const obj: Card2 = {
    name: 'Yvonne',
    desc: '...',
}

//  ---------- function -------------
// 參數
// function hello () {}
function hello (a: string, b: string) {
    return a + b

}

function hello2 (a: string, b: string): number {
    console.log(a, b);
    return 999
}

function hello3 (a: number, b: boolean, c: string) {
    return 100
}

// undefined
function hello4 (name: string, age?: number) {
    // 有?的參數要放在最後
    return age
}