[![npm version](https://badge.fury.io/js/get-connpass-items.svg)](https://badge.fury.io/js/get-connpass-items)
![node](https://img.shields.io/badge/node-%3E%3D%208.0.0-brightgreen.svg?style=social)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# get-connpass-items

`get-connpass-items (gtconn)` is a CLI application.

## Installation

```cmd
$ npm install -g get-connpass-items
```

## Usage (example)

```cmd
$ gtci -k wejs -n kuwahara_jsar -c 3

┌────────────────────────────────────────────────────────────┐
│                                                            │
│   title: We Are JavaScripters! @24th【初心者歓迎LT大会】   │
│   url:   https://wajs.connpass.com/event/100257/           │
│   date:  2018-09-21T17:40:26+09:00                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   title: We Are JavaScripters! @23rd【初心者歓迎LT大会】   │
│   url:   https://wajs.connpass.com/event/96435/            │
│   date:  2018-08-21T14:25:19+09:00                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   title: We Are JavaScripters! @22nd【初心者歓迎LT大会】   │
│   url:   https://wajs.connpass.com/event/91558/            │
│   date:  2018-07-23T19:44:42+09:00                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

note: If it takes more than `5000ms` it will time out.

```
┌────────────────────────┐
│   Request timeout ;(   │
│   Please try again.    │
└────────────────────────┘
```

## License

[MIT](https://github.com/k-kuwahara/get-connpass-items/LICENSE)

# Others
Please write a new [issues](https://github.com/k-kuwahara/get-connpass-items/issues)! Please send me [PRs](https://github.com/k-kuwahara/get-connpass-items/pulls)!
