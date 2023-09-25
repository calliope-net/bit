
//% color=#004FCF icon="\uf120" block="BIT" weight=26
namespace bit
/* 230826 230925 https://github.com/calliope-net/bit

Calliope zusätzliche Blöcke zur Formatierung von Text und Zahlen, Logik,
keine Hardware-Erweiterung
[Projekt-URL] https://github.com/calliope-net/bit
[README]      https://calliope-net.github.io/bit/

Code neu programmiert von Lutz Elßner im Juli, August, September 2023
*/ {

    export enum eAlign { left, right }
    export enum eLength {
        HEX_ = 0, HEX_F = 1, HEX_FF = 2, HEX_FFF = 3, HEX_FFFF = 4, HEX_FFFFFF = 6, HEX_FFFFFFFF = 8,
        BIN_ = 0x100, BIN_1111 = 0x104, BIN_11111 = 0x105, BIN_111111 = 0x106, BIN_11111111 = 0x108, BIN_12_ = 0x10C, BIN_16_ = 0x110,
        toString = 0x1000
    }



    // ========== group="Text (string)"

    //% blockId=bit_text
    //% group="Text (string)" weight=9
    //% block="%s"
    export function bit_text(s: string): string { return s }

    //% group="Text (string)"
    //% block="wandle %pInt um in Text %plLength" weight=8
    //% pLength.defl=bit.eLength.HEX_FF
    export function formatNumber(pInt: number, pLength: eLength) {
        let ht: string = ""
        let hi: number = Math.trunc(pInt)
        /* 
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
         */
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
    //% block="wandle %pNumber um in HEX %pFormat" weight=7
    //% pFormat.defl=NumberFormat.UInt16BE
    export function formatHex(pNumber: number, pFormat: NumberFormat) {
        let bu = Buffer.create(Buffer.sizeOfNumberFormat(pFormat))
        bu.setNumber(pFormat, 0, pNumber)
        return bu.toHex()
    }

    //% group="Text (string)"
    //% block="format %pText length %pLength align %pFormat" weight=6
    export function formatText(pText: string, pLength: number, pFormat: eAlign) {
        if (pText.length > pLength) { return pText.substr(0, pLength) }
        else if (pText.length < pLength && pFormat == eAlign.left) { return pText + replicate(" ", pLength - pText.length) }
        else if (pText.length < pLength && pFormat == eAlign.right) { return replicate(" ", pLength - pText.length) + pText }
        else { return pText }
    }

    //% group="Text (string)"
    //% block="wiederhole Char %pChar length %pLength" weight=5
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


    //% blockId=bit_zahl
    //% group="Zahl (number)"
    //% block="%n" weight=9
    export function bit_zahl(n: number): number { return n }



    //% group="Zahl (number)"
    //% block="charCodeAt %text index %index" weight=3
    export function charCodeAt(text: string, index: number) {
        return text.charCodeAt(index)
    }

    //% group="Zahl (number)"
    //% block="parseInt %text radix %radix" weight=2
    //% radix.min=2 radix.max=36 radix.default=2
    //% radix.defl=2
    export function parseint(text: string, radix: number) {
        return parseInt(text, radix)
    }



    // ========== advanced=true

    // ========== group="Logik (number)"

    export enum eBit {
        //% block="a & b AND"
        AND,
        //% block="a | b OR"
        OR,
        //% block="a ^ b XOR"
        XOR,
        //% block="(~a) & b (NOT a) AND b"
        NOT_AND,
        //% block="a << b"
        LEFT,
        //% block="a >> b"
        RIGHT,
        //% block="a >>> b"
        RIGHTZ
    }

    //% group="Logik (number)" advanced=true
    //% block="Bitweise %a %operator %b" weight=4
    export function bitwise(a: number, operator: eBit, b: number): number {
        if (operator == eBit.AND) { return a & b }
        else if (operator == eBit.OR) { return a | b }
        else if (operator == eBit.XOR) { return a ^ b }
        else if (operator == eBit.NOT_AND) { return (~a) & b }
        else if (operator == eBit.LEFT) { return a << b }
        else if (operator == eBit.RIGHT) { return a >> b }
        else if (operator == eBit.RIGHTZ) { return a >>> b }
        else { return a }
    }

    //% group="Logik (number)" advanced=true
    //% block="Bitweise NOT %a" weight=3
    export function not(a: number): number { return ~a }


    //% group="Logik (number)" advanced=true
    //% block="Vorzeichen %i Bits 2** %exp" weight=2
    //% exp.defl=7
    export function sign(i: number, exp: number): number {
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


    //% group="Logik (number)" advanced=true
    //% block="Zahl %pInt setBit 2** %exp %pBit" weight=1
    //% exp.min=0 exp.max=31
    export function setBit(pInt: number, exp: number, pBit: boolean) {
        exp = Math.trunc(exp)
        if (between(exp, 0, 63)) {
            if (pBit)
                return pInt | 2 ** exp
            else
                return pInt & ~(2 ** exp)
        } else
            return pInt
    }


    // ========== group="Logik (boolean)"

    //% group="Logik (boolean)" advanced=true
    //% block="Zahl %pInt getBit 2** %exp" weight=5
    //% exp.min=0 exp.max=31
    export function getBit(pInt: number, exp: number): boolean {
        exp = Math.trunc(exp)
        if (between(exp, 0, 63))
            return (pInt & 2 ** exp) != 0
        else
            return false
    }

    //% group="Logik (boolean)" advanced=true
    //% block="%i0 zwischen %i1 und %i2" weight=4
    export function between(i0: number, i1: number, i2: number): boolean {
        return (i0 >= i1 && i0 <= i2)
    }

    // ========== group="Array boolean[]" advanced=true

    //% group="Array boolean[]" advanced=true
    //% block="wandle %pInt um in Binär-Array"
    export function toBinArray(pInt: number): boolean[] {
        let blist: boolean[] = []
        let bi: number = Math.trunc(pInt)
        while (bi > 0) {
            blist.push((bi % 2) == 1)
            bi = bi >> 1
        }
        return blist
    }


    // ========== group=  //Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.

    //% group="Turn on the specified LED (x is horizontal, y is vertical). (0,0) is upper left." advanced=true
    //% block="25 LED x %x y %y"
    //% x.min=0 x.max=4
    export function plot25LED(x: number, y: boolean[]) {
        if (between(x, 0, 4)) {
            if (y.length > 0 && y.get(0)) { led.plot(x, 4) } else { led.unplot(x, 4) }
            if (y.length > 1 && y.get(1)) { led.plot(x, 3) } else { led.unplot(x, 3) }
            if (y.length > 2 && y.get(2)) { led.plot(x, 2) } else { led.unplot(x, 2) }
            if (y.length > 3 && y.get(3)) { led.plot(x, 1) } else { led.unplot(x, 1) }
            if (y.length > 4 && y.get(4)) { led.plot(x, 0) } else { led.unplot(x, 0) }
        }
    }


    // ========== group="Musik"

    //% group="Musik" advanced=true
    //% block="beginMelody %pMelodyArray" weight=3
    export function beginMelody(pMelodyArray: string[]) { music.beginMelody(pMelodyArray, MelodyOptions.Once) }

    //% group="Musik" advanced=true
    //% block="builtInMelody %pMelodies" weight=2
    export function builtInMelody(pMelodies: Melodies) { return music.builtInMelody(pMelodies) }



} // bit.ts
