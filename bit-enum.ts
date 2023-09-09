
namespace bit
/* 230909 https://github.com/calliope-net/bit

*/ {

    //% blockId=bit_hex4
    //% group="Zahl (number)" weight=6
    //% block="%x0"
    export function bit_hex4(x0: eHEX4bit) { return x0 }

    //% blockId=bit_hex8
    //% group="Zahl (number)" weight=5
    //% block="%x0"
    export function bit_hex8(x0: eHEX8bit) { return x0 }

    //% blockId=bit_hex16
    //% group="Zahl (number)" weight=4
    //% block="%x8 %x0"
    export function bit_hex16(x8: eHEX8bit, x0: eHEX8bit) { return (x8 << 8) + x0 }



    // HEX Parameter
    export enum eHEX4bit {
        //% block="0"
        x0 = 0x0,
        //% block="1"
        x1 = 0x1,
        //% block="2"
        x2 = 0x2,
        //% block="3"
        x3 = 0x3,
        //% block="4"
        x4 = 0x4,
        //% block="5"
        x5 = 0x5,
        //% block="6"
        x6 = 0x6,
        //% block="7"
        x7 = 0x7,
        //% block="8"
        x8 = 0x8,
        //% block="9"
        x9 = 0x9,
        //% block="A"
        xA = 0xA,
        //% block="B"
        xB = 0xB,
        //% block="C"
        xC = 0xC,
        //% block="D"
        xD = 0xD,
        //% block="E"
        xE = 0xE,
        //% block="F"
        xF = 0xF
    }

    export enum eHEX8bit {
        //% block="00"
        x00 = 0x0,
        //% block="01"
        x01 = 0x1,
        //% block="02"
        x02 = 0x2,
        //% block="03"
        x03 = 0x3,
        //% block="04"
        x04 = 0x4,
        //% block="05"
        x05 = 0x5,
        //% block="06"
        x06 = 0x6,
        //% block="07"
        x07 = 0x7,
        //% block="08"
        x08 = 0x8,
        //% block="09"
        x09 = 0x9,
        //% block="0A"
        x0A = 0xA,
        //% block="0B"
        x0B = 0xB,
        //% block="0C"
        x0C = 0xC,
        //% block="0D"
        x0D = 0xD,
        //% block="0E"
        x0E = 0xE,
        //% block="0F"
        x0F = 0xF,
        //% block="10"
        x10 = 0x10,
        //% block="11"
        x11 = 0x11,
        //% block="12"
        x12 = 0x12,
        //% block="13"
        x13 = 0x13,
        //% block="14"
        x14 = 0x14,
        //% block="15"
        x15 = 0x15,
        //% block="16"
        x16 = 0x16,
        //% block="17"
        x17 = 0x17,
        //% block="18"
        x18 = 0x18,
        //% block="19"
        x19 = 0x19,
        //% block="1A"
        x1A = 0x1A,
        //% block="1B"
        x1B = 0x1B,
        //% block="1C"
        x1C = 0x1C,
        //% block="1D"
        x1D = 0x1D,
        //% block="1E"
        x1E = 0x1E,
        //% block="1F"
        x1F = 0x1F,
        //% block="20"
        x20 = 0x20,
        //% block="21"
        x21 = 0x21,
        //% block="22"
        x22 = 0x22,
        //% block="23"
        x23 = 0x23,
        //% block="24"
        x24 = 0x24,
        //% block="25"
        x25 = 0x25,
        //% block="26"
        x26 = 0x26,
        //% block="27"
        x27 = 0x27,
        //% block="28"
        x28 = 0x28,
        //% block="29"
        x29 = 0x29,
        //% block="2A"
        x2A = 0x2A,
        //% block="2B"
        x2B = 0x2B,
        //% block="2C"
        x2C = 0x2C,
        //% block="2D"
        x2D = 0x2D,
        //% block="2E"
        x2E = 0x2E,
        //% block="2F"
        x2F = 0x2F,
        //% block="30"
        x30 = 0x30,
        //% block="31"
        x31 = 0x31,
        //% block="32"
        x32 = 0x32,
        //% block="33"
        x33 = 0x33,
        //% block="34"
        x34 = 0x34,
        //% block="35"
        x35 = 0x35,
        //% block="36"
        x36 = 0x36,
        //% block="37"
        x37 = 0x37,
        //% block="38"
        x38 = 0x38,
        //% block="39"
        x39 = 0x39,
        //% block="3A"
        x3A = 0x3A,
        //% block="3B"
        x3B = 0x3B,
        //% block="3C"
        x3C = 0x3C,
        //% block="3D"
        x3D = 0x3D,
        //% block="3E"
        x3E = 0x3E,
        //% block="3F"
        x3F = 0x3F,
        //% block="40"
        x40 = 0x40,
        //% block="41"
        x41 = 0x41,
        //% block="42"
        x42 = 0x42,
        //% block="43"
        x43 = 0x43,
        //% block="44"
        x44 = 0x44,
        //% block="45"
        x45 = 0x45,
        //% block="46"
        x46 = 0x46,
        //% block="47"
        x47 = 0x47,
        //% block="48"
        x48 = 0x48,
        //% block="49"
        x49 = 0x49,
        //% block="4A"
        x4A = 0x4A,
        //% block="4B"
        x4B = 0x4B,
        //% block="4C"
        x4C = 0x4C,
        //% block="4D"
        x4D = 0x4D,
        //% block="4E"
        x4E = 0x4E,
        //% block="4F"
        x4F = 0x4F,
        //% block="50"
        x50 = 0x50,
        //% block="51"
        x51 = 0x51,
        //% block="52"
        x52 = 0x52,
        //% block="53"
        x53 = 0x53,
        //% block="54"
        x54 = 0x54,
        //% block="55"
        x55 = 0x55,
        //% block="56"
        x56 = 0x56,
        //% block="57"
        x57 = 0x57,
        //% block="58"
        x58 = 0x58,
        //% block="59"
        x59 = 0x59,
        //% block="5A"
        x5A = 0x5A,
        //% block="5B"
        x5B = 0x5B,
        //% block="5C"
        x5C = 0x5C,
        //% block="5D"
        x5D = 0x5D,
        //% block="5E"
        x5E = 0x5E,
        //% block="5F"
        x5F = 0x5F,
        //% block="60"
        x60 = 0x60,
        //% block="61"
        x61 = 0x61,
        //% block="62"
        x62 = 0x62,
        //% block="63"
        x63 = 0x63,
        //% block="64"
        x64 = 0x64,
        //% block="65"
        x65 = 0x65,
        //% block="66"
        x66 = 0x66,
        //% block="67"
        x67 = 0x67,
        //% block="68"
        x68 = 0x68,
        //% block="69"
        x69 = 0x69,
        //% block="6A"
        x6A = 0x6A,
        //% block="6B"
        x6B = 0x6B,
        //% block="6C"
        x6C = 0x6C,
        //% block="6D"
        x6D = 0x6D,
        //% block="6E"
        x6E = 0x6E,
        //% block="6F"
        x6F = 0x6F,
        //% block="70"
        x70 = 0x70,
        //% block="71"
        x71 = 0x71,
        //% block="72"
        x72 = 0x72,
        //% block="73"
        x73 = 0x73,
        //% block="74"
        x74 = 0x74,
        //% block="75"
        x75 = 0x75,
        //% block="76"
        x76 = 0x76,
        //% block="77"
        x77 = 0x77,
        //% block="78"
        x78 = 0x78,
        //% block="79"
        x79 = 0x79,
        //% block="7A"
        x7A = 0x7A,
        //% block="7B"
        x7B = 0x7B,
        //% block="7C"
        x7C = 0x7C,
        //% block="7D"
        x7D = 0x7D,
        //% block="7E"
        x7E = 0x7E,
        //% block="7F"
        x7F = 0x7F,
        //% block="80"
        x80 = 0x80,
        //% block="81"
        x81 = 0x81,
        //% block="82"
        x82 = 0x82,
        //% block="83"
        x83 = 0x83,
        //% block="84"
        x84 = 0x84,
        //% block="85"
        x85 = 0x85,
        //% block="86"
        x86 = 0x86,
        //% block="87"
        x87 = 0x87,
        //% block="88"
        x88 = 0x88,
        //% block="89"
        x89 = 0x89,
        //% block="8A"
        x8A = 0x8A,
        //% block="8B"
        x8B = 0x8B,
        //% block="8C"
        x8C = 0x8C,
        //% block="8D"
        x8D = 0x8D,
        //% block="8E"
        x8E = 0x8E,
        //% block="8F"
        x8F = 0x8F,
        //% block="90"
        x90 = 0x90,
        //% block="91"
        x91 = 0x91,
        //% block="92"
        x92 = 0x92,
        //% block="93"
        x93 = 0x93,
        //% block="94"
        x94 = 0x94,
        //% block="95"
        x95 = 0x95,
        //% block="96"
        x96 = 0x96,
        //% block="97"
        x97 = 0x97,
        //% block="98"
        x98 = 0x98,
        //% block="99"
        x99 = 0x99,
        //% block="9A"
        x9A = 0x9A,
        //% block="9B"
        x9B = 0x9B,
        //% block="9C"
        x9C = 0x9C,
        //% block="9D"
        x9D = 0x9D,
        //% block="9E"
        x9E = 0x9E,
        //% block="9F"
        x9F = 0x9F,
        //% block="A0"
        xA0 = 0xA0,
        //% block="A1"
        xA1 = 0xA1,
        //% block="A2"
        xA2 = 0xA2,
        //% block="A3"
        xA3 = 0xA3,
        //% block="A4"
        xA4 = 0xA4,
        //% block="A5"
        xA5 = 0xA5,
        //% block="A6"
        xA6 = 0xA6,
        //% block="A7"
        xA7 = 0xA7,
        //% block="A8"
        xA8 = 0xA8,
        //% block="A9"
        xA9 = 0xA9,
        //% block="AA"
        xAA = 0xAA,
        //% block="AB"
        xAB = 0xAB,
        //% block="AC"
        xAC = 0xAC,
        //% block="AD"
        xAD = 0xAD,
        //% block="AE"
        xAE = 0xAE,
        //% block="AF"
        xAF = 0xAF,
        //% block="B0"
        xB0 = 0xB0,
        //% block="B1"
        xB1 = 0xB1,
        //% block="B2"
        xB2 = 0xB2,
        //% block="B3"
        xB3 = 0xB3,
        //% block="B4"
        xB4 = 0xB4,
        //% block="B5"
        xB5 = 0xB5,
        //% block="B6"
        xB6 = 0xB6,
        //% block="B7"
        xB7 = 0xB7,
        //% block="B8"
        xB8 = 0xB8,
        //% block="B9"
        xB9 = 0xB9,
        //% block="BA"
        xBA = 0xBA,
        //% block="BB"
        xBB = 0xBB,
        //% block="BC"
        xBC = 0xBC,
        //% block="BD"
        xBD = 0xBD,
        //% block="BE"
        xBE = 0xBE,
        //% block="BF"
        xBF = 0xBF,
        //% block="C0"
        xC0 = 0xC0,
        //% block="C1"
        xC1 = 0xC1,
        //% block="C2"
        xC2 = 0xC2,
        //% block="C3"
        xC3 = 0xC3,
        //% block="C4"
        xC4 = 0xC4,
        //% block="C5"
        xC5 = 0xC5,
        //% block="C6"
        xC6 = 0xC6,
        //% block="C7"
        xC7 = 0xC7,
        //% block="C8"
        xC8 = 0xC8,
        //% block="C9"
        xC9 = 0xC9,
        //% block="CA"
        xCA = 0xCA,
        //% block="CB"
        xCB = 0xCB,
        //% block="CC"
        xCC = 0xCC,
        //% block="CD"
        xCD = 0xCD,
        //% block="CE"
        xCE = 0xCE,
        //% block="CF"
        xCF = 0xCF,
        //% block="D0"
        xD0 = 0xD0,
        //% block="D1"
        xD1 = 0xD1,
        //% block="D2"
        xD2 = 0xD2,
        //% block="D3"
        xD3 = 0xD3,
        //% block="D4"
        xD4 = 0xD4,
        //% block="D5"
        xD5 = 0xD5,
        //% block="D6"
        xD6 = 0xD6,
        //% block="D7"
        xD7 = 0xD7,
        //% block="D8"
        xD8 = 0xD8,
        //% block="D9"
        xD9 = 0xD9,
        //% block="DA"
        xDA = 0xDA,
        //% block="DB"
        xDB = 0xDB,
        //% block="DC"
        xDC = 0xDC,
        //% block="DD"
        xDD = 0xDD,
        //% block="DE"
        xDE = 0xDE,
        //% block="DF"
        xDF = 0xDF,
        //% block="E0"
        xE0 = 0xE0,
        //% block="E1"
        xE1 = 0xE1,
        //% block="E2"
        xE2 = 0xE2,
        //% block="E3"
        xE3 = 0xE3,
        //% block="E4"
        xE4 = 0xE4,
        //% block="E5"
        xE5 = 0xE5,
        //% block="E6"
        xE6 = 0xE6,
        //% block="E7"
        xE7 = 0xE7,
        //% block="E8"
        xE8 = 0xE8,
        //% block="E9"
        xE9 = 0xE9,
        //% block="EA"
        xEA = 0xEA,
        //% block="EB"
        xEB = 0xEB,
        //% block="EC"
        xEC = 0xEC,
        //% block="ED"
        xED = 0xED,
        //% block="EE"
        xEE = 0xEE,
        //% block="EF"
        xEF = 0xEF,
        //% block="F0"
        xF0 = 0xF0,
        //% block="F1"
        xF1 = 0xF1,
        //% block="F2"
        xF2 = 0xF2,
        //% block="F3"
        xF3 = 0xF3,
        //% block="F4"
        xF4 = 0xF4,
        //% block="F5"
        xF5 = 0xF5,
        //% block="F6"
        xF6 = 0xF6,
        //% block="F7"
        xF7 = 0xF7,
        //% block="F8"
        xF8 = 0xF8,
        //% block="F9"
        xF9 = 0xF9,
        //% block="FA"
        xFA = 0xFA,
        //% block="FB"
        xFB = 0xFB,
        //% block="FC"
        xFC = 0xFC,
        //% block="FD"
        xFD = 0xFD,
        //% block="FE"
        xFE = 0xFE,
        //% block="FF"
        xFF = 0xFF
    }

} // bit-enum.ts