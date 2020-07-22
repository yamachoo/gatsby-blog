---
title: "Hello World"
created: "2020-07-04"
updated: "2020-07-10"
path: /hello-world
description: "Hello World!"
visual: "./sample.png"
---

## Block Elements

## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

## Block 段落

段落1

段落2

## Br 改行

改行の前に半角スペース`  `を2つ記述します。

hoge  
fuga  
piyo  

## Blockquotes 引用

> 引用  
> 引用
>> 多重引用

## Code コード

```c
print 'hoge'
```

### インラインコード

これは `インラインコード`です。

## pre 整形済みテキスト

    class Hoge
        def hoge
            print 'hoge'
        end
    end

## Hr 水平線

hoge
***
hoge
___

## Lists

## Ul 箇条書きリスト

- リスト1
    - リスト1_1
        - リスト1_1-1
        - リスト1_1-2
    - リスト1_2
- リスト2
- リスト3

## Ol 番号付きリスト

1. 番号付きリスト1
    1. 番号付きリスト1-1
    1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3

## Span Elements

## Link リンク

[Google](https://www.google.co.jp/)

### 外部参照リンク

[Yahoo]: http://www.yahoo.co.jp
[Yahooを見る][Yahoo]

## 強調
### em

これは *イタリック* です
これは _イタリック_ です

### strong

これは **ボールド** です
これは __ボールド__ です

### em + strong

これは ***イタリック＆ボールド*** です
これは ___イタリック＆ボールド___ です

## Images 画像

![サンプル](./sample.png)

## Table 表

| HTML | CSS | JavaScript | PHP | RUby | Python |
:---:|:---:|:---:|:---:|:---:|:---:
| TD1 | TD3 | TD5 | TD7 | TD9 | TD11 |
| TD2 | TD4 | TD6 | TD8 | TD10 | TD12 |

| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |

```js:title=example-file.js
alert('how cool is this!');

alert('how cool is this!');
alert('how cool is this!');

alert('how cool is this!');
```
