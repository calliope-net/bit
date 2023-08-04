
//% color=#004FCF icon="\uf120" block="BIT" weight=10
namespace bit
/* 230804
Calliope zusätzliche Blöcke zur Formatierung von Text und Zahlen, Logik
keine Erweiterung für Hardware

Code neu programmiert von Lutz Elßner im Juli 2023
*/ {
    // ========== group="Text (string)"

    export enum eAlign { left, right }
    export enum eLength {
        HEX_ = 0, HEX_F = 1, HEX_FF = 2, HEX_FFF = 3, HEX_FFFF = 4, HEX_FFFFFF = 6, HEX_FFFFFFFF = 8,
        BIN_ = 0x100, BIN_1111 = 0x104, BIN_11111111 = 0x108, BIN_12_ = 0x10C, BIN_16_ = 0x110,
        toString = 0x1000
    }

    //% group="Text (string)"
    //% block="wandle %pInt um in Text %plLength" weight=94
    //% pLength.defl=bit.eLength.HEX_FF
    export function formatNumber(pInt: number, pLength: eLength) {
        let ht: string = ""
        let hi: number = Math.trunc(pInt)

        if (hi < 0) { // negative number behandeln, links unerwünschte FF abschneiden
            hi = ~(Math.abs(hi) - 1)
            if (pLength == eLength.HEX_F || pLength == eLength.BIN_1111) { hi = hi & 0xF }
            else if (pLength == eLength.HEX_FF || pLength == eLength.BIN_11111111) { hi = hi & 0xFF }
            else if (pLength == eLength.HEX_FFF || pLength == eLength.BIN_12_) { hi = hi & 0xFFF }
            else if (pLength == eLength.HEX_FFFF || pLength == eLength.BIN_16_) { hi = hi & 0xFFFF }
            else if (pLength == eLength.HEX_FFFFFF) { hi = hi & 0xFFFFFF }
            else if (pLength == eLength.HEX_FFFFFFFF) { hi = hi & 0xFFFFFFFF }
            else if (pLength == eLength.toString) { }
            else { hi = hi & 0xFF } // Standard 8 Bit
        }

        if (pLength < eLength.BIN_) {
            // HEX pLength = 0, 1, 2, 3, 4, 6, 8
            while (hi > 0) {
                ht = "0123456789ABCDEF".charAt(hi % 16) + ht
                //hi = hi >> 4 // bei 32 bit number >= 0x80000000 kommt 0 raus
                hi = Math.trunc(hi / 16)
            }
            // kürzere Strings mit "0" verlängern, längere so lassen
            if (ht.length < pLength) { ht = replicate("0", pLength - ht.length) + ht }
        } else if (pLength == eLength.toString) {
            // toString pLength = 0x1000
            ht = pInt.toString()
        } else {
            // BIN
            while (hi > 0) {
                ht = "01".charAt(hi % 2) + ht
                hi = hi >> 1
            }
            // kürzere Strings mit "0" verlängern, längere so lassen
            // BIN_ = 0
            if (ht.length < pLength - eLength.BIN_) { ht = replicate("0", pLength - eLength.BIN_ - ht.length) + ht }
        }
        return ht
    }

    //% group="Text (string)"
    //% block="format %pText length %pLength align %pFormat" weight=92
    export function formatText(pText: string, pLength: number, pFormat: eAlign) {
        if (pText.length > pLength) { return pText.substr(0, pLength) }
        else if (pText.length < pLength && pFormat == eAlign.left) { return pText + replicate(" ", pLength - pText.length) }
        else if (pText.length < pLength && pFormat == eAlign.right) { return replicate(" ", pLength - pText.length) + pText }
        else { return pText }
    }

    //% group="Text (string)"
    //% block="replicate Char %pChar length %pLength" weight=90
    export function replicate(pChar: string, pLength: number) {
        let s: string = ""
        if (pChar.length > 0 && pLength > 0) {
            while (s.length < pLength) {
                s = s + pChar
            }
        }
        return s
    }


    // ========== group="Zahl (number)"

    // HEX Parameter
    export enum H0 {
        x0 = 0x0, x1 = 0x1, x2 = 0x2, x3 = 0x3, x4 = 0x4, x5 = 0x5, x6 = 0x6, x7 = 0x7,
        x8 = 0x8, x9 = 0x9, xA = 0xA, xB = 0xB, xC = 0xC, xD = 0xD, xE = 0xE, xF = 0xF
    }
    export enum H4 {
        x00 = 0x00, x10 = 0x10, x20 = 0x20, x30 = 0x30, x40 = 0x40, x50 = 0x50, x60 = 0x60, x70 = 0x70,
        x80 = 0x80, x90 = 0x90, xA0 = 0xA0, xB0 = 0xB0, xC0 = 0xC0, xD0 = 0xD0, xE0 = 0xE0, xF0 = 0xF0
    }

    //% group="Zahl (number)"
    //% block="HEX %x4 + %x0" weight=88
    export function hex(x4: H4, x0: H0) {
        return x4 + x0
    }

    //% group="Zahl (number)"
    //% block="charCodeAt %text index %index" weight=86
    export function charCodeAt(text: string, index: number) {
        return text.charCodeAt(index)
    }

    //% group="Zahl (number)"
    //% block="parseInt %text radix %radix" weight=84
    //% radix.min=2 radix.max=36 radix.default=2
    //% radix.defl=2
    export function parseint(text: string, radix: number) {
        return parseInt(text, radix)
    }

    //% group="Zahl (number)"
    //% block="sign %i Bits 2**%exp" weight=82
    //% exp.defl=7
    export function sign(i: number, exp: number) {
        //i = i2c.HEXe(i2c.H4.x40, i2c.H0.x1)
        if (i < 2 ** exp) { // 2**6 = 64 = 0x40
            return i
        } else {
            i = ~i // Bitwise Not
            i = i & ((2 ** exp) - 1) // 63 = 0x3F alle Bits links löschen
            i += 1
            return -i
        }
    }

    export enum eBit { AND, OR, XOR, NOT_AND, LEFT_SHIFT, RIGHT_SHIFT }

    //% group="Zahl (number)"
    //% block="bitwise %a %operator %b" weight=80
    export function bitwise(a: number, operator: eBit, b: number): number {
        if (operator == eBit.AND) { return a & b }
        else if (operator == eBit.OR) { return a | b }
        else if (operator == eBit.XOR) { return a ^ b }
        else if (operator == eBit.NOT_AND) { return (~a) & b }
        else if (operator == eBit.LEFT_SHIFT) { return a << b }
        else if (operator == eBit.RIGHT_SHIFT) { return a >> b }
        else { return a }
    }


    // ========== group="Boolean"

    //% group="Boolean"
    //% block="%i0 zwischen %i1 und %i2" weight=50
    export function between(i0: number, i1: number, i2: number) {
        return (i0 >= i1 && i0 <= i2)
    }

    //% group="Array boolean[]"
    //% block="wandle %pInt um in Binär-Array" weight=40
    export function bin(pInt: number) {
        let blist: boolean[] = []
        let bi: number = Math.trunc(pInt)
        while (bi > 0) {
            blist.push((bi % 2) == 1)
            bi = bi >> 1
        }
        return blist
    }

} // bit.ts
